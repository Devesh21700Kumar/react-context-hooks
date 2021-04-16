import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
const App=()=> {
  const [posts, setPosts]=useState([])
const getPosts = async () => {
  try {
const userPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    
    setPosts(userPosts.data);  // set State
  
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{
    
    getPosts()
},[])  // includes empty dependency array


useEffect(async () => {
    try{ 
      let response = await axios.get(`https://swapi.co/api/people/`)
      let data = await response.json();
      setChars(data);
    } catch(error) {
       console.error(error.message);
    }
  },[]);
  // directly place it in the useEffect hook

return (
    <div>
     <h1>useEffect</h1>
     <ul>
       {posts.map(post=>(
         <li key={post.id}>{post.title}</li>
       ))}
     </ul>
    </div>
  );
}
export default App;