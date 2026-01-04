# Runtime stage
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the pre-built jar
COPY target/test.jar test.jar

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "test.jar"]