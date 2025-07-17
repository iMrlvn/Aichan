FROM node:alpine
RUN mkdir -p /aichan
WORKDIR /aichan
ENV NODE_PATH=/usr/local/lib/node_modules
COPY package.json /aichan
RUN npm install
COPY . /aichan
ENV NODE_PATH=/usr/local/lib/node_modules
LABEL name="aichan" version="1.0"
RUN npm run build
CMD ["npm", "run", "start"]