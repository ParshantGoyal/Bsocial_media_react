
import { createContext, useReducer } from "react";


export const PostList =createContext({postListm:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer =(currPostList,action)=>{
   let newPostList = currPostList;
    if(action.type ==="DELETE_POST"){
   return newPostList.filter((ite) => ite.id !== action.payload.ID)  
    }
    else if(action.type==='CREATE_POST'){
    newPostList= [action.payload,...currPostList]  
 }   ;  
    return newPostList
}



const PostListProvider=({children})=>{
const[postListm,dispatchPostList]=useReducer(postListReducer,Default_v);


const addPost=(userId,postTitle,postBody,Reactions,Tags)=>{
// console.log(postListm);
    dispatchPostList({
        type:'CREATE_POST',
        payload:{
            id:userId,
            title:postTitle,
            body:postBody,
            reaction:Reactions,
            tag:Tags,
            
        }
    })
}
const deletePost=(postId)=>{
    console.log(postId)
    dispatchPostList({
    type:"DELETE_POST",
    payload:{
        ID:postId,
    },
});
};

return (<PostList.Provider value={{postListm,addPost,deletePost}}>{children}</PostList.Provider>)

}

const Default_v =[
    {
    id:1,
    title:"postTitle",
    body:"postBody",
    reaction:80,
    tag:['Tags','Tags2'],
},
{
    id:2,
    title:"postTitlebhjh",
    body:"postBody",
    reaction:80,
    tag:['Tags','mm'],
}
]

export default PostListProvider;