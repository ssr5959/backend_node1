# 📘 Learning Node.js – Progress Overview

Node.js is a JavaScript runtime environment. Just like browsers provide a console for JavaScript execution, Node.js does the same but on the server-side. It's widely used for building scalable backend services.

---

## ✅ Topics Covered

1. **Basics of Node.js and NPM**
   - Learned about Node.js and its package manager, NPM.
   - NPM provides access to a huge library of prebuilt modules used in development.

2. **CommonJS & ES Modules**
   - Learned to use:
     - CommonJS syntax: `module.exports`, `require('./path')`
     - ES module syntax: `export`, `import { variable } from './path.js'`
   - ES modules also introduced arrow functions in JavaScript.

3. **Advantages of `import` over `require`**
   - `import` allows importing only specific variables or functions.
   - `require` imports the entire module, which can lead to loading unused code.

4. **Using ES Modules with Packages**
   - After installing a package (e.g., `random-words`), add `"type": "module"` in `package.json` to enable ES module support.

5. **Understanding Key Files**
   - `node_modules`: Directory containing installed libraries (can be deleted before sharing).
   - `package.json`: Lists project dependencies. Re-run `npm install` to restore them.
   - `package-lock.json`: Provides detailed info (like version numbers) of installed packages for consistent installs.

6. **Creating a Reusable Package**
   - Running `npm init` makes a directory into a reusable NPM package.
   - This generates a `package.json`, which gets updated automatically as you add more dependencies.

7. **Globalizing a Library**
   - To use a package globally:
     ```bash
     npm install -g <libraryname>
     npm link <libraryname>
     ```

8. **Libraries Explored**
   - `figlet` – Displays text in styled ASCII art.
   - `chalk` – Adds color to terminal output.
   - `random-words` – Generates random English words.

---
