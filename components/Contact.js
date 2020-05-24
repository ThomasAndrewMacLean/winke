import React from 'react';
import { Section } from '../styles';
import { T } from './index';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="contactTitle" />
      </h2>

      <T translationKey="contactText" />

      <Form>
        <div className="input-wrap">
          <label htmlFor="name">
            <T translationKey="contactName" />
          </label>
          <input required type="text" name="name" id="name" />
        </div>

        <div className="input-wrap">
          <label htmlFor="email">
            <T translationKey="contactEmail" />
          </label>
          <input required type="email" name="email" id="email" />
        </div>

        <div className="input-wrap">
          <label htmlFor="message">
            <T translationKey="contactMessage" />
          </label>
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <input type="submit" value="Send" />
      </Form>
    </Section>
  );
};

const Form = styled.form`
  margin-top: 3rem;
  .input-wrap {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
    color: var(--darker-text);
  }
  textarea,
  input {
    background: #f5f5f5;
    padding-left: 8px;
    font-family: inherit;
    font-size: inherit;
    border: none;
    border-bottom: 2px solid var(--light);
    line-height: 2rem;
    margin-bottom: 1rem;
    resize: none;
  }

  input[type='submit'] {
    cursor: pointer;
    background: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: 2px solid var(--light);
  }
`;

export default ContactSection;
