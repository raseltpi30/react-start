// for data.json import

import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/blogs")
        .then((res) => {

          if(!res.ok){
            throw Error("Failed to fecth BlogList");
          }
          return res.json();
        })
        .then((data) => {     
          setBlogs(data);
          setIsPending(false);
        })
        .catch(error => {
          setError(error.message);
          setIsPending(false);
        })
    }, 1000);
  }, []);
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      )}
    </div>
  );
};
export default Home;

// // for useState and useEffect

// import { useState, useEffect } from "react";
// import BlogList from "./Bloglist";
// const Home = () => {

//     const [name, setName] = useState("Mario");

//     const [blogs, setBlogs] = useState([
//         { title: "My first Blog", body: 'lorem ispum.....', author: 'Rasel', id: 1 },
//         { title: "My second Blog", body: 'lorem ispum.....', author: 'Rana', id: 2 },
//         { title: "My third Blog", body: 'lorem ispum.....', author: 'Rana', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id)
//         setBlogs(newBlogs);
//     }

//     useEffect(() => {
//       console.log("run useeffect");
//       console.log(name);
//     },[name]);
//     return (
//         <div className="home">
//             <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete}/>
//             <button onClick={() => setName('Luigi')}>Change Name</button>
//         </div>
//     );
// }
// export default Home;

// for 1 item props delete
// import { useState } from "react";
// import BlogList from "./Bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "My first Blog", body: 'lorem ispum.....', author: 'Rasel', id: 1 },
//         { title: "My second Blog", body: 'lorem ispum.....', author: 'Rana', id: 2 },
//         { title: "My third Blog", body: 'lorem ispum.....', author: 'Rana', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id)
//         setBlogs(newBlogs);
//     }

//     return (
//         <div className="home">
//             <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete}/>
//         </div>
//     );
// }

// export default Home;

// for blogs

// import { useState } from "react";

// const Home = () => {
//     const [blogs] = useState([
//         { title: "My first Blog", body: 'lorem ispum.....', author: 'Rasel', id: 1 },
//         { title: "My second Blog", body: 'lorem ispum.....', author: 'Rana', id: 2 },
//         { title: "My third Blog", body: 'lorem ispum.....', author: 'Raj', id: 3 }
//     ]);

//     return (
//         <div className="home">
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written By {blog.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Home;

// for state
// import { useState } from "react";

// const Home = () => {
//     const [name,setName] = useState('Rasel');
//     const [age,setAge] = useState(23);
//     const handleClick = () => {
//         setName('Rana');
//         setAge(24);
//       }
//     return (
//         <div className="home">
//             <h1>This is a Home Content</h1>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default Home;
