import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import * as S from './style';

import XIcon from '@assets/xIcon.svg';

export interface Props {
  value: string;
  setCheckList: Dispatch<SetStateAction<string[]>>;
}

export default function TodoCheckItem({ value, setCheckList }: Props): ReactElement {
  const handleDeleteClick = () => {
    setCheckList((checkList) => {
      const valueIdx = checkList.indexOf(value);
      const newCheckList = [...checkList];
      newCheckList.splice(valueIdx, 1);
      return newCheckList;
    });
  };
  return (
    <S.TodoCheckItem>
      <div>{value}</div>
      <XIcon onClick={handleDeleteClick} />
    </S.TodoCheckItem>
  );
}
