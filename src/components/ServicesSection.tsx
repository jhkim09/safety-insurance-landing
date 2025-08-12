import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiAcademicCap, HiClipboardCheck, HiUserGroup, HiChartBar, HiSupport } from 'react-icons/hi';
import { theme } from '../styles/theme';

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.background.white};
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
  background: ${theme.colors.primary.light}15;
  color: ${theme.colors.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 1rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.125rem;
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: ${theme.shadows.card};
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.gray[100]};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary.light};
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.primary.gradient};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.text.secondary};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    
    &::before {
      content: '✓';
      color: ${theme.colors.secondary.main};
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

const ProcessSection = styled.div`
  background: ${theme.colors.background.section};
  padding: 3rem;
  border-radius: 2rem;
  margin-top: 2rem;
`;

const ProcessTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -1rem;
    width: 2rem;
    height: 2px;
    background: ${theme.colors.primary.light};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      display: none;
    }
  }
  
  &:last-child::after {
    display: none;
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.primary.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StepTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: HiShieldCheck,
      title: "ISO45001 인증 컨설팅",
      description: "국제 표준 산업안전보건경영시스템 인증을 위한 전문 컨설팅을 제공합니다.",
      features: [
        "현황 진단 및 갭 분석",
        "문서화 시스템 구축",
        "내부심사원 교육",
        "인증심사 대응 지원"
      ]
    },
    {
      icon: HiClipboardCheck,
      title: "안전성 평가",
      description: "사업장의 위험요소를 체계적으로 분석하고 개선방안을 제시합니다.",
      features: [
        "위험성 평가 실시",
        "작업환경 측정",
        "안전점검 및 진단",
        "개선계획 수립"
      ]
    },
    {
      icon: HiUserGroup,
      title: "직원 보장보험",
      description: "상해, 장애, 사망에 대한 포괄적인 보장을 제공하는 맞춤형 보험 상품입니다.",
      features: [
        "업무상 재해 보상",
        "일반상해 보장",
        "후유장해 보상",
        "유족급여 지급"
      ]
    },
    {
      icon: HiAcademicCap,
      title: "안전교육 프로그램",
      description: "직원들의 안전의식 향상을 위한 체계적인 교육 프로그램을 운영합니다.",
      features: [
        "정기 안전교육",
        "신입직원 교육",
        "관리감독자 교육",
        "특별안전교육"
      ]
    },
    {
      icon: HiChartBar,
      title: "안전관리 시스템",
      description: "디지털 기반의 통합 안전관리 시스템으로 체계적인 관리를 지원합니다.",
      features: [
        "사고 관리 시스템",
        "점검 결과 추적",
        "통계 분석 리포트",
        "실시간 모니터링"
      ]
    },
    {
      icon: HiSupport,
      title: "24시간 지원 서비스",
      description: "응급상황 발생 시 신속한 대응과 지속적인 관리 서비스를 제공합니다.",
      features: [
        "응급상황 대응",
        "전문가 상담",
        "정기 점검 서비스",
        "법규 업데이트 안내"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "상담 신청",
      description: "온라인 또는 전화를 통해 무료 상담을 신청하세요"
    },
    {
      number: "02", 
      title: "현황 분석",
      description: "전문가가 현장을 방문하여 현황을 분석합니다"
    },
    {
      number: "03",
      title: "맞춤 제안",
      description: "기업 특성에 맞는 최적의 솔루션을 제안드립니다"
    },
    {
      number: "04",
      title: "계약 체결",
      description: "투명한 계약 조건으로 서비스를 시작합니다"
    },
    {
      number: "05",
      title: "서비스 제공",
      description: "전문팀이 체계적으로 서비스를 제공합니다"
    }
  ];

  return (
    <ServicesContainer id="services">
      <Container>
        <SectionHeader>
          <Badge>우리의 서비스</Badge>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            포괄적인 안전관리 솔루션
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ISO45001 인증부터 직원 보장보험까지, 기업의 안전을 위한 
            모든 서비스를 원스톱으로 제공합니다.
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <ServiceIcon>
                <service.icon />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ProcessSection>
          <ProcessTitle>서비스 진행 과정</ProcessTitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessSection>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;