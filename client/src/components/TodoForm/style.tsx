import styled from 'styled-components';

import { CardSize } from '@components/CardList/style';

export const TodoForm = styled(CardSize)`
  input: ${CardSize};
  .check-add-form {
    display: flex;
    align-items: center;

    & > svg {
      fill: ${({ theme }) => theme.color.black};
    }
  }
`;

export const TodoCheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.color.black};
  }
  svg:hover {
    fill: ${({ theme }) => theme.color.red};
  }
`;
