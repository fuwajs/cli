package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, err := http.Get("https://fuwajs.github.io") // returns the html content of the fuwa.js, if error catch it
	if err != nil {
		fmt.Println(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body) // read all the html and collect it, if error catch it
	if err != nil {
		fmt.Println(err)
	}

	fmt.Print(string(body)) // send all html content found to the console
}
