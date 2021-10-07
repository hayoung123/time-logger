import React, { FormEvent, MouseEvent, ReactElement, useEffect, useState } from 'react';
import * as S from './style';
import { useSetRecoilState } from 'recoil';

import PlusIcon from '@assets/plusIcon.svg';

import TodoCheckItem from './TodoCheckItem';
import TimeEditor from '@components/Common/TimeEditor';

import { useInput } from '@src/hook/useInput';
import { todoListState, TodoType } from '@store/todo/todo';
import { hourValidate, minuteValidate } from '@utils/validate/time';
import { stringTimeToMinute } from '@utils/date';

export interface Props {
  closeAddForm: () => void;
}

export default function TodoForm({ closeAddForm }: Props): ReactElement {
  const setTodoList = useSetRecoilState(todoListState);

  const { value: title, setValue: setTitle, handleChange: handleTitleChange } = useInput('');
  const { value: check, setValue: setCheck, handleChange: handleCheckChange } = useInput('');
  const hourCtrl = useInput('', hourValidate);
  const minuteCtrl = useInput('', minuteValidate);
  const [checkList, setCheckList] = useState<string[]>([]);

  const handleCheckAddSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!check) return;
    setCheckList((checkList) => [...checkList, check]);
    setCheck('');
  };

  const handleTodoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <S.TodoForm onSubmit={handleTodoSubmit}>
      <label htmlFor='todo-title'></label>
      <input
        name='todo-title'
        placeholder='제목'
        className='todo-form-title'
        value={title}
        onChange={handleTitleChange}
      />
      <div className='check-add-form'>
        <label htmlFor='todo-check-item'></label>
        <input
          name='todo-check-item'
          placeholder='상세항목을 추가하세요.'
          value={check}
          onChange={handleCheckChange}
        />
        <button onClick={handleCheckAddSubmit}>
          <PlusIcon />
        </button>
      </div>
      <ul className='check-list'>{checkListElem}</ul>
      <div className='todo-form-predict'>
        <div>예상시간</div>
        <TimeEditor hourCtrl={hourCtrl} minuteCtrl={minuteCtrl} />
      </div>
      <div className='todo-form-btns'>
        <button type='button' className='todo-form-cancel-btn' onClick={closeAddForm}>
          취소
        </button>
        <button type='submit' className='todo-form-submit-btn' disabled={!title}>
          확인
        </button>
      </div>
    </S.TodoForm>
  );
}

//TODO: formToJSON
//https://ui.toast.com/weekly-pick/ko_20210630
