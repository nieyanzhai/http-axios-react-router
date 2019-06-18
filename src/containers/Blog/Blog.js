import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "../Blog/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>hello</h1>} />
        <Route path="/" render={() => <h1>hello 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
