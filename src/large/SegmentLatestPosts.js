import React from "react"

import SmallPost from "../medium/SmallPost"

const POSTS = [
  {
    id: 10,
    title: "One One One",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "One Punch Man"
    }
  },
  {
    id: 20,
    title: "Two Two Two",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Two Times"
    }
  },
  {
    id: 30,
    title: "Three Three Three",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Three Tree"
    }
  }
]

const SegmentLatestPosts = props => (
  <div>
    {POSTS.map((post, index) => {
      return <SmallPost key={index} post={post} />
    })}
  </div>
)

export default SegmentLatestPosts
