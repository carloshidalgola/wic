FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip -Declipselink.weave.skip

FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/ms-winc-notification.jar /usr/local/lib/ms-winc-notification.jar
EXPOSE 8100
ENTRYPOINT ["sh", "-c"]
CMD ["exec java -XX:+PrintFlagsFinal -XshowSettings:vm -Xms512m -Xmx1024m \
                -Duser.timezone=America/Lima  \
                -Dspring.profiles.active=local \
                -XshowSettings:vm \
                -jar ms-winc-notification.jar"]
