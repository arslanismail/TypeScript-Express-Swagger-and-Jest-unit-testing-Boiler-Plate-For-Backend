# ################################################################
# Docker file for wrapping nodejs service components
# Copyright 2020-21 AionDigital
#
# Contributers:
# - [FN] Fahid Nasir : fahid@aiondigital.com
#
# Change History:
# 14-Apr-2020 [FN]: Initial Setup with LTS node.
# ################################################################

# Using latest LTS version running on alpine
# node:lts-slim <==> node:12-buster-slim
FROM node:12-slim

# Will remain same for all containers.
# Version will be changed during CI/CD process
# LABEL maintainer="AionDigital"
# LABEL version=${IMAGE_VERSION}
# LABEL description="Container for J2 application Middleware."

# ARG PORT=3000

# Working directory on which application binaries will be copied
# Install app dependencies and move these to WORKDIR to avoid rebuilding this Image layer
RUN apt-get update && apt-get install -y git
RUN mkdir /build-dir
WORKDIR /build-dir
COPY package*.json /build-dir/
RUN npm install

# Copy all content from this folder (including subfolders)
# to a specific folder on the container
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN ln -s /build-dir/node_modules node_modules


# Copy all the app source
COPY . /usr/src/app

# TODO! If possible Optimize this to not recompile without any change
# Compile Source code
RUN npm run build:docker

# Expose port 3000 to the host
EXPOSE 3000

# RUN following command
CMD npm run start
