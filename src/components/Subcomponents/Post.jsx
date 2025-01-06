import { useContext } from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {PostList} from '../../store/post-list-store';
function CPost({item}){

const {deletePost} =useContext(PostList)


return(<>
<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title,  item.title
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    // onClick={()=>deletePost(item.id)}
    >
    <AiFillDelete/>
    {/* <span class="visually-hidden">unread messages</span> */}
  </span>


    </h5>
    <p className="card-text">item.description ,  Some quick example text to build on the card title and make up the bulk 
        of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere item.button</a>
    <div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>

    {/* {post.tags((tag)=>{<span key={tag} class ="badge text-bg-primary">{tag}</span>})} */}
  </div>
</div>
</>)

}

export default CPost;