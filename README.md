# Cron Parser (Node.js)

This is a cli cron parser implemented in Node.js.

## Features
- Parses standard 5-field cron expressions
- Supports:
  - `*`
  - `*/N`
  - `A,B,C`
  - `A-B`
  - Numbers
- Formats output as a table with fixed-width columns
- Includes unit tests

## Requirements
- Node.js >= 14

## Create cli
npm link

## Install
git clone https://github.com/pdfconverter/my-cli-parser.git
cd my-cli-parser
npm install

## Run command
mycli "*/15 10 1,15 * 1-5 /usr/bin/find"
