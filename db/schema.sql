-- SetDefinitions: one row per theme/set
CREATE TABLE IF NOT EXISTS SetDefinitions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE,
  description TEXT
);

-- Colors
CREATE TABLE IF NOT EXISTS Colors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setDefinitionId INTEGER,
  name TEXT,
  value TEXT,
  FOREIGN KEY (setDefinitionId) REFERENCES SetDefinitions(id)
);

-- Typography
CREATE TABLE IF NOT EXISTS Typography (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setDefinitionId INTEGER,
  category TEXT,
  fontFamily TEXT,
  fallback TEXT,
  fontSize TEXT,
  lineHeight REAL,
  FOREIGN KEY (setDefinitionId) REFERENCES SetDefinitions(id)
);

-- Spacing
CREATE TABLE IF NOT EXISTS Spacing (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setDefinitionId INTEGER,
  scaleKey TEXT,
  scaleValue TEXT,
  paragraphAfter TEXT,
  bulletIndent TEXT,
  FOREIGN KEY (setDefinitionId) REFERENCES SetDefinitions(id)
);

-- BorderRadius
CREATE TABLE IF NOT EXISTS BorderRadius (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setDefinitionId INTEGER,
  element TEXT,
  radius TEXT,
  FOREIGN KEY (setDefinitionId) REFERENCES SetDefinitions(id)
);

-- Shadows
CREATE TABLE IF NOT EXISTS Shadows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setDefinitionId INTEGER,
  level TEXT,
  shadowValue TEXT,
  FOREIGN KEY (setDefinitionId) REFERENCES SetDefinitions(id)
);
