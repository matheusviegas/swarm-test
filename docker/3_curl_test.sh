#!/bin/bash

seq 1 20 | xargs -I $ -n1 -P10  curl --silent "http://localhost:4444" > out.txt && node ./parse_test_results.js && rm out.txt