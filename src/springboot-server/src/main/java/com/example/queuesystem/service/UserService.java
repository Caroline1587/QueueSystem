package com.example.queuesystem.service;

import com.example.queuesystem.mapper.UserMapper;
import com.example.queuesystem.model.User;
import com.example.queuesystem.util.JwtUtil;
import com.example.queuesystem.util.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    @Transactional
    public void addUser(User user) {
        user.setPassword(PasswordEncoder.getMD5(user.getPassword(),"辅助信息"));
        userMapper.insertUser(user);
    }

    public boolean loginUser(String username, String password) {
        User user = userMapper.findUserByUsername(username);
        if (user != null) {
            // 验证密码
            String saltedPassword = PasswordEncoder.getMD5(password, "辅助信息");
            return saltedPassword.equals(user.getPassword());
        }
        return false;
    }

    public User getUserInfoByToken(String token)throws Exception {
        String username = JwtUtil.getUsernameFromToken(token);
        User user = userMapper.findUserByUsername(username);
        if (user == null) {
            throw new Exception("用户不存在");
        }

        return user;
    }

    public List<User> getAllUsers() {
        return userMapper.findAllUsers();
    }
//    public void updateStudentStatus(Integer id, Integer status) {
//        studentMapper.updateStatus(id, status);
//    }
}

