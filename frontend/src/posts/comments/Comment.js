import React, { useState} from 'react';
import axios from 'axios';


const Comment = (props) => {

    const [commentState, setCommentState] = useState({
        "comment": "",
    })

    const changeHandler = event => {
        setCommentState({ ...commentState, [event.target.name]: event.target.value });
    };

    const postComment = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3300/comments/`, {
            post_id: props.postId,
            user_id: 2,
            comment: commentState.comment
        }).then(res => {
            console.log("The database has been updated with your post?")
        }).catch(err => {
            console.error(err)
        })
      }

      const filteredComments = props.comments.filter(comment => {
        if (comment.post_id === props.postId) {
            return comment
        }

        else {
            return null;
        }
      })

    return ( 

        <div>
            <div>
                {filteredComments.map((comment, index) =>(
                    <p key = {comment.id}> {comment.comment} </p>
                ))}
            </div>

            <form className = "comment-input" onSubmit = {postComment}>

                <textarea
                    name="comment"
                    value={commentState.comment}
                    placeholder="your comment..." 
                    onChange={changeHandler}
                    />
                <button>button</button>    

            </form>
        </div>
     );
}
 
export default Comment;