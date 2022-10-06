# repro-import-error

When import errors occur, the global "error" event thrown on `window` should contain the initiator information.

## Repro steps

1. git clone this repo
2. run `yarn` in the folder
3. run `yarn start` to start a dev server
4. open the browser to the listed url. This will load `index.html`, which registers a window "error" handler and loads `test.js` as a module script. This file tries to import something unrecognized by the browser, which triggers the window error handler.

## Expected

* `ev.filename` should include `test.js`
* `ev.lineno` should be greater than 0 (line 3)
* `ev.colno` should be greater than 0 (column 26)

## Resulted

* `filename` was `http://localhost:3000/`
* `lineno` was `0`
* `colno` was `0`

## OS/Browser details

| OS | Browser | Does it repro? |
|-|-|-|
| Windows 11 Pro 22000.978 | Chrome 105.0.5195.127 | Yes |
| Windows 11 Pro 22000.978 | Edge 105.0.5195.127 | Yes |
| Windows 11 Pro 22000.978 | Firefox 105.0.2 | No, works as expected |
| MacOS 12.6 Monterey | Chrome 106.0.5249.91 | Yes |
| MacOS 12.6 Monterey | Edge 106.0.1370.34 | Yes |
| MacOS 12.6 Monterey | Safari 16.0 | Yes |
| MacOS 12.6 Monterey | Firefox 103.0.1 | No, works as expected |
