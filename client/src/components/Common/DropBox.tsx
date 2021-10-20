import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

export default function DropBox({ children, className }: Props): ReactElement {
  return <StyledDropBox className={className}>{children}</StyledDropBox>;
}

const StyledDropBox = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  border: ${({ theme }) => `1px solid ${theme.color.lightGray}`};
  font-size: 1rem;
  font-weight: 400;
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  & > *:hover {
    background-color: #e0e0e0;
  }
`;
