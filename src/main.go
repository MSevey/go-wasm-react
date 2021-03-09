package main

import "syscall/js"

func main() {
	println("Go WebAssembly Initialized")
	js.Global().Set("SayHello", sayHello())
	<-make(chan struct{})
}

func sayHello() js.Func {
	return js.FuncOf(func(js.Value, []js.Value) interface{} {
		return "Hello From Go"
	})
}

