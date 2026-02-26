#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILL_NAME = 'ember-publish';
const SKILL_SRC = path.join(__dirname, '..', 'skills', SKILL_NAME, 'SKILL.md');

const targets = [
  { dir: '.claude/skills', label: 'Claude Code (project)' },
  { dir: '.cursor/skills', label: 'Cursor (project)' },
];

const globalTargets = [
  { dir: path.join(require('os').homedir(), '.claude', 'skills'), label: 'Claude Code (global)' },
];

const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');

function install(destDir, label) {
  const skillDir = path.join(destDir, SKILL_NAME);
  const destFile = path.join(skillDir, 'SKILL.md');

  fs.mkdirSync(skillDir, { recursive: true });
  fs.copyFileSync(SKILL_SRC, destFile);
  console.log(`  \x1b[32m✓\x1b[0m Installed to ${path.relative(process.cwd(), skillDir) || skillDir} \x1b[2m(${label})\x1b[0m`);
  return true;
}

console.log();
console.log('  \x1b[1mEmberflow Skills Installer\x1b[0m');
console.log();

let installed = 0;

if (isGlobal) {
  for (const t of globalTargets) {
    install(t.dir, t.label);
    installed++;
  }
} else {
  // Auto-detect which tool directories exist or can be created
  const cwd = process.cwd();
  const detected = [];

  for (const t of targets) {
    const parent = path.dirname(path.join(cwd, t.dir));
    // Install if parent config dir exists (e.g. .claude/ or .cursor/) or if neither exists (default to .claude)
    if (fs.existsSync(path.join(cwd, t.dir)) || fs.existsSync(parent)) {
      detected.push(t);
    }
  }

  // Default to Claude Code if nothing detected
  if (detected.length === 0) {
    detected.push(targets[0]);
  }

  for (const t of detected) {
    install(path.join(cwd, t.dir), t.label);
    installed++;
  }
}

if (installed > 0) {
  console.log();
  console.log(`  Use: \x1b[36m/ember-publish\x1b[0m \x1b[2m[topic]\x1b[0m`);
  console.log();
}
