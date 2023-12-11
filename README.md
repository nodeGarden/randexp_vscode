# README

Very simple extension. Simply set your cursor to the point you want to insert, or highlight text to replace, then open the Command Palette and type: `create random value by Regex` (or similar) or `randexp`. input a fully functional regex, and your output will be inserted.

example regex: `([A-Za-z]|[0-9]){7}-([A-Za-z]|[0-9]){6}-([A-Za-z]|[0-9]){3}`
matching output: `xx123xx-113xxx-abc`

This is purely just encapsulating the RandExp library: https://www.npmjs.com/package/randexp  (all credit for functionality there); I'm just putting it as an extension for my own convenience.
