#!/bin/bash

docker service create -p 4444:4444 --replicas 3 --name apiv1 api_teste:v1