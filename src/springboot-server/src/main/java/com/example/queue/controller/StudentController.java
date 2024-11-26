package com.example.queue.controller;

import com.example.queue.model.Student;
import com.example.queue.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/status/{status}")
    public List<Student> getStudentsByStatus(@PathVariable String status) {
        return studentService.getStudentsByStatus(status);
    }

    @PostMapping
    public void addStudent(@RequestBody Student student) {
        studentService.addStudent(student);
    }

    @PutMapping("/{id}/status")
    public void updateStudentStatus(@PathVariable Integer id, @RequestParam String status) {
        studentService.updateStudentStatus(id, status);
    }
}

