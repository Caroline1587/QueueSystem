package com.example.queue.model;

import lombok.Data;

@Data
public class User {
    private Integer id;
    private String username;
    private String password;
    private Integer isAdmin;//1-普通用户 0-管理员
}

