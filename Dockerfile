FROM adoptopenjdk:11-jre-hotspot

WORKDIR /app

COPY shoestore_goc-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]