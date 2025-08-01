FROM oven/bun:1
RUN mkdir -p /aichan

WORKDIR /aichan

COPY package.json .

RUN bun install

COPY . .

LABEL name="aichan" version="1.0"
CMD ["bun", "run", "start"]