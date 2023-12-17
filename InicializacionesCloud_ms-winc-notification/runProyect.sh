#!/usr/bin/env bash
mvn clean install -Dcheckstyle.skip=true
mvn spring-boot:run -Dcheckstyle.skip=true -Dspring-boot.run.profiles=local
