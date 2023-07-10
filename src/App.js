import { useEffect, useState } from "react"
import Post from "./components/Post"
import { addPost, getAllPosts } from "./utils/handleApi"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Header from "./components/Header";
import "./index.css"

export default function App() {


  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  useEffect(() => {
    getAllPosts(setPost);
  }, [])



  return (
    <>
    <Header></Header>
      <div className="app bg-bg_dark py-4 text-gray-400">
        <div className="container">
          <div className="poster ">
            <label className="ml-5 text-xl">New Post:</label>
            <input type="text" placeholder="Title" className='bg-bg_dark-brighter border border-reddit_border p-2 block w-full rounded-md ml-4 resize-none'
              value={title}
              onChange={(e) => setTitle(e.target.value)}>
            </input>
            <br></br>
            <textarea placeholder="Enter Text" value={postText} className='bg-bg_dark-brighter border border-reddit_border p-2 block w-full h-80 rounded-md ml-4 resize-none'
              onChange={(e) => setPostText(e.target.value)}></textarea>
            <button onClick={() => addPost(postText, setPostText, title, setTitle, setPost)} className="bg-gray-700 text-xl rounded-md p-2 mt-4 ml-4 mb-2">
              Post
            </button>
          </div>
          <hr className="w-screen"></hr>
          <div className="list">
            <h1 className="text-xl mt-3 mb-5 ml-3">Top Posts</h1>
            {post.map((item) => <Post key={item._id} title={item.title} text={item.text} time={item.time}></Post>)}

          </div>
        </div>
      </div>
    </>
  )
}