import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Secured 77% overall in TCS NQT July 2022'},
  { number: 2, text: 'Cleared InfyTQ Advantage Round', },
  { number: 3, text: 'Organised intra college Coding Competition', },
  { number: 4, text: 'Participated in SIH 2022', }
];

const Acomplishments = () => (
  <Section id='accomp'>
    <SectionTitle>Acievements & Extra Curricular Activities</SectionTitle>
    <Boxes>
      {data.map((card,index) =>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
