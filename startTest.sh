#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep test | wc -l | tr -s "\n") -eq 0 ]
then
	echo "Test Server: starting"
	export PATH=/usr/local/bin:$PATH
	cd /home/www/test
	pbctrl start forever >> startlog.txt 2>&1
else
	echo "Test Server: restarting"
	cd /home/www/test
	forever restart /home/www/test/pencilblue.js >> startlog.txt 2>&1
fi
  
