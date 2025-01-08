package com.example.queue.handler;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class CallNumberHandler extends TextWebSocketHandler {
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // 收到消息时的处理逻辑
        session.sendMessage(new TextMessage("当前叫号用户：" + message.getPayload()));
    }
}

