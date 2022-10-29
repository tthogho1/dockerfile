FROM mongoap

ENV MONGO_INITDB_DATABASE webcom

COPY setup.js /docker-entrypoint-initdb.d/

EXPOSE 27017
EXPOSE 3000

CMD ["mongod", "--auth"]
