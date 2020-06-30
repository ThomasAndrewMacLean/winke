import React, { useState } from 'react';
import { T } from './index';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div>
        {tabs.map((t, index) => (
          <TabButton
            selectedTab={selectedTab === index}
            onClick={() => setSelectedTab(index)}
            key={index}
          >
            <T translationKey={t + 'Title'} />
          </TabButton>
        ))}
      </div>
      <TabText>
        <T translationKey={tabs[selectedTab] + 'Text'} />
      </TabText>
    </div>
  );
};
const TabButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding-right: 1rem;
  padding-bottom: 1rem;
  text-decoration: ${({ selectedTab }) => selectedTab && 'underline'};
`;
const TabText = styled.div`
  margin-top: 3rem;
  padding-bottom: 10rem;

  ul,
  ol {
    margin-top: 3rem;
  }
`;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Tabs;
