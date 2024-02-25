FROM oven/bun:alpine

# INSTALL
RUN apk add --no-cache git tzdata curl

# ENVS
ENV TZ America/Sao_Paulo
ENV DIR_REPO=/home/api-rinha-backend

# API
WORKDIR /home
RUN git clone https://github.com/densyy/rinha-backend-2024 api-rinha-backend
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd api-rinha-backend && bun install --production)

ENTRYPOINT bun ${DIR_REPO}/bin/http.js
