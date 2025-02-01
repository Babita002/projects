package com.example.demo.service;
import org.springframework.stereotype.Service;

import com.example.demo.dto.RegistrationDto;
import com.example.demo.entity.User;

public interface UserService {
    void saveUser(RegistrationDto registrationDto);

    User findByEmail(String email);
}
