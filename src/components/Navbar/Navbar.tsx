import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link as LinkRouter } from 'react-router-dom';
import { animateScroll, Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { mediaQueries } from '~/styles';

interface NavbarProps {
  toggle?: () => void;
}

function NavBar({ toggle }: NavbarProps) {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavList>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} offset={-80}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='discover' smooth={true} duration={500} spy={true} offset={-80}>
                  Discover
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='services' smooth={true} duration={500} spy={true} offset={-80}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} offset={-80}>
                  Sign Up
                </NavLink>
              </NavItem>
            </NavList>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;

interface NavProps {
  scrollNav: boolean;
}

const Nav = styled.nav<NavProps>`
  background-color: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media only screen and (${mediaQueries.tabletUp}) {
    transition: 0.8s all ease;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1150px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (${mediaQueries.tabletUp}) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media only screen and (${mediaQueries.tabletUp}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;
