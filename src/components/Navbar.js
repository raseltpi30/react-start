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

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>This is a Navbar</h1>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/create">Create</a>
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