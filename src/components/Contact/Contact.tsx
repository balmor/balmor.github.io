import React from 'react';
import styled from 'styled-components';
import { Translate } from '../Translate/Translate';

const StyledContact = styled.section`
  background: #a7fcff;
  color: black;
  height: 900px;
`;


export const Contact: React.FC = (): JSX.Element => {
  return (
    <StyledContact className="contact">
      <Translate i18nKey="contact" />
    </StyledContact>
  );
};
