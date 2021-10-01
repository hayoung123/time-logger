import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import * as S from './style';
import * as Common from '@src/style/common';
import { useSetRecoilState } from 'recoil';

import PlusIcon from '@assets/plusIcon.svg';

import TodoCheckItem from './TodoCheckItem';
import TimeEditForm from '@components/Common/TimeEditForm';

import { useInput } from '@src/hook/useInput';
import { todoListState, TodoType } from '@store/todo/todo';
import { hourValidate, minuteValidate } from '@utils/validate/time';
import { stringTimeToMinute } from '@utils/date';

interface Props {
  closeAddForm: () => void;
}

export default function TodoForm({ closeAddForm }: Props): ReactElement {
  const setTodoList = useSetRecoilState(todoListState);

  const { value: title, setValue: setTitle, handleChange: handleTitleChange } = useInput('');
  const { value: check, setValue: setCheck, handleChange: handleCheckChange } = useInput('');
  const hourCtrl = useInput('', hourValidate);
  const minuteCtrl = useInput('', minuteValidate);
  const [checkList, setCheckList] = useState<string[]>([]);

  const handleCheckAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!check) return;
    setCheckList((checkList) => [...checkList, check]);
    setCheck('');
  };

  const handleTodoSubmit = () => {
    if (!title) return;
    const newTodo: TodoType = {
      id: Date.now(),
      title,
      contents: checkList.map((check) => ({ name: check, status: false })),
      limitTime: stringTimeToMinute(hourCtrl.value, minuteCtrl.value),
      proceedTime: null,
    };
    setTodoList((todoList) => [...todoList, newTodo]);
    closeAddForm();
  };

  useEffect(() => {
    const clearTodoForm = () => {
      setTitle('');
      setCheck('');
      hourCtrl.setValue('');
      minuteCtrl.setValue('');
      setCheckList([]);
    };
    clearTodoForm();
  }, []);

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
        <Common.Button className='todo-form-cancel-btn' onClick={closeAddForm}>
          취소
        </Common.Button>
        <Common.Button className='todo-form-submit-btn' onClick={handleTodoSubmit}>
          확인
        </Common.Button>
      </div>
    </S.TodoForm>
  );
}
