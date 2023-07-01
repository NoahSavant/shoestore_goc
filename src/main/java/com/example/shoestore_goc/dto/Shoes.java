package com.example.shoestore_goc.dto;

import java.util.List;

import com.example.shoestore_goc.model.Shoe;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Shoes {
    private List<Shoe> shoes;
}
