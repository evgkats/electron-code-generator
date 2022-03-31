# Code Generator

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## Essentials

To run this program yoy will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
Open a git-bash console in the project dir and run the following commands:

```bash
# Install dependencies
npm install
# Run the app
npm start
```

To create an exe to package the app, run:
```bash
npm run make
```

## Useful links
- [bytenode](https://www.npmjs.com/package/bytenode)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Creating executables](https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application)