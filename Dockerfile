FROM oven/bun:latest

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install

COPY . .

RUN bun run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["bun", "start"]