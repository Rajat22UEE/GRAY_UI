#!/usr/bin/env node

import { fetchComponent } from "../utils.js";

// Read arguments
const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== "add") {
  console.log("Usage: npx gray_ui add <component-name>");
  process.exit(1);
}

const componentName = args[1];
fetchComponent(componentName);
