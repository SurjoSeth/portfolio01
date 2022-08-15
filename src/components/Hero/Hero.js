import React from 'react';
import {saveAs} from "file-saver";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const saveFile =() =>{
  saveAs(
    "/images/SurjoSeth(CV1).pdf"
  );
};

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      Aspiring to be a part of a reputed organization, working in a responsible position and performing consistently to the best of my skills and abilities in order to learn and grow along with the organization. Currently pursuing B. Tech in Computer Science and Engineering from MCKV Institute of Engineering under Maulana Abul Kalam Azad University of Technology.
      </SectionText>
      <Button onClick={saveFile}>Download my CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;