# Emberflow Skills

Agent skills for publishing beautiful docs from your AI coding tools to [Emberflow](https://supportive-forgiveness-production.up.railway.app).

## Available Skills

### `ember-publish`

Publish markdown documents with Mermaid diagrams, syntax highlighting, tables, and inline comments. Works in Claude Code, Cursor, Codex CLI, and any tool that supports the SKILL.md format.

**Usage:** `/ember-publish architecture overview for the payments service`

Your AI writes the doc, generates diagrams, and publishes it — you get back a shareable URL.

## Installation

### Claude Code

```bash
# Copy into your project
cp -r skills/ember-publish .claude/skills/

# Or install globally
cp -r skills/ember-publish ~/.claude/skills/
```

### Cursor

Add the skill to your project's `.cursor/skills/` directory.

### Any SKILL.md-compatible tool

Copy the `skills/ember-publish/` folder into your tool's skills directory.

## What Emberflow renders

- Live Mermaid diagrams with zoom, pan, and fullscreen
- Syntax-highlighted code blocks (190+ languages)
- Auto-generated table of contents
- Per-block inline comments and discussions
- Dark mode with font selection
