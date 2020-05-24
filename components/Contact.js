import React from 'react';
import { Section } from '../styles';
import { T } from './index';

const ContactSection = () => {
  return (
    <Section id="contact">
      <h2>
        <T translationKey="contactTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default ContactSection;
