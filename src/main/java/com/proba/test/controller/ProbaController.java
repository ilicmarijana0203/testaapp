package com.proba.test.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/test/v1/api")
@RequiredArgsConstructor
public class ProbaController {

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        log.info("Hello endpoint called");
        return ResponseEntity.ok("hello world");
    }
}
