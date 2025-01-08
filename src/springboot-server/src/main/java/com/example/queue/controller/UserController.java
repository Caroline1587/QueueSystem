package com.example.queue.controller;

import com.example.queue.model.User;
import com.example.queue.service.UserService;
import com.example.queue.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private  UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody User user) {
        userService.addUser(user);
        return "用户添加成功";
    }
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User loginUser) {
        Map<String, Object> result = new HashMap<>();
        boolean success = userService.loginUser(loginUser.getUsername(), loginUser.getPassword());

        if (success) {
            String token = JwtUtil.generateToken(loginUser.getUsername());
            result.put("success", true);
            result.put("message", "登录成功");
            result.put("token", token);
        } else {
            result.put("success", false);
            result.put("message", "用户名或密码错误");
        }
        return result;
    }
    @GetMapping("/info")
    public ResponseEntity<?> getUserInfo(@RequestHeader("Authorization") String authorizationHeader) {
        try {
            // 提取 Bearer token
            if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Authorization header.");
            }

            String token = authorizationHeader.substring(7);
            User userInfo = userService.getUserInfoByToken(token);
            return ResponseEntity.ok(userInfo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

//    @PutMapping("/{id}/status")
//    public void updateStudentStatus(@PathVariable Integer id, @RequestParam Integer status) {
//        userService.updateStudentStatus(id, status);
//    }
}

