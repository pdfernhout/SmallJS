#!/bin/bash
# Start node static web server. x
cd "$(dirname "$0")"
echo -n "Directory: "
pwd
http-server web -c-1 -p 3000
