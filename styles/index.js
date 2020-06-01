import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width: ${(props) => props.theme.bodyWidth};
  padding-top: 4rem;
  margin: 0 auto;
  outline: none;
  scroll-snap-align: start;
`;
