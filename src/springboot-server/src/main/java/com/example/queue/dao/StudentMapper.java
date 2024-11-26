package com.example.queue.dao;

//package com.example.checkin.dao;

import com.example.queue.model.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface StudentMapper {

    @Select("SELECT * FROM student WHERE status = #{status} ORDER BY queue_number ASC")
    List<Student> findByStatus(@Param("status") String status);

    @Insert("INSERT INTO student (student_id, name, queue_number) VALUES (#{studentId}, #{name}, #{queueNumber})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertStudent(Student student);

    @Update("UPDATE student SET status = #{status} WHERE id = #{id}")
    void updateStatus(@Param("id") Integer id, @Param("status") String status);
}
