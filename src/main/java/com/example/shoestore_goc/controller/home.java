package com.example.shoestore_goc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.servlet.ModelAndView;

@Controller
public class home {

    @GetMapping("/")
    public String homePage() {
        return "home";
    }
}
