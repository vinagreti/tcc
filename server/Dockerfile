FROM cypress/browsers AS test
WORKDIR /app
COPY . .
RUN npm ci
##RUN npx cypress run

CMD ["node", "/app/dist/server/src"]
# this is our output "production" image
# without any test dependencies
##FROM busybox AS prod
# for example we can copy some files from TEST image to this production image
##COPY --from=test /app /app