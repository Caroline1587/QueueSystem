package com.example.queuesystem.service;

import com.example.queuesystem.mapper.QueueRecordMapper;
import com.example.queuesystem.model.QueueRecord;
import com.example.queuesystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QueueService {

    @Autowired
    private QueueRecordMapper queueRecordMapper;

    @Autowired
    private UserService userService;

    public void addQueueRecord(QueueRecord queueRecord) {
        queueRecordMapper.insertQueueRecord(queueRecord);
    }

    public List<QueueRecord> getQueueRecordsByUserId(Integer userId)throws Exception {
        return queueRecordMapper.findRecordsByUserId(userId);
    }

    public QueueRecord getQueueRecordById(Integer id){
        return queueRecordMapper.findQueueRecordById(id);
    }

    //用户是否有权限访问该取号记录
    public boolean isBelonging(Integer id,  String token) throws Exception {
        // 根据 id 从数据库中获取取号记录的详细信息
        QueueRecord existingQueueRecord = getQueueRecordById(id);
        // 从认证信息中获取用户信息
        User userInfo = userService.getUserInfoByToken(token);
        Integer uid = userInfo.getId();
        // 检查取号记录的 uid 是否与用户的权限 uid 匹配
        return (existingQueueRecord != null && existingQueueRecord.getUserId().equals(uid));
    }
    public void updateQueueRecord(QueueRecord queueRecord){
        queueRecordMapper.updateQueueRecord(queueRecord);
    };

    public void deleteQueueRecordById(Integer id){
        queueRecordMapper.deleteQueueRecordById(id);
    };

    public List<QueueRecord> getAllQueueRecords(Integer id) {
        return queueRecordMapper.findAllRecords();
    }
}
