import { type } from "@testing-library/user-event/dist/types/utility";
import { createContext, useReducer } from "react";


export const PostList =createContext({postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer =(currPostList,action)=>{
   let newPostList = currPostList;
    if(action.type ==='DELETE_POST'){
  newPostList.filter((item) => item.id !== action.payload.postId)
    }
    
    return currPostList;
}

const PostListProvider=({children})=>{

const[postList,dispatchPostList]=useReducer(postListReducer,[])

const addPost=()=>{

}
const deletePost=( postId)=>{
dispatchPostList({
    type:'DELETE_POST',
    payload:{
        postId
    }
})
}

return <PostList.Provider value={{ postList,addPost,deletePost,}
}>{children}</PostList.Provider>

}
export default PostListProvider;