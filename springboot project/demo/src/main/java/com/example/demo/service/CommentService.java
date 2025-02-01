package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.CommentDto;

public interface CommentService {
    void createComment(String postUrl, CommentDto commentDto);

    List<CommentDto> findAllComments();

    void deleteComment(Long commentId);

    // List<CommentDto> findCommentsByPost();

}
