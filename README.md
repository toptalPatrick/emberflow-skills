# Emberflow Skills

Agent skills for publishing beautiful docs from your AI coding tools to [Emberflow](https://supportive-forgiveness-production.up.railway.app).

## Quick Install

```bash
npx emberflow-skills
```

Auto-detects Claude Code and Cursor projects and installs the skill to the right place.

```bash
# Install globally for Claude Code (available in all projects)
npx emberflow-skills --global
```

## Available Skills

### `ember-publish`

Publish markdown documents with Mermaid diagrams, syntax highlighting, tables, and inline comments.

**Usage:** `/ember-publish architecture overview for the payments service`

Your AI writes the doc, generates diagrams, and publishes it — you get back a shareable URL.

**Works with:** Claude Code, Cursor, Codex CLI, and any tool that supports the SKILL.md format.

## What Emberflow renders

- Live Mermaid diagrams with zoom, pan, and fullscreen
- Syntax-highlighted code blocks (190+ languages)
- Auto-generated table of contents
- Per-block inline comments and discussions
- Dark mode with font selection

## Manual Installation

If you prefer not to use npx:

```bash
# Clone and copy
git clone https://github.com/toptalPatrick/emberflow-skills.git
cp -r emberflow-skills/skills/ember-publish .claude/skills/
```
