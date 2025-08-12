import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { theme } from '../styles/theme';

const ContactContainer = styled.section`
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.gray[100]};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.colors.primary.gradient};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.p`
  color: ${theme.colors.text.secondary};
  margin: 0;
  font-size: 0.875rem;
`;

const FormSection = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: ${theme.shadows.card};
  border: 1px solid ${theme.colors.gray[100]};
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

const FormDescription = styled.p`
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${theme.colors.text.primary};
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
  
  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
`;

const Select = styled.select`
  padding: 0.875rem 1rem;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
  
  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${theme.colors.primary.main};
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.4;
`;

const SubmitButton = styled.button<{ isLoading?: boolean }>`
  ${theme.components.button.primary}
  padding: 1rem 2rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: ${props => props.isLoading ? 0.7 : 1};
  cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
`;

const SuccessMessage = styled(motion.div)`
  background: ${theme.colors.secondary.main}15;
  border: 1px solid ${theme.colors.secondary.main}40;
  color: ${theme.colors.secondary.main};
  padding: 1rem 1.5rem;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  employees: string;
  service: string;
  message: string;
  privacy: boolean;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    employees: '',
    service: '',
    message: '',
    privacy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: HiPhone,
      label: "전화 상담",
      value: "02-0000-0000",
      description: "평일 09:00 - 18:00"
    },
    {
      icon: HiMail,
      label: "이메일 문의",
      value: "info@safetypro.com",
      description: "24시간 접수 가능"
    },
    {
      icon: HiLocationMarker,
      label: "오시는 길",
      value: "서울시 강남구 테헤란로 123",
      description: "2호선 강남역 5번 출구"
    },
    {
      icon: HiClock,
      label: "운영 시간",
      value: "평일 09:00 - 18:00",
      description: "토/일/공휴일 휴무"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('폼 제출 시작', formData);
    
    // 폼 검증
    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.privacy) {
      alert('필수 항목을 모두 입력하고 개인정보 동의를 체크해주세요.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // EmailJS 서비스 설정
      const serviceId = 'service_hfco0vj';
      const templateId = 'template_q17cb1c';  
      const publicKey = 'M9SDfmVeOZw9z_PvM';
      
      const templateParams = {
        to_name: '안전성평가 보장보험',
        from_name: formData.name,
        from_company: formData.company,
        from_phone: formData.phone,
        from_email: formData.email,
        employees_count: formData.employees,
        service_type: formData.service,
        message: formData.message,
        submit_time: new Date().toLocaleString('ko-KR')
      };

      console.log('EmailJS 전송 시도:', templateParams);
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS 전송 성공:', result);
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          employees: '',
          service: '',
          message: '',
          privacy: false
        });
      }, 3000);
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setIsLoading(false);
      // 에러 상세 정보를 브라우저 알림으로 표시
      alert(`이메일 전송 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
    }
  };

  return (
    <ContactContainer id="contact">
      <Container>
        <SectionHeader>
          <Badge>Contact</Badge>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            무료 상담 신청
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            귀하의 사업장에 맞는 최적의 안전관리 솔루션을 제안해드립니다.
            전문가와 무료 상담을 받아보세요.
          </SectionDescription>
        </SectionHeader>

        <ContactWrapper>
          <ContactInfo>
            <ContactTitle>연락처 정보</ContactTitle>
            <ContactDescription>
              언제든지 편리한 방법으로 연락주세요. 
              전문 상담사가 신속하고 정확한 답변을 드리겠습니다.
            </ContactDescription>
            
            <ContactList>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ContactIcon>
                    <item.icon />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>{item.label}</ContactLabel>
                    <ContactValue>{item.value}</ContactValue>
                    <ContactValue style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      {item.description}
                    </ContactValue>
                  </ContactDetails>
                </ContactItem>
              ))}
            </ContactList>
          </ContactInfo>

          <FormSection
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FormTitle>상담 신청서</FormTitle>
            <FormDescription>
              아래 정보를 입력해주시면 담당자가 빠른 시일 내에 연락드리겠습니다.
            </FormDescription>

            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <HiCheckCircle />
                상담 신청이 완료되었습니다. 곧 연락드리겠습니다.
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">담당자명 *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="이름을 입력해주세요"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="company">회사명 *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="회사명을 입력해주세요"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">이메일 *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="employees">직원 수</Label>
                    <Select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-9">1-9명</option>
                      <option value="10-49">10-49명</option>
                      <option value="50-99">50-99명</option>
                      <option value="100-299">100-299명</option>
                      <option value="300+">300명 이상</option>
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="service">관심 서비스</Label>
                    <Select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">선택해주세요</option>
                      <option value="iso45001">ISO45001 인증</option>
                      <option value="safety">안전성 평가</option>
                      <option value="insurance">직원 보장보험</option>
                      <option value="education">안전교육</option>
                      <option value="all">종합 서비스</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">문의 내용</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="궁금한 사항이나 상세한 요구사항을 입력해주세요"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <CheckboxGroup>
                  <Checkbox
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                  />
                  <CheckboxLabel htmlFor="privacy">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                  </CheckboxLabel>
                </CheckboxGroup>

                <SubmitButton type="submit" isLoading={isLoading}>
                  {isLoading ? '전송 중...' : '상담 신청하기'}
                </SubmitButton>
                
              </Form>
            )}
          </FormSection>
        </ContactWrapper>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;