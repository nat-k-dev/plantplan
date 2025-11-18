const fs = require("fs");
const breakpoints = require("../app/breakpoints");

let css = `/* AUTO-GENERATED: do not edit manually */
@theme {\n`;

for (const [key, value] of Object.entries(breakpoints)) {
  css += `  --breakpoint-${key}: ${value}px;\n`;
}

css += `}\n`;

fs.writeFileSync("app/styles/generated-breakpoints.css", css);
console.log("Tailwind breakpoints generated from breakpoints.js");
