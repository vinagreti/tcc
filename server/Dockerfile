FROM cypress/browsers AS test
WORKDIR /app
COPY . .
RUN npm ci

CMD ["node", "/app/dist/server/src"]