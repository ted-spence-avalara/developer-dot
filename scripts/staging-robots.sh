#!/bin/bash

# re-write the robots.txt file to not allow crawlers
(echo "User-Agent: *" && echo  "Disallow: /") > robots.txt
