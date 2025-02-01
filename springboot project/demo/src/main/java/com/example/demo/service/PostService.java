package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.PostDto;

public interface PostService {
    List<PostDto> findAllPosts();

    void createPost(PostDto postDto);

    PostDto findPostById(Long postId);

    void updatePost(PostDto postDto); // edit

    void deletePost(Long postId); // delete

    PostDto findPostByUrl(String postUrl); // view

    List<PostDto> searchPosts(String query); // search post
}
