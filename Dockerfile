FROM adoptopenjdk:11-jre-hotspot

WORKDIR /app

COPY shoestore_goc-0.0.1-SNAPSHOT.jar app.jar

ENV DB_URL jdbc:mysql://mysql-133978-0.cloudclusters.net:3306/shoe_goc
ENV DB_USERNAME admin
ENV DB_PASSWORD SjIt6sfs

CMD ["java", "-jar", "app.jar"]