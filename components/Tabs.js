import React, { useState } from 'react';
import { T } from './index';
import styled from 'styled-components';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div>
        {tabs.map((t, index) => (
          <TabButton
            selectedTab={selectedTab === index}
            onClick={() => setSelectedTab(index)}
            key={t.title}
          >
            <T translationKey={t + 'Title'} />
          </TabButton>
        ))}
      </div>
      <div className="text">
        <T translationKey={tabs[selectedTab] + 'Text'} />
      </div>
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
export default Tabs;
