#!/usr/bin/env node
// Usage: node scripts/hash-password.mjs "your-password-here"
// Outputs the bcrypt hash to paste into ADMIN_PASSWORD_HASH in .env.local

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-password"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
// Escape $ signs for dotenv-expand compatibility
const escaped = hash.replace(/\$/g, '\\$');
console.log('\nADMIN_PASSWORD_HASH=' + escaped + '\n');
console.log('Copy the line above into your .env.local file.');
