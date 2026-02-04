import sqlite3 from "sqlite3";
import Clearline7 from "./Clearline7.js";

const db = new sqlite3.Database("./clearline7.db");

// Helper to insert a row and get its ID
function insert(table, columns, values) {
  return new Promise((resolve, reject) => {
    const placeholders = values.map(() => "?").join(",");
    db.run(`INSERT INTO ${table} (${columns.join(",")}) VALUES (${placeholders})`, values, function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
}

async function seed() {
  const setId = await insert("SetDefinitions", ["name"], ["Clearline7"]);

  // Colors
  for (const [name, value] of Object.entries(Clearline7.colors)) {
    await insert("Colors", ["setDefinitionId","name","value"], [setId, name, value]);
  }

  // Typography
  for (const [category, props] of Object.entries(Clearline7.typography)) {
    await insert("Typography", ["setDefinitionId","category","fontFamily","fallback","fontSize","lineHeight"], [
      setId,
      category,
      props.fontFamily,
      props.fallback || "",
      props.fontSize,
      props.lineHeightNormal || 1.5
    ]);
  }

  // Spacing
  for (const [key, value] of Object.entries(Clearline7.spacing.scale)) {
    await insert("Spacing", ["setDefinitionId","scaleKey","scaleValue"], [setId, key, value]);
  }
  // additional spacing fields
  await insert("Spacing", ["setDefinitionId","paragraphAfter","bulletIndent"], [setId, Clearline7.spacing.paragraphAfter, Clearline7.spacing.bulletIndent]);

  // BorderRadius
  for (const [element, radius] of Object.entries(Clearline7.borderRadius)) {
    await insert("BorderRadius", ["setDefinitionId","element","radius"], [setId, element, radius]);
  }

  // Shadows
  for (const [level, value] of Object.entries(Clearline7.shadows)) {
    await insert("Shadows", ["setDefinitionId","level","shadowValue"], [setId, level, value]);
  }

  console.log("Seed complete!");
  db.close();
}

seed().catch(console.error);
