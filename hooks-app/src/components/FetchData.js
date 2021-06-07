import React,{useState, useEffect} from 'react';
import axios from "axios"

function FetchData() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const clickHandler = () =>{
        setIdFromButtonClick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>{setId(e.target.value)}} />
            <button onClick={clickHandler}>FetchPost</button>
            <div>{post.title}</div>
            {/* <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default FetchData
