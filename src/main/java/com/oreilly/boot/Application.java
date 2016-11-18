package com.oreilly.boot;

import java.util.HashMap;

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
	
	HashMap<String, String> response;
	
	/*@RequestMapping("/")
	public String home(){
		String value = args.getOptionNames().iterator().next();
		return "Welcome, your name is "+name+" and your lucky number is "+value;
	}*/
	
	@RequestMapping("/viewResolver")
	public String viewResolver(){
		return "viewResolver";
	}
	
	@RequestMapping("/title")
	public HashMap<String, String> title(){
		System.out.println("retornando titulo");
		response = new HashMap<String, String>();
		response.put("status", "200");
		response.put("title", "Github Search by @ojedawinder");
		return response;
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
