import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
             <Span>TEMPLE</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen) 
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">ಮುಖಪುಟ</NavLink>
          <NavLink href='#Events1'>ಕಾರ್ಯಕ್ರಮ</NavLink>
          <NavLink href='#sevas'>ಸೇವೆಗಳು</NavLink>
          <NavLink href='#projects'>ಫೋಟೋ/ವಿಡಿಯೋಗಳು</NavLink>
          <NavLink href='#contacts'>ಸಂಪರ್ಕಿಸಿ</NavLink>
          <NavLink href='#education'>Admin</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">PAY (Temple development)</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>ಮುಖಪುಟ</MobileLink>
            <MobileLink href='#Events1' onClick={() => {
              setIsOpen(!isOpen)
            }}>ಕಾರ್ಯಕ್ರಮ</MobileLink>
            <MobileLink href='#sevas' onClick={() => {
              setIsOpen(!isOpen)
            }}>ಸೇವೆಗಳು</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>ಫೋಟೋ/ವಿಡಿಯೋಗಳು</MobileLink>
            <MobileLink href='#contacts' onClick={() => {
              setIsOpen(!isOpen)
            }}>ಫೋಟೋ/ವಿಡಿಯೋಗಳು</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar