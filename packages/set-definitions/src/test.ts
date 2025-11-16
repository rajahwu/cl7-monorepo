// SetDefinition/test.ts

// Import all sets from your main index file
import { 
  Clearline7, 
  FederalFlow, 
  BlogPosts, 
  TechDocs 
} from './index';

console.log('--- 🧪 STARTING TESTS ---');

// --- Test 1: Clearline7 (Web/Scale) .toCSS() ---
console.log('\n--- Test 1: Clearline7 CSS Variables ---');
try {
  const css = Clearline7.toCSS();
  console.log(css);
  if (!css.includes('--scale-16: 64px')) {
    console.error('TEST FAILED: Clearline7 CSS is missing scale variables.');
  }
} catch (e) {
  console.error('TEST FAILED:', e);
}

// --- Test 2: FederalFlow (Print) .getPrintStyles() ---
console.log('\n--- Test 2: FederalFlow Print Styles ---');
try {
  const print = FederalFlow.getPrintStyles();
  console.log(print);
  if (!print.includes('font-family: Times New Roman')) {
    console.error('TEST FAILED: FederalFlow print styles are incorrect.');
  }
} catch (e) {
  console.error('TEST FAILED:', e);
}

// --- Test 3: TechDocs (Hybrid) .toJSON() ---
console.log('\n--- Test 3: TechDocs JSON Output ---');
try {
  const json = TechDocs.toJSON();
  console.log(json);
  const parsed = JSON.parse(json);
  if (parsed.typography.monoFont !== 'Fira Code') {
     console.error('TEST FAILED: TechDocs JSON data is incorrect.');
  }
} catch (e) {
  console.error('TEST FAILED:', e);
}


console.log('\n--- ✅ TESTS COMPLETE ---');