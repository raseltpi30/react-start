const BlogList = ({blogs,title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;

// props 1 item delete
// const BlogList = ({blogs,title, handleDelete}) => {
//     console.log(blogs,title);
//     return (
//         <div className="blog-list">
//             <h2>{title}</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Writen by {blog.author}</p>
//                     <button onClick={ () => handleDelete(blog.id)}>Delete Blog</button>
//                 </div>
//             ))}
//         </div>
//     );
// }
 
// export default BlogList;
