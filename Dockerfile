From node:19-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "next", "build"]