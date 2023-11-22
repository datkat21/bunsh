# bunsh

An experimental Bun.js shell, because why not?

## Commands

As this project is a work in progress more commands will be added.

- cd
- exit
- ls
- uname
- help

## Dependencies

- chalk
- cli-table

That's it...

## Setup 

To install dependencies:

```bash
bun install
```

### Running

To build as executable:

```bash
bun build ./index.ts --compile --outfile bunsh
```

Or, to run normally:

```bash
bun run .
```

## Plans

- [*] Add some commands
- [ ] Add fallback to system commands
- [ ] Add fallback message if command not found

## Info

This project was created using `bun init` in [Bun](https://bun.sh) v1.0.11.