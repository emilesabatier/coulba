# Use an official Node.js image to build our image from
FROM node:20-alpine AS base
RUN npm install -g pnpm

# Build the monorepo
FROM base AS build
WORKDIR /root
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY turbo.json turbo.json
COPY ./applications ./applications
COPY ./packages ./packages

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
EXPOSE 60000
CMD [ "pnpm", "start" ]

# Start app
FROM base AS app
COPY --from=build /build/app /build/app
WORKDIR /build/app
EXPOSE 60010
CMD [ "pnpm", "start" ]

# Start website
FROM base AS website
COPY --from=build /build/website /build/website
WORKDIR /build/website
EXPOSE 60020
CMD [ "pnpm", "start" ]
