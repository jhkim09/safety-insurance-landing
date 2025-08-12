import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiHeart, HiShieldCheck, HiCurrencyDollar, HiUsers, HiClipboardCheck, HiSupport } from 'react-icons/hi';
import { theme } from '../styles/theme';

const InsuranceContainer = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.primary.gradient};
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const CoverageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CoverageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CoverageIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const CoverageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CoverageDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const CoverageAmount = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 1rem;
`;

const CoverageFeatures = styled.ul`
  list-style: none;
  text-align: left;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    opacity: 0.9;
    
    &::before {
      content: '✓';
      color: #FFD700;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

const BenefitsSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem;
  border-radius: 2rem;
  margin-top: 2rem;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BenefitItem = styled(motion.div)`
  text-align: center;
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`;

const BenefitTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const CTASection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem;
  border-radius: 2rem;
  text-align: center;
  margin-top: 2rem;
`;

const CTATitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.button`
  background: white;
  color: ${theme.colors.primary.main};
  border: none;
  padding: 1rem 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${theme.colors.gray[50]};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const InsuranceSection: React.FC = () => {
  const coverageTypes = [
    {
      icon: HiHeart,
      title: "상해보험",
      description: "업무 중 발생한 사고나 일상생활에서의 상해에 대한 포괄적인 보장을 제공합니다.",
      amount: "최대 5,000만원",
      features: [
        "업무상 재해 100% 보상",
        "일반상해 의료비 지원",
        "입원비 및 수술비 보장",
        "통원치료비 지원",
        "응급실 이용 시 우선 지원"
      ]
    },
    {
      icon: HiShieldCheck,
      title: "장애보험",
      description: "사고나 질병으로 인한 후유장애 발생 시 생활안정을 위한 보상을 제공합니다.",
      amount: "최대 1억원",
      features: [
        "1~14급 후유장애 보상",
        "장애등급별 차등 지급",
        "재활치료비 별도 지원",
        "보조기구 구입비 지원",
        "직업재활 프로그램 제공"
      ]
    },
    {
      icon: HiCurrencyDollar,
      title: "사망보험",
      description: "불의의 사고로 인한 사망 시 유족들의 생계안정을 위한 보상금을 지급합니다.",
      amount: "최대 2억원",
      features: [
        "일반사망 및 재해사망 보상",
        "유족급여 즉시 지급",
        "장례비용 별도 지원",
        "자녀 교육비 지원",
        "유족 상담 서비스 제공"
      ]
    }
  ];

  const benefits = [
    {
      icon: HiUsers,
      title: "신속한 처리",
      description: "사고 접수 후 24시간 내 초기 대응 및 72시간 내 보상 절차 시작"
    },
    {
      icon: HiClipboardCheck,
      title: "간편한 청구",
      description: "복잡한 서류 없이 온라인으로 간편하게 보험금 청구 가능"
    },
    {
      icon: HiSupport,
      title: "전담 상담",
      description: "전문 상담사가 사고 처리부터 보상까지 원스톱 지원"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <InsuranceContainer id="insurance">
      <Container>
        <SectionHeader>
          <Badge>보장 내용</Badge>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            포괄적인 직원 보장 서비스
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            상해, 장애, 사망에 이르기까지 직원들의 모든 위험을 보장하는 
            종합적인 보험 서비스를 제공합니다.
          </SectionDescription>
        </SectionHeader>

        <CoverageGrid>
          {coverageTypes.map((coverage, index) => (
            <CoverageCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <CoverageIcon>
                <coverage.icon />
              </CoverageIcon>
              <CoverageTitle>{coverage.title}</CoverageTitle>
              <CoverageAmount>{coverage.amount}</CoverageAmount>
              <CoverageDescription>{coverage.description}</CoverageDescription>
              <CoverageFeatures>
                {coverage.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </CoverageFeatures>
            </CoverageCard>
          ))}
        </CoverageGrid>

        <BenefitsSection>
          <BenefitsTitle>보험 처리의 특장점</BenefitsTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BenefitIcon>
                  <benefit.icon />
                </BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        <CTASection>
          <CTATitle>지금 바로 견적을 받아보세요</CTATitle>
          <CTADescription>
            귀하의 사업장에 맞는 최적의 보장 내용과 보험료를 
            무료로 상담해드립니다.
          </CTADescription>
          <CTAButton onClick={scrollToContact}>
            무료 견적 상담 신청
          </CTAButton>
        </CTASection>
      </Container>
    </InsuranceContainer>
  );
};

export default InsuranceSection;