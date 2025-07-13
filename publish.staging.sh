imageId="$(bash build.server.sh)"
docker tag $imageId sa-saopaulo-1.ocir.io/grvcqsrhrypa/wetest:latest
docker push sa-saopaulo-1.ocir.io/grvcqsrhrypa/wetest:latest