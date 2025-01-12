package com.example.queuesystem.mapper;

import com.example.queuesystem.model.QueueRecord;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface QueueRecordMapper {

//    @Insert("INSERT INTO queue_record(user_id, number, time, status) VALUES(#{userId}, #{number}, #{time}, #{status})")
    void insertQueueRecord(QueueRecord queueRecord);

//    @Select("SELECT * FROM queue_record WHERE user_id = #{userId}")
    List<QueueRecord> findRecordsByUserId(Integer userId);

    // 查询每个QueueRecord具体信息
    QueueRecord findQueueRecordById(Integer id);

    // 更新QueueRecord
    void updateQueueRecord(QueueRecord queueRecord);

    void deleteQueueRecordById(Integer id);

    // 仅管理员
    //    @Select("SELECT * FROM queue_record")
    List<QueueRecord> findAllRecords();
}
