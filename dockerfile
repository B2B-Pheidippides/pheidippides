# ====================
# BASE
# ====================
FROM node:10-alpine as base
WORKDIR /app

COPY package*.json ./

RUN npm install --production \
 && cp -r node_modules prod_modules \
 && npm install


# ====================
# BUILD
# ====================
FROM base as build
WORKDIR /app

COPY . .
RUN npm run build

# ====================
# PRODUCTION
# ====================
FROM node:10-alpine as production
WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/.next .next
COPY --from=build /app/prod_modules node_modules

CMD ["npm", "start"]
