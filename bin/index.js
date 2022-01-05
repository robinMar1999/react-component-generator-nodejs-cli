#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

let currPath = path.join(process.cwd(), "components");

const length = process.argv.length;

if (length < 3) {
  console.log("ERROR : Component name is required!!!");
  process.exit(0);
}

const NAME = process.argv[2];

// Creating Directory
if (length > 3) {
  for (let i = 3; i < length; i++) {
    currPath = path.join(currPath, process.argv[i]);
  }
}

currPath = path.join(currPath, process.argv[2]);

if (!fs.existsSync(currPath)) {
  fs.mkdirSync(currPath, { recursive: true });
}

// Creating JS File
const jstext = `const ${NAME} = () => {
  return (
    <div className={classes.${NAME}}>
      
    </div>
  )
}

export default ${NAME}
`;

fs.writeFileSync(path.join(currPath, `${NAME}.js`), jstext);

// Creating CSS File
const csstext = `.${NAME}{

}`;

fs.writeFileSync(path.join(currPath, `${NAME}.module.css`), csstext);
