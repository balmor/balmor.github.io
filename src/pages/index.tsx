import * as React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { ThemeStore } from '../context/ThemeStore';
import { Theme } from '../components/Theme';

import { i18nConfig } from '../i18n';
import { ToTop } from '../components/ToTop';

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

// markup
const IndexPage: React.FC = (): JSX.Element => {
  return (
    <ThemeStore>
      <Theme>
        <Seo />
        <Header />
        <Content />
        <Footer />
        <ToTop />
      </Theme>
    </ThemeStore>
  );
};

export default IndexPage;
