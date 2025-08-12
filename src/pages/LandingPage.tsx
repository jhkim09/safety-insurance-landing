import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import InsuranceSection from '../components/InsuranceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>안전성평가 및 산업안전보건 보장보험 | ISO45001 인증 전문</title>
        <meta 
          name="description" 
          content="ISO45001 기반 안전성평가와 직원 상해·장애·사망 보장보험을 제공합니다. 산업안전보건 전문 컨설팅으로 사업장의 안전을 책임집니다." 
        />
        <meta 
          name="keywords" 
          content="안전성평가, ISO45001, 산업안전보건, 보장보험, 직원보험, 상해보험, 장애보험, 사망보험, 사업장안전, 안전관리" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="안전성평가 및 산업안전보건 보장보험 | ISO45001 인증 전문" />
        <meta 
          property="og:description" 
          content="ISO45001 기반 안전성평가와 직원 상해·장애·사망 보장보험을 제공합니다. 산업안전보건 전문 컨설팅으로 사업장의 안전을 책임집니다." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="안전성평가 및 산업안전보건 보장보험" />
        <meta 
          name="twitter:description" 
          content="ISO45001 기반 안전성평가와 직원 상해·장애·사망 보장보험을 제공합니다." 
        />
        
        {/* 구조화 데이터 (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "안전성평가 전문기업",
            "description": "ISO45001 기반 안전성평가 및 산업안전보건 보장보험 전문",
            "url": "https://your-domain.com",
            "logo": "https://your-domain.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+82-2-0000-0000",
              "contactType": "customer service",
              "areaServed": "KR",
              "availableLanguage": "Korean"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KR",
              "addressRegion": "서울",
              "addressLocality": "서울시"
            },
            "sameAs": [
              "https://facebook.com/your-page",
              "https://linkedin.com/company/your-company"
            ]
          })}
        </script>

        {/* 서비스 관련 구조화 데이터 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "안전성평가 및 산업안전보건 컨설팅",
            "provider": {
              "@type": "Organization",
              "name": "안전성평가 전문기업"
            },
            "areaServed": "KR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "안전성평가 및 보험 서비스",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ISO45001 인증 컨설팅",
                    "description": "국제 산업안전보건 표준 ISO45001 인증 지원"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "직원 보장보험",
                    "description": "상해, 장애, 사망에 대한 종합 보장보험"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <InsuranceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;