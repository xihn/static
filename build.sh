#!/bin/bash

zola build
tar -C public -cvz . > ../site.tar.gz
hut pages publish -d $site site.tar.gz