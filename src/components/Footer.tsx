import React from 'react';
import styled from 'styled-components';
import { HiShieldCheck, HiPhone, HiMail, HiLocationMarker, HiGlobeAlt } from 'react-icons/hi';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.text.primary};
  color: white;
  padding: 4rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  
  svg {
    font-size: 2rem;
    color: ${theme.colors.secondary.main};
  }
`;

const FooterDescription = styled.p`
  color: ${theme.colors.gray[300]};
  line-height: 1.6;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled.a`
  color: ${theme.colors.gray[300]};
  font-size: 0.875rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  svg {
    font-size: 1rem;
    color: ${theme.colors.secondary.main};
    flex-shrink: 0;
  }
`;

const ContactText = styled.span`
  color: ${theme.colors.gray[300]};
  font-size: 0.875rem;
`;

const CertificationSection = styled.div``;

const CertificationTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const CertificationText = styled.p`
  color: ${theme.colors.gray[300]};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const CertificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.secondary.main}20;
  color: ${theme.colors.secondary.main};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.gray[700]};
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.gray[400]};
  font-size: 0.875rem;
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LegalLink = styled.a`
  color: ${theme.colors.gray[400]};
  font-size: 0.875rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

const BusinessInfo = styled.div`
  color: ${theme.colors.gray[400]};
  font-size: 0.75rem;
  line-height: 1.4;
  margin-top: 1rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>
              <HiShieldCheck />
              <span>SafetyPro</span>
            </Logo>
            <FooterDescription>
              ISO45001 기반 안전성평가와 직원 보장보험을 통해 
              기업의 지속가능한 안전관리를 지원하는 전문기업입니다.
            </FooterDescription>
            <CertificationSection>
              <CertificationTitle>공인 인증기관</CertificationTitle>
              <CertificationText>
                국제표준화기구(ISO) 공인 인증기관으로서 
                전문적이고 신뢰할 수 있는 서비스를 제공합니다.
              </CertificationText>
              <CertificationBadge>
                <HiGlobeAlt />
                ISO45001 공인기관
              </CertificationBadge>
            </CertificationSection>
          </FooterSection>

          <FooterSection>
            <SectionTitle>서비스</SectionTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  ISO45001 인증 컨설팅
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  안전성 평가
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="#insurance" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('insurance'); }}
                >
                  직원 보장보험
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  안전교육 프로그램
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  안전관리 시스템
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>회사 정보</SectionTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink href="#about">회사 소개</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#team">전문가 팀</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#certification">인증서</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#case">성공 사례</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#news">뉴스 & 공지</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>연락처</SectionTitle>
            <ContactItem>
              <HiPhone />
              <ContactText>02-0000-0000</ContactText>
            </ContactItem>
            <ContactItem>
              <HiMail />
              <ContactText>info@safetypro.com</ContactText>
            </ContactItem>
            <ContactItem>
              <HiLocationMarker />
              <ContactText>
                서울시 강남구 테헤란로 123<br />
                SafetyPro 빌딩 10층
              </ContactText>
            </ContactItem>
            
            <SectionTitle style={{ marginTop: '2rem' }}>운영 시간</SectionTitle>
            <ContactText>
              평일: 09:00 - 18:00<br />
              토요일: 09:00 - 15:00<br />
              일요일/공휴일: 휴무
            </ContactText>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <div>
            <Copyright>
              © 2024 SafetyPro. All rights reserved.
            </Copyright>
            <BusinessInfo>
              사업자등록번호: 000-00-00000 | 대표자: 김안전 | 통신판매업신고: 제2024-서울강남-0000호<br />
              주소: 서울시 강남구 테헤란로 123 SafetyPro 빌딩 10층 | 개인정보보호책임자: 이보안
            </BusinessInfo>
          </div>
          
          <LegalLinks>
            <LegalLink href="/privacy">개인정보처리방침</LegalLink>
            <LegalLink href="/terms">이용약관</LegalLink>
            <LegalLink href="/sitemap">사이트맵</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;