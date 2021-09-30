import { InputHookType } from '@src/hook/useInput';
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface Props {
  hourCtrl: InputHookType;
  minuteCtrl: InputHookType;
}

export default function TimeEditForm({ hourCtrl, minuteCtrl }: Props): ReactElement {
  const [isEditHour, setIsEditHour] = useState(false);
  const [isEditMinute, setIsEditMinute] = useState(false);

  return (
    <StyledTimeEditForm>
      {isEditHour ? <input type='number' /> : <div>00</div>}
      <div>:</div>
      {isEditMinute ? <input type='number' /> : <div>00</div>}
    </StyledTimeEditForm>
  );
}

const StyledTimeEditForm = styled.div``;
