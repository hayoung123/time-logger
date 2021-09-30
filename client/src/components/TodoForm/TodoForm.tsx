import React, { FormEvent, ReactElement, useState } from 'react';
import * as S from './style';
import * as Common from '@components/Common/commonStyle';

import PlusIcon from '@assets/plusIcon.svg';
import { useInput } from '@src/hook/useInput';
import TodoCheckItem from './TodoCheckItem';
import TimeEditForm from '@components/Common/TimeEditForm';

interface Props {}

export default function TodoForm({}: Props): ReactElement {
  const { value: title, handleChange: handleTitleChange } = useInput('');
  const { value: check, setValue: setCheck, handleChange: handleCheckChange } = useInput('');
  const hourCtrl = useInput('');
  const minuteCtrl = useInput('');
  const [checkList, setCheckList] = useState<string[]>([]);
  const handleCheckAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!check) return;
    setCheckList((checkList) => [...checkList, check]);
    setCheck('');
  };

  const checkListElem = checkList.map((checkItem, idx) => (
    <TodoCheckItem key={checkItem + idx} value={checkItem} setCheckList={setCheckList} />
  ));

  return (
    <S.TodoForm title={title}>
      <Common.Input
        placeholder='제목'
        className='todo-form-title'
        value={title}
        onChange={handleTitleChange}
      />
      <form className='check-add-form' onSubmit={handleCheckAddSubmit}>
        <Common.Input
          placeholder='상세항목을 추가하세요.'
          value={check}
          onChange={handleCheckChange}
        />
        <button>
          <PlusIcon />
        </button>
      </form>
      <ul className='check-list'>{checkListElem}</ul>
      <div className='todo-form-predict'>
        <div>예상시간</div>
        <TimeEditForm hourCtrl={hourCtrl} minuteCtrl={minuteCtrl} />
      </div>
      <div className='todo-form-btns'>
        <Common.Button className='todo-form-cancel-btn'>취소</Common.Button>
        <Common.Button className='todo-form-submit-btn'>확인</Common.Button>
      </div>
    </S.TodoForm>
  );
}
