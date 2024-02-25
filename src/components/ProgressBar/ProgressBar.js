/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.div`
  width: 120px;
  height: ${props => props.height + 'px'};
  padding: ${props => props.padding + 'px'};
  background: #80808026;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px #80808059 inset;
`;

const GapWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background: #4747EB;
  width: ${props => props.value + '%'};
  height: 100%;
`;

const sizeProps = {
  'small':  { height: 8 },
  'medium': { height: 12 },
  'large':  { height: 24, padding: 4 }
}

const ProgressBar = ({ value, size }) => {
  const wrapperProps = sizeProps[size];
  return <Wrapper aria-valuenow={value} {...wrapperProps}>
    <GapWrap>
      <VisuallyHidden>value</VisuallyHidden>
      <Bar value={value} />
    </GapWrap>
  </Wrapper>;
  };

export default ProgressBar;
