# build stage
# FROM node:14-alpine as build-stage
# WORKDIR /app
# COPY package.json /app/package.json
# RUN npm install
# COPY . .
# RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY build /usr/share/nginx/html
ADD default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]