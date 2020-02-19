import React, {useState, useEffect} from "react";
import "./post.scss"
import axios from "axios";
import Comment from "./comments/Comment"

const Post = (props) => {

    return ( 

    <div className = "posts-container">
        {props.posts.map((post, i) => (
            <div className = "whole-post" key = {i}>

                <div className = "post" key = {post.id}>
                    <p>{`${i + 1}.  `}</p>
                    <a href={post.link}><p> {post.title} </p></a>
                </div>

                <div className = "post-info">
                    <p>{post.likes} likes <span onClick = {props.liker} value= {post.id}>^</span></p>
                    <p>posted by <span>{post.author}</span></p>
                    <p>{post.created_at}</p>
                    <div> 
                        <p value = {post.id}> 129 comments <span>+</span></p> 
                        <Comment postId = {post.id} comments = {props.comments}/>
                    </div>
                    
                </div>

            </div>
        ))}
    </div> 
    
    );
}
 
export default Post;