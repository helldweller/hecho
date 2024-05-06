# hecho

Simple nodejs http server.

Prints remote address.

Prints client headers.

## Use cases:

- You want to see the headers inside the proxy cascade. For debugging
- Just an echo service for testing

## Using

    docker run -it -p "8080:8080" ghcr.io/helldweller/hecho:0.1

    kubectl run -n default hecho --port=8080 --image=ghcr.io/helldweller/hecho:0.1