import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 80%;
  @media (min-width: ${(props) => props.theme.medium}) {
    max-width: ${(props) => props.theme.bodyWidth};
  }
  padding-top: 4rem;
  margin: 0 auto;
  outline: none;
  scroll-snap-align: start;
`;
