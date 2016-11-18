package com.oreilly.boot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Application {
	
	
	@Value("${name}")
	String name;
	
	@Autowired
	ApplicationArguments args;
	
	@Autowired
	MyMessage myMessage;
	
	/*@RequestMapping("/")
	public String home(){
		String value = args.getOptionNames().iterator().next();
		return "Welcome, your name is "+name+" and your lucky number is "+value;
	}*/
	
	@RequestMapping("/viewResolver")
	public String viewResolver(){
		return "viewResolver";
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
