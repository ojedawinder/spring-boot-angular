package com.oreilly.boot;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.util.SystemPropertyUtils;

@Component
public class MyApplicationRunner implements ApplicationRunner {

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("These are the arguments used to start the app:");
		for(String arg:args.getOptionNames()){
			System.out.println(arg);
		}


	}

}
