import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import CheckBox from '@components/Common/CheckBox';

import { todoListState } from '@store/todo/todo';

interface Props {
  todoId: number;
  name: string;
  status: boolean;
}

//TODO: 체크박스 변환시 인자로 api전송 받아와서 처리
export default function CardCheckBox({ todoId, name, status }: Props): ReactElement {
  const setTodoList = useSetRecoilState(todoListState);

  const [isCheck, setIsCheck] = useState(status);

  // TODO: check에 id만들자 전체적으로 싹 수정 필요 예정 (테스트 코드하고 수정테스트)

  const handleCheckChange = () => {
    setIsCheck((check) => !check);
    setTodoList((todoList) => {
      const newTodoList = [...todoList];
      for (const todo of newTodoList) {
        if (todo.id !== todoId) continue;
        todo.contents = todo.contents.map((checkItem) => {
          if (checkItem.name !== name) return checkItem;
          const newCheckItem = { ...checkItem };
          newCheckItem.status = !isCheck;
          return newCheckItem;
        });
      }
      return newTodoList;
    });
  };

  return <CheckBox name={name} isCheck={isCheck} handleCheckChange={handleCheckChange} />;
}

const StyledCheckBox = styled.div`
  display: flex;
`;
