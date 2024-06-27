# Use an official Node.js image to build our image from
FROM node:22-alpine AS base
RUN corepack enable

RUN apt-get update \
    && apt-get install -y wget gnupg ca-certificates \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Define build arguments for environment variables
ARG VITE_PUBLIC_API_BASE
ARG VITE_PUBLIC_APP_BASE
ARG VITE_PUBLIC_WEBSITE_BASE


# Set environment variables during the build process
ENV VITE_PUBLIC_API_BASE=$VITE_PUBLIC_API_BASE
ENV VITE_PUBLIC_APP_BASE=$VITE_PUBLIC_APP_BASE
ENV VITE_PUBLIC_WEBSITE_BASE=$VITE_PUBLIC_WEBSITE_BASE

# LABEL org.opencontainers.image.source=https://github.com/emilesabatier/coulba

# Build the monorepo
FROM base AS build
WORKDIR /root
COPY package.json package.json
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY turbo.json turbo.json
COPY ./applications ./applications
COPY ./packages ./packages
COPY ./.docker ./.docker

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm install
RUN pnpm run build
RUN pnpm deploy --filter="website" --prod /website
RUN pnpm deploy --filter="app" --prod /app
RUN pnpm deploy --filter="api" --prod /api

# Start api
FROM base AS api
COPY --from=build /api /api
WORKDIR /api
CMD [ "pnpm", "--filter=api", "start"]

# Start app
FROM nginx:alpine as app
COPY .docker/nginx/default.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3101
CMD ["nginx"]
# FROM base AS app
# COPY --from=build /build/app /build/app
# WORKDIR /build/app
# CMD [ "pnpm", "--filter=app", "start"]

# Start website
FROM nginx:alpine as website
COPY .docker/nginx/default.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /website/build /usr/share/nginx/html
EXPOSE 3102
CMD ["nginx"]
# FROM base AS website
# COPY --from=build /build/website /build/website
# WORKDIR /build/website
# CMD [ "pnpm", "--filter=website", "start"]
