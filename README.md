# Pheidippides

Website for promoting/managing/tracking Border-to-Border (B2B)

## Development

- The development plan: https://www.notion.so/jordanadams/USA-Run-Tracking-60d9c7c5092f4ec2bf6d4758dd597827


## Building and running

### Docker Image Locally:

The project now has a dockerfile for building out docker images. To build and run the docker image locally:

- `cd PROJECT_ROOT_DIRECTORY`
- `docker build -t DOCKER_USER_NAME/PROJECT_NAME`
- `docker run -d -p 3000:3000 DOCKER_USER_NAME/PROJECT_NAME:latest`

For guidance on how the dockerfile was created as well as building and running see: https://medium.com/@khwsc1/a-simple-react-next-js-app-development-on-docker-6f0bd3f78c2c

### Local build:

- `cd PROJECT_ROOT_DIRECTORY`
- `npm install`
- `npm run build`
- `npm run start`

