FROM denoland/deno:latest

EXPOSE 80

WORKDIR /app

COPY . .
# Type check and compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache  --allow-import --check main.ts

CMD ["task", "start"]