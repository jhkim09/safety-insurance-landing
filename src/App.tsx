import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContainer>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </AppContainer>
      </Router>
    </HelmetProvider>
  );
}

export default App;
