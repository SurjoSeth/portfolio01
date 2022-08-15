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
          Hello, I am Surjo Seth. <br />
          Welcome to my personal portfolio.
      </SectionText>
      <Button onClick={saveFile}>Download my CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;
