import styled, { css } from 'styled-components';

export const StyledCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 134px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  &::plactholder {
    color: ${({ theme }) => theme.color.lightGray};
  }

  &:focus {
    outline: none;
  }
`;
