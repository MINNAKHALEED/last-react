


import './LayoutPage.css'

import {Link, Outlet} from 'react-router-dom';




const LayoutPage = () => {


  return (
    <div>

<nav className='nav'>
          
        <ul>
    
          <li>
            <Link to="/CollectionPage" className='item'>Collection</Link>
          </li>
          <li>
            <Link to="/MenPage" className='item'>Men</Link>
          </li>
          <li>
            <Link to="/WomenPage" className='item'>Women</Link>
          </li>
          <li>
            <Link to="/AboutPage" className='item'>About Page</Link>
          </li>
          <li>
            <Link to="/ContactPage" className='item'>Contact</Link>
          </li>

          

        </ul>
        
      </nav>




    <  Outlet></Outlet>
        
      
    
      
    </div>
  );
}

export default LayoutPage;