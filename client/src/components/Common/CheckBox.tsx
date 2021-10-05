import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  isCheck: boolean;
  handleCheckChange: () => void;
}

//TODO: 체크박스 변환시 인자로 api전송 받아와서 처리
export default function CheckBox({ name, isCheck, handleCheckChange }: Props): ReactElement {
  return (
    <StyledCheckBox>
      <input type='checkbox' checked={isCheck} name={name} onChange={handleCheckChange} />
      <label htmlFor={name}>{name}</label>
    </StyledCheckBox>
  );
}

const StyledCheckBox = styled.div`
  display: flex;
`;
