import React, { useState } from 'react';
import { Section } from '../../styles';
import { T, PageTitle } from '../index';
import styled from 'styled-components';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [emailMailing, setEmailMailing] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    fetch('https://europe-west1-winke-281620.cloudfunctions.net/function-1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  };

  const addMailing = (e) => {
    e.preventDefault();
    fetch(
      'https://us-central1-winke-281620.cloudfunctions.net/addToMailingList',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailMailing }),
      }
    );
  };
  return (
    <Section>
      <PageTitle titleName="contactTitle"></PageTitle>
      <T translationKey="contactText" />
      <Wrap>
        <Column>
          <Form onSubmit={sendMessage}>
            <div className="input-wrap">
              <label htmlFor="name">
                <T translationKey="contactName" />
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="input-wrap">
              <label htmlFor="email">
                <T translationKey="contactEmail" />
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="input-wrap">
              <label htmlFor="message">
                <T translationKey="contactMessage" />
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          <FormMailingList onSubmit={addMailing}>
            <div className="input-wrap">
              <label htmlFor="emailmailing">
                <T translationKey="mailinglistLabel" />
              </label>
              <input
                value={emailMailing}
                onChange={(e) => setEmailMailing(e.target.value)}
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
    padding-left: 6rem;
  }

  @media (max-width: ${(props) => props.theme.small}) {
    width: 100%;
    &:last-of-type {
      padding-left: 0;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  margin-top: 3rem;

  @media (max-width: ${(props) => props.theme.small}) {
    flex-direction: column;
    margin-bottom: 4rem;
  }

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
    border-bottom: 1px solid var(--light);
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
  /* NEEDS TO BE 7PX SO IT ALIGNS WITH THE MESSAGE TEXTAREA */
  margin-top: 7px;
`;
const Address = styled.address`
  margin-bottom: 2rem;
  font-style: normal;
`;
const Form = styled.form``;

export default ContactSection;
