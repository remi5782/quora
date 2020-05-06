## Stage 1 - the build process
FROM tiangolo/node-frontend:10 as builder
WORKDIR /usr/src/app  
COPY package.json package-lock.json yarn.lock ./

# Increase Java Script Memory and Download dependencies declared in package.json
RUN export NODE_OPTIONS=--max-old-space-size=4096; yarn;

COPY . ./

# Build the project
RUN export NODE_OPTIONS=--max-old-space-size=4096; npm run winbuild;

#Deploying on the nginx
FROM nginx:1.15
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=builder /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
## End Stage 2