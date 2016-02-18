#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep prod | wc -l | tr -s "\n") -eq 0 ]
then
	echo "Prod Server: starting"
	export PATH=/usr/local/bin:$PATH
	cd /home/www/prod
	pbctrl start forever >> startlog.txt 2>&1
else
	echo "Prod Server: restarting"
	cd /home/www/prod
	forever restart /home/www/prod/pencilblue.js >> startlog.txt 2>&1
fi
  
