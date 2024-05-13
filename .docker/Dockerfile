# Use an official Node.js image to build our image from
FROM node:20-alpine AS base
RUN npm install -g pnpm


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
COPY ./.docker/.dockerignore ./.docker/.dockerignore

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm install
RUN pnpm run build
RUN pnpm deploy --filter="website" --prod /build/website
RUN pnpm deploy --filter="app" --prod /build/app
RUN pnpm deploy --filter="api" --prod /build/api

# Start api
FROM base AS api
COPY --from=build /build/api /build/api
WORKDIR /build/api
CMD [ "pnpm", "--filter=api", "start"]

# Start app
FROM nginx:alpine as app
COPY --from=build /build/app /usr/share/nginx/html
EXPOSE 3101
CMD ["nginx", "-g", "daemon off;"]
# FROM base AS app
# COPY --from=build /build/app /build/app
# WORKDIR /build/app
# CMD [ "pnpm", "--filter=app", "start"]

# Start website
FROM nginx:alpine as website
COPY --from=build /build/website /usr/share/nginx/html
EXPOSE 3102
CMD ["nginx", "-g", "daemon off;"]
# FROM base AS website
# COPY --from=build /build/website /build/website
# WORKDIR /build/website
# CMD [ "pnpm", "--filter=website", "start"]
