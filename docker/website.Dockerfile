# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/


ARG NODE_VERSION=20.10.0
ARG PNPM_VERSION=8.8.0

FROM node:${NODE_VERSION}-alpine as base
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=16384

COPY ../ ../coulba

RUN pnpm --filter website install
RUN pnpm --filter website build
RUN pnpm --filter website start

EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT ["pnpm", "build:start"]
