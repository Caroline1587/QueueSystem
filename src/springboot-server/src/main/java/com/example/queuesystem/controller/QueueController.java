package com.example.queuesystem.controller;

import com.example.queuesystem.model.QueueRecord;
import com.example.queuesystem.model.User;
import com.example.queuesystem.service.QueueService;
import com.example.queuesystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/queue")
public class QueueController {

    @Autowired
    private QueueService queueService;

    @Autowired
    private UserService userService;

    @GetMapping("/my")
    public ResponseEntity<?> getMyQueueRecords(@RequestHeader("Authorization") String token) {
        try{
            User user = userService.getUserInfoByToken(token);
            List<QueueRecord> queueRecords=queueService.getQueueRecordsByUserId(user.getId());
            System.out.println(queueRecords);
            return ResponseEntity.ok(queueRecords);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @GetMapping("/allRecords")
    public ResponseEntity<?> getAllQueueRecords(@RequestHeader("Authorization") String token) {
        try{
            User user = userService.getUserInfoByToken(token);
            List<QueueRecord> queueRecords=queueService.getAllQueueRecords(user.getId());
            System.out.println(queueRecords);
            return ResponseEntity.ok(queueRecords);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addQueueRecord(@RequestBody QueueRecord queueRecord, @RequestHeader("Authorization") String token) {
        try{
            User user = userService.getUserInfoByToken(token);
            queueRecord.setUserId(user.getId());
            queueService.addQueueRecord(queueRecord);
            return ResponseEntity.ok("QueueRecord added successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    //    查询单个queue
    @GetMapping("/edit-queue/{id}")
    public ResponseEntity<?>  getQueueRecordDetails(@PathVariable Integer id, @RequestHeader("Authorization") String token) {
        try {
            // 根据 id 从数据库中获取 取号记录的详细信息
            QueueRecord queueRecord=queueService.getQueueRecordById(id);

            // 检查取号记录的 userId 是否与用户的权限 userId 匹配
            if (queueService.isBelonging(id, token)) {
                return ResponseEntity.ok(queueRecord); // 返回 取号记录信息
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("没有权限访问该取号记录");
            }
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
    //    更新事项
    @PutMapping("/edit-record/{id}")
    public ResponseEntity<?> updateQueueRecord(@PathVariable Integer id, @RequestBody QueueRecord queueRecord, @RequestHeader("Authorization") String token) {
        try {
            if (queueService.isBelonging(id, token)) {
                QueueRecord existingQueueRecord = queueService.getQueueRecordById(id);
                // 更新取号记录的信息
                existingQueueRecord.setFinishedTime(queueRecord.getFinishedTime());
                existingQueueRecord.setStatus(queueRecord.getStatus());
                System.out.println(existingQueueRecord);
                // 保存更新后的待办事项
                queueService.updateQueueRecord(existingQueueRecord);
                return ResponseEntity.ok("QueueRecord updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("没有权限更新该QueueRecord");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
    //    删除事项
    @DeleteMapping("/delete-record/{id}")
    public ResponseEntity<?> deleteQueueRecord(@PathVariable Integer id, @RequestHeader("Authorization") String token) {
        try {
            if (queueService.isBelonging(id, token)) {
                // 检查取号记录的 uid 是否与用户的权限 uid 匹配
                queueService.deleteQueueRecordById(id);
                return ResponseEntity.ok("QueueRecord deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("没有权限删除该QueueRecord");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }





}
