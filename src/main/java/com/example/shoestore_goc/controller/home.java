package com.example.shoestore_goc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.shoestore_goc.model.Shoe;
import com.example.shoestore_goc.service.ShoeService;
import java.util.List;

@Controller
public class Home {

    @Autowired
    private ShoeService shoeService;

    @GetMapping("/")
    public ModelAndView homePage() {
        ModelAndView modelAndView = new ModelAndView("home");
        List<Shoe> shoes = shoeService.getAllShoes();
        modelAndView.addObject("products", shoes);
        return modelAndView;
    }
}
