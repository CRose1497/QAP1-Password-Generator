﻿# Password Generator CLI

## Overview
A Node.js CLI tool to generate secure passwords with customizable features like uppercase letters, numbers, and symbols.

## Features
- Generate passwords with customizable length (default: 8).
- Include uppercase letters, numbers, or symbols.
- Graceful handling of invalid inputs.
- Help message for usage instructions.

## Usage
Run the following command in your terminal:

```bash
node app.js [flags]

### Flags
- `--help` : Show the help message.
- `--length <number>` : Specify the password length.
- `--uppercase` : Include uppercase letters.
- `--numbers` : Include numbers.
- `--symbols` : Include symbols.

### Examples
```bash
node app.js --length 12 --uppercase --numbers --symbols
node app.js --length 10
