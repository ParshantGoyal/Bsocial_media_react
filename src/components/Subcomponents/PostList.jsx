import { useContext } from "react";
import CPost from "./Post";
import{PostList as Postlistdata} from "../../store/post-list-store";

const PostList =()=>{
  const {PostList} = useContext(Postlistdata);
return(<>
{/* {PostList.map((item)=>{<CPost key={item.id} postc={item}/>})} */}
<CPost/>

</>)


}
export default PostList;