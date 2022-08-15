import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <linkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 6290852887">+91 6290852887</LinkItem>
        </linkColumn>
        <linkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: 0123.surjo@gmail.com">0123.surjo@gmail.com</LinkItem>
        </linkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
