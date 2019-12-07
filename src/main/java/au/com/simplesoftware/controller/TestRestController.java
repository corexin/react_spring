package au.com.simplesoftware.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class TestRestController {

    @GetMapping("/echo")
    public String echo() {
        return "echo";
    }

    @GetMapping("/v1/retrieve")
    public String retrieve() {
        return "echo";
    }
}
