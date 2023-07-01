package com.example.shoestore_goc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "shoes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shoe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "image", length = 150)
    private String image;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "description", length = 400)
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "color")
    private String color;
}