import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Routes>
           {/* In the latest version of React(i.e - 6), we use element, not the component */}
          <Route exact path="/" element={ <Home/>} /> 
          <Route exact path="/post/:postId" element={<PostDetail/>} />
          <Route exact path="/create-post" element={<CreatePost/>} />
        </Routes> 
    </div>
  );
}

export default App;
