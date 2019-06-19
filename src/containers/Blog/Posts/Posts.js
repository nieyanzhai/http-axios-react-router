import React, { Component } from "react";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
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

  navigatePOstHandler = id => {
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>There is some error occurs.</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.navigatePOstHandler(post.id)}
        />
      ));
    }

    return (
      <section className="Posts">
        {posts}
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </section>
    );
  }
}

export default Posts;
