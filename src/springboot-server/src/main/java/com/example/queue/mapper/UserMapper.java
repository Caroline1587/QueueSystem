package com.example.queue.mapper;

import com.example.queue.model.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    void insertUser(User user);
    User findUserByUsername(String username);

//    @Select("SELECT * FROM queue WHERE status = #{status} ORDER BY queue_number ASC")
//    List<User> findByStatus(@Param("status") Integer status);

//    @Update("UPDATE queue SET status = #{status} WHERE id = #{id}")
//    void updateStatus(@Param("id") Integer id, @Param("status") Integer status);
}
//需要有对应的 MyBatis Mapper XML 文件 或通过注解直接编写 SQL（例如 @Insert 和 @Select）
