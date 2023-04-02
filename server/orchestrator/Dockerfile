FROM node:lts-hydrogen


ENV NODE_ENV=production



WORKDIR /orchestrator

COPY ["package.json", "package-lock.json", "./"]

RUN npm install 



COPY . .



CMD ["npm", "start"]
