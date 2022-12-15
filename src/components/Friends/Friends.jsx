import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import Like from './Post/Post';

const MyPosts = (props) => {



    let PostElements =
        props.PostData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return <div className={s.postBlock}>
       <div className={s.myPost}>
           my post
       </div>
        <div>
            <textarea className={s.textArea}></textarea>
        </div>
        <button>Add post</button>


        <div className={s.item}>
            {PostElements}
        </div>
    </div>


}

export default MyPosts;