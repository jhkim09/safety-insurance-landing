import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiTrendingUp, HiShieldCheck, HiClock, HiCurrencyDollar, HiUsers, HiStar } from 'react-icons/hi';
import { theme } from '../styles/theme';

const BenefitsContainer = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.background.section};
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
  background: ${theme.colors.secondary.main}15;
  color: ${theme.colors.secondary.main};
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: ${theme.shadows.card};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.gray[100]};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const BenefitIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${theme.colors.secondary.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.75rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ComparisonSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: ${theme.shadows.card};
`;

const ComparisonTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ComparisonTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: ${theme.colors.gray[200]};
  border-radius: 1rem;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TableHeader = styled.div`
  background: ${theme.colors.primary.main};
  color: white;
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
`;

const TableCell = styled.div<{ highlight?: boolean }>`
  background: ${props => props.highlight ? theme.colors.secondary.main + '10' : 'white'};
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  font-size: 0.95rem;
  color: ${theme.colors.text.primary};
  
  &.highlight {
    font-weight: 600;
    color: ${theme.colors.secondary.main};
  }
`;

const CheckIcon = styled.span`
  color: ${theme.colors.secondary.main};
  font-size: 1.25rem;
  font-weight: bold;
`;

const XIcon = styled.span`
  color: ${theme.colors.accent.red};
  font-size: 1.25rem;
  font-weight: bold;
`;

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: HiTrendingUp,
      title: "비용 절감 효과",
      description: "안전사고 예방으로 인한 보험료 절약과 생산성 향상으로 연간 최대 30% 비용 절감이 가능합니다."
    },
    {
      icon: HiShieldCheck,
      title: "완벽한 법적 보호",
      description: "산업안전보건법 및 관련 법규를 완벽 준수하여 법적 리스크를 최소화하고 기업을 보호합니다."
    },
    {
      icon: HiClock,
      title: "신속한 처리",
      description: "사고 발생 시 24시간 내 초기 대응과 72시간 내 보상 절차를 시작하여 빠른 해결을 보장합니다."
    },
    {
      icon: HiCurrencyDollar,
      title: "맞춤형 보장",
      description: "업종과 규모에 따른 맞춤형 보장 설계로 불필요한 비용 없이 최적의 보장을 받을 수 있습니다."
    },
    {
      icon: HiUsers,
      title: "직원 만족도 향상",
      description: "안전한 근무환경과 충분한 보장으로 직원들의 만족도와 업무 몰입도가 크게 향상됩니다."
    },
    {
      icon: HiStar,
      title: "기업 이미지 제고",
      description: "ISO45001 인증과 우수한 안전관리로 대외적 신뢰도와 기업 브랜드 가치를 크게 향상시킵니다."
    }
  ];

  const comparisonData = [
    { category: "안전성 평가", traditional: "✗", ours: "✓", description: "ISO45001 기준" },
    { category: "보험료 할인", traditional: "5-10%", ours: "최대 30%", description: "우수등급 할인" },
    { category: "사고 대응시간", traditional: "3-7일", ours: "24시간", description: "신속 대응" },
    { category: "법적 컨설팅", traditional: "별도 비용", ours: "무료 포함", description: "전문가 상담" },
    { category: "직원 교육", traditional: "✗", ours: "✓", description: "정기 교육" },
    { category: "시스템 관리", traditional: "수동", ours: "디지털", description: "통합 관리" },
    { category: "보장 범위", traditional: "기본", ours: "종합", description: "상해/장애/사망" },
  ];

  return (
    <BenefitsContainer id="benefits">
      <Container>
        <SectionHeader>
          <Badge>Why Choose Us</Badge>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            우리를 선택해야 하는 이유
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            단순한 보험을 넘어 기업의 지속가능한 성장을 위한 
            종합적인 안전관리 솔루션을 제공합니다.
          </SectionDescription>
        </SectionHeader>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <BenefitIcon>
                <benefit.icon />
              </BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ComparisonSection>
          <ComparisonTitle>기존 서비스와의 비교</ComparisonTitle>
          <ComparisonTable>
            <TableHeader>구분</TableHeader>
            <TableHeader>일반 보험</TableHeader>
            <TableHeader style={{ background: theme.colors.secondary.main }}>SafetyPro</TableHeader>
            
            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <TableCell>
                  <strong>{item.category}</strong>
                </TableCell>
                <TableCell>
                  {item.traditional === "✗" ? <XIcon>✗</XIcon> : 
                   item.traditional === "✓" ? <CheckIcon>✓</CheckIcon> : item.traditional}
                </TableCell>
                <TableCell highlight>
                  {item.ours === "✗" ? <XIcon>✗</XIcon> : 
                   item.ours === "✓" ? <CheckIcon>✓</CheckIcon> : 
                   <span className="highlight">{item.ours}</span>}
                </TableCell>
              </React.Fragment>
            ))}
          </ComparisonTable>
        </ComparisonSection>
      </Container>
    </BenefitsContainer>
  );
};

export default BenefitsSection;