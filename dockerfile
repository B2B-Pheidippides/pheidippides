FROM node:10

# Setting the working directory. All paths will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files (copy everthing in the working directory into the image working directory)
COPY . ./

# Building the app
RUN npm run build

# Running the app
CMD ["npm", "start"]