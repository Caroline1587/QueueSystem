package com.example.queue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//使用@SpringBootApplication注解来来启用Spring Boot的自动配置机制，并将该类标记为Spring应用程序的入口点。
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
//mvn spring-boot:run
	//mvnw spring-boot:run

}
