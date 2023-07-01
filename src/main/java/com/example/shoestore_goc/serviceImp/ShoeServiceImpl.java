package com.example.shoestore_goc.serviceImp;

import com.example.shoestore_goc.model.Shoe;
import com.example.shoestore_goc.repository.ShoeRepository;
import com.example.shoestore_goc.service.ShoeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoeServiceImpl implements ShoeService {

    @Autowired
    private ShoeRepository shoeRepository;

    @Override
    public List<Shoe> getAllShoes() {
        return shoeRepository.findAll();
    }

    @Override
    public void addShoes(List<Shoe> shoes) {
        shoeRepository.saveAll(shoes);
    }
}
