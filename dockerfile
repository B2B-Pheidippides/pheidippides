FROM node:10 as setup
# Setting the working directory. All paths will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files (copy everthing in the working directory into the image working directory)
COPY /comps ./comps
COPY /pages ./pages

FROM setup as production
# Building the app
RUN npm run build
# Running the app
CMD ["npm", "start"]