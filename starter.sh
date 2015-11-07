#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep test | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
        export PATH=/usr/local/bin:$PATH
        cd /home/www/test
        pbctrl start forever  >> startlog.txt 2>&1
fi

