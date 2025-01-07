import { useContext } from "react";
import Cpost from "./SinglePost";
import{PostList as Postlistdata} from "../../store/post-list-store";

const PostList =()=>{
  const {postListm} = useContext(Postlistdata);
 
return(<>

{postListm.map((post) => <Cpost key={post.id} item={post}/>)}



</>)


}
export default PostList;