# Go Wasm React
This is a basic example of using a go wasm file in a react app. There is a
`main.go` file in the `src/` directory and a react app in the `client/`
directory. This Repo is an example of how to build a go `wasm` from and call
a method from a react app.

## Key Parts
The key updates to the react app in `client/` are the following:
1. When building the `main.wasm` file, it is placed in `client/public/`
1. Go's `wasm_exec.js` file was copied into `client/public/` and then imported with `<script>` tags in `client/public/index.html`
1. The `main.wasm` file was loaded and initialized in `client/src/App.js`

## Using this App

Build the `main.go` file by doing the following:
1. `cd src/`
1. `GOOS=js GOARCH=wasm go build -o ../client/public/main.wasm`

Launch React App:
1. `cd client/`
1. `yarn start`
