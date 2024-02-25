import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const PrettySelect = styled.div`
  position: relative;
  padding: 16px 12px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.gray50};
  border-radius: 8px;
  width: max-content;
  padding-right: 48px;

  &:focus-within {
    outline: 2px solid royalblue;
    outline-offset: 1px;
  }

  &:hover {
    color: ${COLORS.black};
  }
  `;

const HiddenSelect = styled.select`
  appearance: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  width: 24px;
  height: 24px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
  <PrettySelect tabindex={0}>
    {displayedValue}
    <IconWrapper>
      <Icon id="chevron-down" size={24} strokeWidth={2} />
    </IconWrapper>
    <HiddenSelect value={value} onChange={onChange}>
      {children}
    </HiddenSelect>
  </PrettySelect>
  );
};

export default Select;
