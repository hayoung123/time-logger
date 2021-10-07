import styled from 'styled-components';

import { CardSize } from '@components/CardList/style';
import { Button, Input } from '@src/style/common';

export const TodoForm = styled.form`
  ${CardSize}
  input {
    ${Input}
  }
  .todo-form-title {
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .check-add-form {
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    input {
      font-size: 1rem;
      width: 180px;
    }

    & svg {
      cursor: pointer;
      fill: ${({ theme }) => theme.color.blue};
    }
  }

  .check-list > *:not(:last-child) {
    margin-bottom: 0.3rem;
  }

  .todo-form-btns {
    display: flex;
    margin-top: 1rem;
    button {
      ${Button}
    }

    .todo-form-cancel-btn {
      opacity: 0.5;
      background-color: ${({ theme }) => theme.color.lightGray};
      margin-right: 1rem;
    }
    .todo-form-cancel-btn:hover {
      opacity: 1;
    }

    .todo-form-submit-btn {
      color: white;
      opacity: 1;
      background-color: ${({ theme }) => theme.color.blue};
    }
    .todo-form-submit-btn:disabled {
      opacity: 0.5;
    }
  }

  .todo-form-predict {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

export const TodoCheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.color.red};
  }
`;
