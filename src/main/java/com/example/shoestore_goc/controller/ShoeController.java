package com.example.shoestore_goc.controller;

import com.example.shoestore_goc.dto.Shoes;
import com.example.shoestore_goc.model.Shoe;
import com.example.shoestore_goc.service.ShoeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class ShoeController {
    @Autowired
    private ShoeService shoeService;

    @PostMapping("/api/shoes")
    public ResponseEntity<String> addShoes(@RequestBody Shoes shoes) {
        shoeService.addShoes(shoes.getShoes());
        return ResponseEntity.status(HttpStatus.OK).body("Shoes added successfully");
    }
}
