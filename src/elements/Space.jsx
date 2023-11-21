import React from 'react';
import styled from 'styled-components';

const Space = props => {
  return <StContainer {...props}>{props.children}</StContainer>;
};

export default Space;

const StContainer = styled.div`
  width: 100%;
  padding: ${({ pd }) => pd};
  margin: ${({ mg }) => mg};
`;
