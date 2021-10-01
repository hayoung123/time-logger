import React, { ReactElement, FocusEvent, useState } from 'react';
import styled, { css } from 'styled-components';

import { InputHookType } from '@src/hook/useInput';
import { StyledCenter } from '@src/style/common';

interface Props {
  hourCtrl: InputHookType;
  minuteCtrl: InputHookType;
}

export default function TimeEditForm({ hourCtrl, minuteCtrl }: Props): ReactElement {
  const { value: hour, setValue: setHour, handleChange: handleHourChange } = hourCtrl;
  const { value: minute, setValue: setMinute, handleChange: handleMinuteChange } = minuteCtrl;
  const [isEditHour, setIsEditHour] = useState(false);
  const [isEditMinute, setIsEditMinute] = useState(false);

  const handleHourClick = () => setIsEditHour(true);
  const handleHourBlur = (e: FocusEvent<HTMLInputElement>) => {
    setHour(e.target.value);
    setIsEditHour(false);
  };

  const handleMinuteClick = () => setIsEditMinute(true);
  const handleMinuteBlur = (e: FocusEvent<HTMLInputElement>) => {
    setMinute(e.target.value);
    setIsEditMinute(false);
  };

  return (
    <StyledTimeEditForm>
      {isEditHour ? (
        <StyledTimeInput
          type='number'
          value={hour}
          onChange={handleHourChange}
          onBlur={handleHourBlur}
          autoFocus
        />
      ) : (
        <StyledTimeDiv onClick={handleHourClick}>{hour || '00'}</StyledTimeDiv>
      )}
      <div className='asdasd'>:</div>
      {isEditMinute ? (
        <StyledTimeInput
          type='number'
          value={minute}
          onChange={handleMinuteChange}
          onBlur={handleMinuteBlur}
          autoFocus
        />
      ) : (
        <StyledTimeDiv onClick={handleMinuteClick}>{minute || '00'}</StyledTimeDiv>
      )}
    </StyledTimeEditForm>
  );
}

const StyledTimeSize = css`
  width: 30px;
  height: 21px;
`;

const StyledTimeEditForm = styled.div`
  display: flex;
  & > div {
    ${StyledCenter}
  }
  gap: 4px;
`;

const StyledTimeDiv = styled.div`
  ${StyledTimeSize}
`;
const StyledTimeInput = styled.input`
  ${StyledTimeSize}
  border: none;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
  input::placeholder {
    text-align: center;
    font-size: 0.875rem;
  }
`;
