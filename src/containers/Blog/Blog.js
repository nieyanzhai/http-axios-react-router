import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
// import NewPost from "../Blog/NewPost/NewPost";
import asynComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asynComponent(() => {
  return import("../Blog/NewPost/NewPost");
});

const NewPost = React.lazy(() => import("../Blog/NewPost/NewPost"));

class Blog extends Component {
  state = {
    auth: true
  };

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
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          {/* {this.state.auth ? (
            <Route
              path="/new-post"
              exact
              render={() => (
                <Suspense fallback={<h1>Loading</h1>}>
                  <NewPost />
                </Suspense>
              )}
            />
          ) : null} */}
          {/* <Route render={() => <h1>Not Found</h1>} /> */}
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
