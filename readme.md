# hecho

Simple nodejs http server.

Prints remote address.

Prints client headers.

## Use cases:

- You want to see the headers inside the proxy cascade. For debugging
- Just an echo service for testing

## Using

    docker run -it -p "8080:8080" ghcr.io/helldweller/hecho:0.1

    kubectl run -n default hecho --labels='app:hecho' --port=8080 --image=ghcr.io/helldweller/hecho:0.1
    kubectl create -n default service clusterip hecho --tcp=8080:8080
    kubectl create -n default ingress hecho --class=default --rule="hecho.my.tld/*=hecho:8080,tls=my.tld" --annotation "external-dns.alpha.kubernetes.io/hostname=hecho.my.tld"
