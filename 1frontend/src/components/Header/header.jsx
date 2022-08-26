import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './header.style';
const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <nav>
          <ul>
            <li>
              <Link to='/'>Guest page</Link>
            </li>
            <li>
              <Link to='/admin'>Admin page</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </header>
  );
};

export default Header;
