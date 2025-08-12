import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiAcademicCap, HiUserGroup } from 'react-icons/hi';
import { theme } from '../styles/theme';

const HeroContainer = styled.section`
  id: hero;
  min-height: 100vh;
  background: ${theme.colors.primary.gradient};
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  color: white;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 2.75rem;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.125rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  ${theme.components.button.primary}
  font-size: 1.125rem;
  padding: 1rem 2rem;
  background: white;
  color: ${theme.colors.primary.main};
  
  &:hover {
    background: ${theme.colors.gray[50]};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
    
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 0.875rem;
    opacity: 0.8;
    margin: 0;
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const VisualCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 3rem;
  text-align: center;
  color: white;
  position: relative;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2.5rem;
  }
`;

const FloatingIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  .floating-icon {
    position: absolute;
    color: rgba(255, 255, 255, 0.3);
    animation: float 3s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 60%;
      right: 15%;
      animation-delay: 1s;
    }
    
    &:nth-child(3) {
      bottom: 30%;
      left: 20%;
      animation-delay: 2s;
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="hero">
      <ContentWrapper>
        <HeroContent>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <HiShieldCheck />
            ISO45001 공인 인증기관
          </Badge>

          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            직원의 안전을<br />
            <span style={{ color: '#FFD700' }}>완벽하게 보장</span>하는<br />
            전문 보험 서비스
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ISO45001 기준 안전성평가부터 상해·장애·사망까지<br />
            포괄적인 직원 보장보험을 한 번에 해결하세요
          </HeroSubtitle>

          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PrimaryButton onClick={scrollToContact}>
              무료 상담 받기
            </PrimaryButton>
            <SecondaryButton onClick={scrollToServices}>
              서비스 살펴보기
            </SecondaryButton>
          </CTAButtons>

          <StatsContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <StatItem>
              <h3>500+</h3>
              <p>인증 완료 기업</p>
            </StatItem>
            <StatItem>
              <h3>98%</h3>
              <p>고객 만족도</p>
            </StatItem>
            <StatItem>
              <h3>24시간</h3>
              <p>신속 대응</p>
            </StatItem>
          </StatsContainer>
        </HeroContent>

        <HeroVisual
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <FloatingIcons>
            <HiShieldCheck className="floating-icon" style={{ fontSize: '40px' }} />
            <HiAcademicCap className="floating-icon" style={{ fontSize: '35px' }} />
            <HiUserGroup className="floating-icon" style={{ fontSize: '45px' }} />
          </FloatingIcons>
          
          <VisualCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconContainer>
              <HiShieldCheck />
            </IconContainer>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>
              ISO45001 인증
            </h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              국제 표준 기준의<br />
              안전성 평가 및<br />
              종합 보장 시스템
            </p>
          </VisualCard>
        </HeroVisual>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;