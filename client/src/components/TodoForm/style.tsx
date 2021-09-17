import styled from 'styled-components';

import { CardSize } from '@components/CardList/style';

export const TodoForm = styled(CardSize)`
  .check-add-form {
    display: flex;
    align-items: center;

    & > svg {
      fill: ${({ theme }) => theme.color.black};
    }
  }
`;
