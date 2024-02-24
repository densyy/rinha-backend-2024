FROM densyy/base-node:latest

WORKDIR /home

# ENVS
ENV DIR_REPO=/home/api-rinha-backend
ENV PORT=53100

# API
RUN git clone https://github.com/densyy/rinha-backend-2024 api-rinha-backend
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd api-rinha-backend && npm install --only=prod)

EXPOSE ${PORT}

ENTRYPOINT pm2-runtime start ${DIR_REPO}/bin/http.js --name API
