FROM node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
