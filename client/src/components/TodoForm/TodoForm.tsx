import React, { FormEvent, ReactElement, useState } from 'react';
import * as S from './style';
import * as Common from '@components/Common/commonStyle';

import PlusIcon from '@assets/plusIcon.svg';

interface Props {}

export default function TodoForm({}: Props): ReactElement {
  const [title, setTitle] = useState('');
  const [check, setCheck] = useState('');

  const handleCheckAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCheck('');
  };

  return (
    <S.TodoForm>
      <Common.Input placeholder='제목'></Common.Input>
      <form className='check-add-form' onSubmit={handleCheckAddSubmit}>
        <Common.Input placeholder='할 일을 추가하세요'></Common.Input>
        <button>
          <PlusIcon />
        </button>
      </form>
      <div className='check-list'></div>
      <div className='todo-form-btns'>
        <Common.Button>취소</Common.Button>
        <Common.Button>확인</Common.Button>
      </div>
    </S.TodoForm>
  );
}
