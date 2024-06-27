# Use an official Node.js image to build our image from
FROM node:22-alpine AS base
RUN corepack enable

# Define build arguments for environment variables
ARG VITE_PUBLIC_WEBSITE_BASE
ARG VITE_PUBLIC_APP_BASE
ARG VITE_PUBLIC_API_BASE

# Set environment variables during the build process
ENV VITE_PUBLIC_WEBSITE_BASE=$VITE_PUBLIC_WEBSITE_BASE
ENV VITE_PUBLIC_APP_BASE=$VITE_PUBLIC_APP_BASE
ENV VITE_PUBLIC_API_BASE=$VITE_PUBLIC_API_BASE

# Build the monorepo
FROM base AS build
WORKDIR /root
COPY package.json package.json
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY turbo.json turbo.json
COPY ./applications ./applications
COPY ./packages ./packages
COPY ./.docker ./.docker

# Build the app
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm install
RUN pnpm run --filter="app" build
RUN pnpm deploy --filter="app" --prod /app

# Start app
FROM nginx:alpine as app
COPY .docker/nginx/default.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3101
CMD ["nginx"]
