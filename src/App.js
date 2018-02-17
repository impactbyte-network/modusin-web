import React from "react"
import { Route } from "react-router-dom"

import home from "./pages/home"

import posts from "./pages/posts"
import post from "./pages/post"
import topics from "./pages/topics"
import topic from "./pages/topic"

import register from "./pages/register"
import login from "./pages/login"
import profile from "./pages/profile"
import setting from "./pages/setting"

const App = () => (
  <div id="routes">
    <Route exact path={`/`} component={home} />
    <Route path={`/posts`} component={posts} />
    <Route path={`/topics`} component={topics} />

    <Route path={`/p/:id`} component={post} />
    <Route path={`/t/:id`} component={topic} />

    <Route path={`/register`} component={register} />
    <Route path={`/login`} component={login} />
    <Route path={`/profile`} component={profile} />
    <Route path={`/setting`} component={setting} />
  </div>
)

export default App
