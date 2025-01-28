# docker build -t criadordefichasrpg-app:0.0 .
# docker run -p 5173:5173 criadordefichasrpg-app:0.0
# docker tag willianigordeveloper/criadordefichasrpg-app:0.0
# docker push willianigordeveloper/criadordefichasrpg-app:0.0
FROM node:22
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "start"]