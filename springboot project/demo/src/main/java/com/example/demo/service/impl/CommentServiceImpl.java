package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.CommentDto;
import com.example.demo.entity.Comment;
import com.example.demo.entity.Post;
import com.example.demo.mapper.CommentMapper;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository; // inject deppendencies
    private PostRepository postRepository;
    private UserRepository userRepository;

    public CommentServiceImpl(CommentRepository commentRepository, // constructors for this class
            PostRepository postRepository,
            UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void createComment(String postUrl, CommentDto commentDto) {

        Post post = postRepository.findByUrl(postUrl).get();
        Comment comment = CommentMapper.mapToComment(commentDto); // convert commentDto object to comment entity object
        comment.setPost(post); // set post object to comment object
        commentRepository.save(comment);
    }

    @Override
    public List<CommentDto> findAllComments() {
        List<Comment> comments = commentRepository.findAll(); // implement method of CommentService
        return comments.stream() // convert list of comment JPA entities to list of comment DTO's
                .map(CommentMapper::mapToCommentDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    // @Override
    // public List<CommentDto> findCommentsByPost() {
    // String email = SecurityUtils.getCurrentUser().getUsername();
    // User createdBy = UserRepository.findByEmail(email);
    // Long userId = createdBy.getId();
    // List<Comment> comments = commentRepository.findCommentsByPost(userId);
    // return comments.stream()
    // .map((comment) -> CommentMapper.mapToCommentDto(comment))
    // .collect(Collectors.toList());
    // }
}
