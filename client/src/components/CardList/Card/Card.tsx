import { MouseEvent, ReactElement, useState } from 'react';
import * as S from '../style';

import { TodoType } from '@store/todo/todo';
import CheckBox from '@components/Common/CheckBox';
import { minToClockTime, minToTime } from '@utils/date';

interface Props {
  todoData: TodoType;
}

export default function Card({ todoData }: Props): ReactElement {
  const [isCheckOpen, setIsCheckOpen] = useState(false);
  const { id, title, contents, limitTime, proceedTime } = todoData;

  const checkBoxList = contents.map(({ name, status }) => (
    <CheckBox key={name} name={name} status={status} />
  ));

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    console.dir(target);
    console.log(!(target instanceof HTMLElement));
    if (!(target instanceof HTMLElement)) return;

    if (target.tagName === 'INPUT') {
      return;
    }
    setIsCheckOpen((isOpen) => !isOpen);
  };

  return (
    <S.Card onClick={handleCardClick}>
      <div className='card-title'>title</div>
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
