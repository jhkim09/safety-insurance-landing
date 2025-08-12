export const theme = {
  colors: {
    // 브랜드 컬러 - 안전을 상징하는 블루 계열
    primary: {
      main: '#1e40af', // 신뢰감 있는 짙은 블루
      light: '#3b82f6', // 밝은 블루
      dark: '#1e3a8a', // 매우 진한 블루
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
    },
    
    // 보조 컬러 - 안전을 상징하는 그린
    secondary: {
      main: '#16a34a', // 안전한 느낌의 그린
      light: '#22c55e',
      dark: '#15803d',
      gradient: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)'
    },

    // 경고 및 강조 색상
    accent: {
      orange: '#ea580c', // 주의, 경고
      red: '#dc2626', // 위험, 긴급
      yellow: '#eab308', // 주의 깊은 강조
    },

    // 중성 색상
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },

    // 텍스트 색상
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      muted: '#9ca3af',
      inverse: '#ffffff'
    },

    // 배경 색상
    background: {
      white: '#ffffff',
      light: '#f9fafb',
      section: '#f8fafc'
    },

    // 상태 색상
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    }
  },

  // 타이포그래피
  typography: {
    fontFamily: {
      primary: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading: "'Noto Sans KR', Georgia, serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    }
  },

  // 간격
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem'
  },

  // 그림자
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 4px 12px rgba(0, 0, 0, 0.08)',
    button: '0 2px 8px rgba(30, 64, 175, 0.3)'
  },

  // 경계선 반경
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },

  // 반응형 브레이크포인트
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // 애니메이션
  animation: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)'
    }
  },

  // 컴포넌트 스타일
  components: {
    button: {
      primary: `
        background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 1.125rem;
        box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.4);
        }
        
        &:active {
          transform: translateY(0);
        }
      `,
      secondary: `
        background: white;
        color: #1e40af;
        border: 2px solid #1e40af;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 1.125rem;
        transition: all 0.3s ease;
        cursor: pointer;
        
        &:hover {
          background: #1e40af;
          color: white;
          transform: translateY(-2px);
        }
      `
    },
    
    card: `
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }
    `
  }
};

export type Theme = typeof theme;