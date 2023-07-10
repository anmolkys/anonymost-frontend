import axios from "axios";

const baseUrl = "https://anonymost-backend.onrender.com"

const getAllPosts = (setPost) => {
    axios.get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setPost(data);
    })
}

const addPost = (text,setText , title , setTitle , setPost) => {
    if(text && title){
        axios.post(`${baseUrl}/post`,{title,text})
        .then((data)=>{
            console.log(data);
            setText("");
            setTitle("");
            getAllPosts(setPost);
        })
    }

}

export {getAllPosts , addPost};