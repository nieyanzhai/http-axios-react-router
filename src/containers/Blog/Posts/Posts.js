import React, { Component } from "react";
import { Link } from "react-router-dom";

import Post from "../../../components/Post/Post";
import "./Posts.css";
import axios from "../../../axios";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(resp => {
        const posts = resp.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => console.log(err));
  }

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>There is some error occurs.</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        <Link to={"/" + post.id} key={post.id}>
          <Post title={post.title} author={post.author} />
        </Link>
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
