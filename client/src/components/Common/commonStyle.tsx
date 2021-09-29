import styled from 'styled-components';

export const Button = styled.button`
  width: 134px;
  height: 40px;
  border-radius: 6px;
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
