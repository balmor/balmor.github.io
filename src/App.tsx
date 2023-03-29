import * as React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeStore } from './context/ThemeStore';
import { ImageStore } from './context/ImageStore';
import { Theme } from './components/Theme';

import { i18nConfig } from './i18n';
import { ToTop } from './components/ToTop';
import { Content } from './components/Content';
import { Preloader } from './components/Preloader';

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeStore>
      <Theme>
        <ImageStore>
          <Preloader />
          <Header />
          <Content />
          <Footer />
          <ToTop />
        </ImageStore>
      </Theme>
    </ThemeStore>
  );
};

export default App;
