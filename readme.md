# React Component Generator CLI

## Step-1

Clone this repository and run `npm install` in the command line.

## Step-2

Run this command in the terminal

```
$ npm install -g .
```

## Step-3

Now to generate component, open the terminal in the needed react app directory and run command

```
$ cmp COMPONENT_NAME ADDITIONAL_PATH
```

Here, if ADDITIONAL_PATH is not provided then component will generate at path `src/component` otherwise at path `src/component/ADDITIONAL_PATH`.

For each component, these three things will be created:

1. Folder named COMPONENT_NAME.
2. File named COMPONENT_NAME.js in that folder.
3. File named COMPONENT_NAME.module.css in the same folder.
