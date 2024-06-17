# Use an official Node.js image to build our image from
FROM node:22-alpine AS base
RUN corepack enable


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
COPY .docker/nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3101
CMD ["nginx", "-g", "daemon off;"]
# FROM base AS app
# COPY --from=build /build/app /build/app
# WORKDIR /build/app
# CMD [ "pnpm", "--filter=app", "start"]

# Start website
FROM nginx:alpine as website
COPY .docker/nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /website/build /usr/share/nginx/html
EXPOSE 3102
CMD ["nginx", "-g", "daemon off;"]
# FROM base AS website
# COPY --from=build /build/website /build/website
# WORKDIR /build/website
# CMD [ "pnpm", "--filter=website", "start"]
