import { MouseEvent, ReactElement, useState } from 'react';
import * as S from '../style';

import DotsIcon from '@assets/dotsIcon.svg';

import { TodoType } from '@store/todo/todo';
import CardCheckBox from '@components/CardList/Card/CardCheckBox';
import { minToClockTime, minToTime } from '@utils/date';
import DropBox from '@components/Common/DropBox';

interface Props {
  todoData: TodoType;
}

export default function Card({ todoData }: Props): ReactElement {
  const [isCheckOpen, setIsCheckOpen] = useState(false);
  const { id, title, contents, limitTime, proceedTime } = todoData;

  const checkBoxList = contents.map(({ name, status }) => (
    <CardCheckBox key={name} todoId={id} name={name} status={status} />
  ));

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.closest('.card-check-list')) {
      return;
    }
    setIsCheckOpen((isOpen) => !isOpen);
  };

  return (
    <S.Card onClick={handleCardClick}>
      <div className='card-header'>
        <div className='card-title'>{title}</div>
        <div className='card-menu'>
          <DotsIcon />
          <DropBox className='card-menu-dropbox'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </DropBox>
        </div>
      </div>
      {isCheckOpen && <div className='card-check-list'>{checkBoxList}</div>}
      <div className='card-expect-time'>
        <div>예상시간</div>
        <div>{minToTime(limitTime)}</div>
      </div>
      {proceedTime && (
        <div className='card-proceed-time'>
          <div>진행시간</div>
          <div>
            {minToClockTime(proceedTime.start)} ~ {minToClockTime(proceedTime.end)}
          </div>
        </div>
      )}
    </S.Card>
  );
}
