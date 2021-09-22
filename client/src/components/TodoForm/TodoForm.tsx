import React, { FormEvent, ReactElement, useState } from 'react';
import * as S from './style';
import * as Common from '@components/Common/commonStyle';

import PlusIcon from '@assets/plusIcon.svg';
import { useInput } from '@src/hook/useInput';
import TodoCheckItem from './TodoCheckItem';

interface Props {}

export default function TodoForm({}: Props): ReactElement {
  const { value: title, handleChange: handleTitleChange } = useInput('');
  const { value: check, setValue: setCheck, handleChange: handleCheckChange } = useInput('');
  const [checkList, setCheckList] = useState<string[]>(['asfd', 'asdfsdf']);
  const handleCheckAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(check);
    setCheckList((checkList) => [...checkList, check]);
    setCheck('');
  };

  const checkListElem = checkList.map((checkItem, idx) => (
    <TodoCheckItem key={checkItem + idx} value={checkItem} setCheckList={setCheckList} />
  ));

  return (
    <S.TodoForm>
      <Common.Input placeholder='제목' value={title} onChange={handleTitleChange} />
      <form className='check-add-form' onSubmit={handleCheckAddSubmit}>
        <Common.Input placeholder='할 일을 추가하세요' value={check} onChange={handleCheckChange} />
        <button>
          <PlusIcon />
        </button>
      </form>
      <ul className='check-list'>{checkListElem}</ul>
      <div className='todo-form-btns'>
        <Common.Button>취소</Common.Button>
        <Common.Button>확인</Common.Button>
      </div>
    </S.TodoForm>
  );
}
