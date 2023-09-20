import React from 'react';
import {Link} from 'react-router-dom';

// function Navbar() {
//   return (
//     <div>

//         <ul id="nav">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/create-post">Create Post</Link>
//           </li>
//         </ul>
//     </div>
//   );
// }

// export default Navbar;


const Navbar = (props) => {
  // console.log(props);
  return (
    <div style={styles.nav}>
        <div>
        <ul id="nav">
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/create-post">Create Post</Link>
             </li>
           </ul>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
};


export default Navbar;
