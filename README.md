# Emberflow Skills

Publish beautiful docs from your AI coding tools to [Emberflow](https://www.emberflow.ai) — architecture diagrams, tables, and markdown, hosted instantly.

## Install

The fastest way to get started:

```bash
npx emberflow-skills
```

That's it. The installer auto-detects your project type (Claude Code or Cursor) and copies the skill to the right directory. You'll be publishing docs in under 10 seconds.

### Options

```bash
# Install to current project (default)
npx emberflow-skills

# Install globally for Claude Code (available in all projects)
npx emberflow-skills --global
```

### What the installer does

1. Detects if you're in a Claude Code project (`.claude/`) or Cursor project (`.cursor/`)
2. Copies the `ember-publish` skill into your project's skills directory
3. Done — use `/ember-publish` in your next conversation

## Usage

In Claude Code or Cursor, just type:

```
/ember-publish architecture overview for the payments service
```

Your AI writes the markdown, generates Mermaid diagrams, and publishes it. You get back a shareable URL.

## What gets published

- Live Mermaid diagrams with zoom, pan, and fullscreen
- Syntax-highlighted code blocks (190+ languages)
- Auto-generated table of contents
- Per-block inline comments and discussions
- Dark mode with font selection
- Public or private docs with secret links

## Manual install

If you prefer not to use npx:

```bash
git clone https://github.com/pmccurley87/emberflow-skills.git
cp -r emberflow-skills/skills/ember-publish .claude/skills/
```

## Works with

- Claude Code
- Cursor
- Codex CLI
- Any tool that supports the SKILL.md format
