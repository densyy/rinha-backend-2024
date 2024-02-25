#!/bin/bash

# sudo systemctl start docker
# sudo bash push-dockerhub.sh

#
# ENVS
#

USERNAME=
PASSWORD=
REGISTRY_IMAGE="densyy/api-rinha-backend:latest"

#
# SYSTEM
#

echo "# Docker login"
docker login --username $USERNAME --password $PASSWORD

echo "# Docker build"
docker build --network host --no-cache -t $REGISTRY_IMAGE .

echo "# Docker push"
docker push $REGISTRY_IMAGE

