import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiShieldCheck } from 'react-icons/hi';
import { theme } from '../styles/theme';

const Nav = styled(motion.nav)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.isScrolled ? `1px solid ${theme.colors.gray[200]}` : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary.main};
  
  svg {
    font-size: 2rem;
  }
`;

const DesktopMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a<{ isScrolled: boolean }>`
  font-weight: 600;
  color: ${props => props.isScrolled ? theme.colors.text.primary : 'white'};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;
  text-shadow: ${props => props.isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'};
  
  &:hover {
    color: ${props => props.isScrolled ? theme.colors.primary.main : '#FFD700'};
    background: ${props => props.isScrolled ? 'rgba(30, 64, 175, 0.1)' : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-1px);
  }
  
  &.active {
    color: ${props => props.isScrolled ? theme.colors.primary.main : '#FFD700'};
    font-weight: 700;
  }
`;

const CTAButton = styled.button<{ isScrolled: boolean }>`
  ${theme.components.button.primary}
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button<{ isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.isScrolled ? theme.colors.text.primary : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  text-shadow: ${props => props.isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'};
  
  &:hover {
    background: ${props => props.isScrolled ? 'rgba(30, 64, 175, 0.1)' : 'rgba(255, 255, 255, 0.15)'};
    transform: scale(1.05);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  box-shadow: ${theme.shadows.lg};
`;

const MobileNavItem = styled.a`
  display: block;
  padding: 1rem 1.25rem;
  color: ${theme.colors.text.primary};
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.background.light};
    color: ${theme.colors.primary.main};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileCTAButton = styled.button`
  ${theme.components.button.primary}
  width: 100%;
  margin: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  width: calc(100% - 2.5rem);
`;

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionInView = () => {
      const sections = ['hero', 'services', 'benefits', 'insurance', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionInView);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionInView);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    scrollToSection('contact');
  };

  return (
    <Nav
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavContainer>
        <Logo>
          <HiShieldCheck />
          <span>SafetyPro</span>
        </Logo>

        <DesktopMenu>
          <NavItem>
            <NavLink 
              href="#hero" 
              isScrolled={isScrolled}
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            >
              홈
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#services" 
              isScrolled={isScrolled}
              className={activeSection === 'services' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              서비스
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#benefits" 
              isScrolled={isScrolled}
              className={activeSection === 'benefits' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
            >
              장점
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#insurance" 
              isScrolled={isScrolled}
              className={activeSection === 'insurance' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('insurance'); }}
            >
              보장내용
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#contact" 
              isScrolled={isScrolled}
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              문의
            </NavLink>
          </NavItem>
        </DesktopMenu>

        <CTAButton isScrolled={isScrolled} onClick={handleCTAClick}>
          무료 상담 신청
        </CTAButton>

        <MobileMenuButton 
          isScrolled={isScrolled}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavItem 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            >
              홈
            </MobileNavItem>
            <MobileNavItem 
              href="#services" 
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              서비스
            </MobileNavItem>
            <MobileNavItem 
              href="#benefits" 
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
            >
              장점
            </MobileNavItem>
            <MobileNavItem 
              href="#insurance" 
              onClick={(e) => { e.preventDefault(); scrollToSection('insurance'); }}
            >
              보장내용
            </MobileNavItem>
            <MobileNavItem 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              문의
            </MobileNavItem>
            <MobileCTAButton onClick={handleCTAClick}>
              무료 상담 신청
            </MobileCTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navigation;