package com.example.queuesystem.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class QueueRecord {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer queueNumber;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdTime;
    private Date finishedTime;
    private Integer status;//0-waiting 1-completed 2-cancelled
    private Integer userId;
}
