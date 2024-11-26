package com.example.queue.service;

import com.example.queue.dao.StudentMapper;
import com.example.queue.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentMapper studentMapper;

    public StudentService(StudentMapper studentMapper) {
        this.studentMapper = studentMapper;
    }

    public List<Student> getStudentsByStatus(String status) {
        return studentMapper.findByStatus(status);
    }

    public void addStudent(Student student) {
        studentMapper.insertStudent(student);
    }

    public void updateStudentStatus(Integer id, String status) {
        studentMapper.updateStatus(id, status);
    }
}

