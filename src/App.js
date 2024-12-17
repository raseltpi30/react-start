
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
function App() {
  
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}
// function App() {
//   const title = "This is a single blog tite";
//   const like = 50;
//   const link = "https://www.google.com/";
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Likes {like} times</p>
//         <p>{10}</p>
//         <p>{'hello'}</p>
//         <p>{[1,2,3,4]}</p>
//         <p>{Math.random() * 10}</p>
//         <a href={link}>google site</a>
//       </div>
//     </div>
//   );
// }

export default App;
