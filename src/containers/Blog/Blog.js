import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Posts
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

        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
