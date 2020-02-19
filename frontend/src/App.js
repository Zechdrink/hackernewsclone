import React from 'react';
import axios from 'axios'
import Post from './posts/Post.js'
import NavBar from './nav/NavBar.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      comments: [],
      count: 0,
     }
  }

  componentDidMount = () => {
    this.getPosts()
    this.getComments()
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.count !== this.state.count){
      this.getPosts()
    }

    if (prevState.comments !== this.state.comments){
      this.getComments()
    }
  }


  render() { 
    return ( 
      <>
        <NavBar/>
        <Post posts = {this.state.posts} 
              count = {this.state.count} 
              liker = {this.liker}
              comments = {this.state.comments}
              />
      </>
     );
  }

  
  getPosts = () => {
    axios.get(`http://localhost:3300/posts`)
    .then(res => {
      this.setState({
        posts: res.data,
        amount: 0
      })
    }).catch(err => {
      console.error(err)
    })
  }

  getComments = (event) => {
    axios.get(`http://localhost:3300/comments`)
    .then(res => {
      this.setState({
        comments: res.data
      })
    }).catch(err => {
      console.error(err);
    })
    }

  liker = (event) => {
    let post_id = event.target.attributes.value.value
    axios.post(`http://localhost:3300/likes/${2}`,{
        post_id: post_id, 
        user_id: 1 
      }).then(res => {
        this.setState({
          count: this.state.count + 1
        })
      }).catch(err => {
        console.error(err)
      })
  }

}

export default App;
