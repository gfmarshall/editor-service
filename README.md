# README #

This project spins up a basic Editor service in a Docker container.

The Editor is based on the [Monaco Editor](https://microsoft.github.io/monaco-editor/index.html).

The Monaco Editor provides a rich multi-language support.  An aim of this project is to actively develop Language support.


### TO DO ###

* Passing content between parent and IFrame.
* Language:
** Semantic Highlighting 
** Dynamic code completion via LSP
* Compilation
** Capture output in console frame
* Editor look and feel
** Event listeners for updating configuration, colorization etc.

# Useful commands

## Docker

### BUILD image
~~~
docker build . -t editor/service
~~~

### RUN container
~~~
docker run --name editor-service -p 8880:3000 -d editor/service
~~~

[Open in browser](http://localhost:8880)
Or press <Ctrl-C> to kill the process.

### VIEW logs
~~~
docker logs editor-service
~~~

### STOP container
~~~
docker stop editor-service
~~~

### RM (remove) container
~~~
docker rm editor-service
~~~

### RM (remove) image
~~~
docker image rm editor/service
~~~

## Mega Command to trash and recreate contaner:
~~~
docker stop editor-service || true && \
docker rm editor-service || true && \
docker image rm editor/service || true && \
docker build . -t editor/service && \
docker run --name editor-service -p 8880:3000 -d editor/service && \
sleep 2 && \
docker logs editor-service && \
xdg-open http://localhost:8080/?button=false&keydown=true&change=true


~~~