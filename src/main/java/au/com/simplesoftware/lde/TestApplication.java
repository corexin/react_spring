package au.com.simplesoftware.lde;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "au.com.simplesoftware.controller")
public class TestApplication {
        public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
     }
}
