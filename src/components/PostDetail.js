import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {
    const [post, setPost] = useState({});
    const { postId } = useParams();
    
    // console.log(post);
    useEffect(()=>{
      firestore
        .collection('posts')
        .doc(postId)
        .get()
        .then((snapshot) => {
         console.log('snapshot', snapshot.data());
        const post = snapshot.data();
         setPost(post);
        })
       
    }, [])
   

  //  console.log(post);
   
    return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;
  