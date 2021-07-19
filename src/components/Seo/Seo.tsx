import React from 'react';
import { Helmet } from 'react-helmet';
import favicon16 from '../../images/favicon-16x16.png'
import favicon32 from '../../images/favicon-32x32.png'

export const Seo: React.FC = (): JSX.Element => (
  <Helmet>
    <html lang="pl" />
    <title>Damian Duda</title>

    <meta
      name="description"
      content="Damian Duda - Frontend Developer from Poland"
    />
    <meta name="author" content="Damian Duda" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
    <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
  </Helmet>
);
