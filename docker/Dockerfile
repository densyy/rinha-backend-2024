FROM oven/bun:alpine

RUN apk add --no-cache git tzdata curl
ENV TZ America/Sao_Paulo

WORKDIR /home

# ENVS
ENV DIR_REPO=/home/api-rinha-backend

# API
RUN git clone https://github.com/densyy/rinha-backend-2024 api-rinha-backend
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd api-rinha-backend && bun install --production)

ENTRYPOINT bun ${DIR_REPO}/bin/http-1.js
