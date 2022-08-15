import React from 'react';
import { DiFirebase, DiJava, DiDjango } from 'react-icons/di'; 
import { SiDjango} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider  />
    <br /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Technologies that I have worked with and learned during my college.</SectionText>
    <List>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            JAVA, Python, C, HTML/CSS, JavaScript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDjango size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Django, Spring Boot.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <ListParagraph>
            Oracle SQL, Firebase, OpenCV.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
