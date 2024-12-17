import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data: blog, isPending, error} = useFetch(`http://localhost:5000/blogs/${id}`);

    const handleDelete = () => {
        fetch('http://localhost:5000/blogs/' +blog.id, {
            method: 'DELETE',
        })
       .then(() => {
            history.push('/');

       });
    };
    return ( 
        <div className="blogDetails home">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button type="submit" onClick={handleDelete}>Delete Blog</button>
                </article>
                
            )}
            
        </div>
     );
}
 
export default BlogDetails;