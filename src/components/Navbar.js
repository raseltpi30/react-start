// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>This is a title</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create">Create</a>
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar;
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>This is a Navbar</h1>
            <div className="links menu">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/blog" style={{
                    color:"white",
                    backgroundColor:"blue",
                }}>Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;