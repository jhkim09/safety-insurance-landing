import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiShieldCheck, HiPhone, HiMail, HiHome } from 'react-icons/hi';
import { theme } from '../styles/theme';

const ThankYouContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem;
  position: relative;
  
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

const ContentWrapper = styled(motion.div)`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 3rem;
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 2rem;
  }
`;

const SuccessIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: ${theme.colors.secondary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 3rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    
    &::before {
      content: '✓';
      color: ${theme.colors.secondary.main};
      font-weight: bold;
      font-size: 1rem;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  
  svg {
    color: ${theme.colors.secondary.main};
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: ${theme.colors.primary.main};
  border: none;
  padding: 0.875rem 1.75rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${theme.colors.gray[50]};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.875rem 1.75rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const Timeline = styled.div`
  text-align: left;
  margin-bottom: 1.5rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineNumber = styled.div`
  width: 30px;
  height: 30px;
  background: ${theme.colors.secondary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`;

const TimelineContent = styled.div`
  flex: 1;
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
    margin: 0;
    opacity: 0.9;
  }
`;

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Auto-scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:02-0000-0000';
  };

  return (
    <>
      <Helmet>
        <title>상담 신청 완료 - 안전성평가 및 산업안전보건 보장보험</title>
        <meta 
          name="description" 
          content="상담 신청이 완료되었습니다. 전문가가 빠른 시일 내에 연락드리겠습니다." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <ThankYouContainer>
        <ContentWrapper
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SuccessIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <HiCheckCircle />
          </SuccessIcon>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            상담 신청이 완료되었습니다!
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            소중한 시간을 내어 상담을 신청해주셔서 감사합니다. 
            전문 상담사가 영업시간 내에 빠르게 연락드리겠습니다.
          </Description>

          <InfoSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <InfoTitle>
              <HiShieldCheck />
              앞으로의 진행 과정
            </InfoTitle>
            <Timeline>
              <TimelineItem>
                <TimelineNumber>1</TimelineNumber>
                <TimelineContent>
                  <h4>담당자 배정 및 연락</h4>
                  <p>24시간 이내 전문 상담사가 연락드립니다</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineNumber>2</TimelineNumber>
                <TimelineContent>
                  <h4>현황 분석 및 상담</h4>
                  <p>사업장 현황에 맞는 맞춤 솔루션을 제안합니다</p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineNumber>3</TimelineNumber>
                <TimelineContent>
                  <h4>견적서 제공</h4>
                  <p>투명한 비용과 서비스 내용을 상세히 안내합니다</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </InfoSection>

          <InfoSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <InfoTitle>
              상담 전 준비사항 (선택사항)
            </InfoTitle>
            <InfoList>
              <li>현재 운영 중인 안전관리 시스템 현황</li>
              <li>기존 보험 가입 내역 (있는 경우)</li>
              <li>직원 수 및 업종 정보</li>
              <li>원하시는 서비스 우선순위</li>
            </InfoList>
          </InfoSection>

          <ContactInfo>
            <ContactItem>
              <HiPhone />
              <span>02-0000-0000</span>
            </ContactItem>
            <ContactItem>
              <HiMail />
              <span>info@safetypro.com</span>
            </ContactItem>
          </ContactInfo>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <PrimaryButton to="/">
              <HiHome />
              홈으로 돌아가기
            </PrimaryButton>
            <SecondaryButton onClick={handleCallClick}>
              <HiPhone />
              지금 바로 전화하기
            </SecondaryButton>
          </ButtonGroup>
        </ContentWrapper>
      </ThankYouContainer>
    </>
  );
};

export default ThankYouPage;