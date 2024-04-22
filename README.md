# CLI Skeleton

#### A bare bones starting point to create a CLI tool in Javascript.

## Installation

`npm install`

## Local Usage

Rename the **tool** directory to your tool's name.

**`~/cli-tool/<tool_name>`**

1. `npm link`

**`~/cli-tool`**

1. `mkdir test && cd test && npm init -y`
2. `npm link`
3. `npm link <tool_name>`
4. Install the CLI tool `ll node_modules/.bin`

Now it should be ready to use with `<tool_name> <args>` like `tool --start`

## Commands

**_Filter logs_** <br />
`DEBUG=commands:* <tool_name> <args>` to only show logs from `commands/start`

**_Include multiple logs_** <br />
`DEBUG=commands:*,bin <tool_name> <args>` to include logs from `commands/start` and `bin/index`

**_Exclude logs_** <br />
`DEBUG=*,-bin <tool_name> <args>` to exclude the logs from `bin/index`
