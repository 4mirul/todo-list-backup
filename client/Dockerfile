# Step 1: Use an official Node.js image to build your frontend
FROM node:23 AS build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker's cache
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Run the build process (adjust if your build command is different)
RUN npm run build

# Step 2: Use the official Apache HTTPD image
FROM httpd:2.4 AS production-stage

# Copy the build output from the build stage to the Apache document root
COPY --from=build-stage /app/build/ /usr/local/apache2/htdocs/

# Expose port 80 for the Apache server
EXPOSE 80
