package com.example.shoestore_goc.service;

import com.example.shoestore_goc.model.Shoe;

import java.util.List;

public interface ShoeService {
    List<Shoe> getAllShoes();

    void addShoes(List<Shoe> shoes);
}