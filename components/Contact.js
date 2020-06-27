import React from 'react';
import { Section } from '../styles';
import { T, PageTitle } from './index';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <Section>
      <PageTitle titleName="contactTitle"></PageTitle>
      <T translationKey="contactText" />
      <Wrap>
        <Column>
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
        </Column>
        <Column>
          <div>
            <Address>
              <T translationKey="address" />

              <T translationKey="telephone" />

              <T translationKey="email" />
              <T translationKey="btwnummer" />
            </Address>
          </div>

          <T translationKey="mailinglist" />
          <FormMailingList>
            <div className="input-wrap">
              <label htmlFor="emailmailing">
                <T translationKey="mailinglistLabel" />
              </label>
              <input
                required
                type="email"
                name="emailmailing"
                id="emailmailing"
              />
            </div>
            <input type="submit" value="Send" />
          </FormMailingList>
        </Column>
      </Wrap>
    </Section>
  );
};

const Column = styled.div`
  /* outline: 1px solid black; */
  width: 50%;
  &:last-of-type {
    padding-left: 2rem;
  }
`;
const Wrap = styled.div`
  display: flex;
  margin-top: 3rem;

  .input-wrap {
    display: flex;
    flex-direction: column;
  }
  label {
    /* margin-bottom: 10px; */
    color: var(--darker-text);
  }
  textarea,
  input {
    background: #f5f5f5;
    padding-left: 8px;
    font-family: inherit;
    font-size: inherit;
    border: none;
    border: 1px solid var(--light);
    line-height: 2rem;
    margin-bottom: 1rem;
    resize: none;
  }

  input[type='submit'] {
    cursor: pointer;
    /* background: #333; */
    color: #333;
    padding: 0.5rem 2rem;
    border: 1px solid var(--light);
  }
`;

const FormMailingList = styled.form`
  margin-top: 1rem;
`;
const Address = styled.address`
  margin-bottom: 2rem;
`;
const Form = styled.form``;

export default ContactSection;
