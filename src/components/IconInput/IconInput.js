import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;  
  pointer-events: none;
  width: var(--size);
  height: var(--size);
`

const MyInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${COLORS.black};
  padding: 8px;
  padding-left: 36px;
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 4px;

  &:hover { color: ${COLORS.black} }
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const SIZES = {
  'small': {px: 16},
  'large': {px: 24}
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const trueSize = SIZES[size].px;
  
  return (
    <InputWrapper>
      <MyInput
        placeholder={placeholder} 
        style={{
          width: width + 'px',
        fontSize: (trueSize / 16) + 'rem',
        paddingLeft: (trueSize * 1.5) + 'px'
    }} />
      <IconWrapper style={{'--size': trueSize + 'px'}}>
        <Icon id={icon} size={trueSize} />
      </IconWrapper>
    </InputWrapper>
  );
};

export default IconInput;
