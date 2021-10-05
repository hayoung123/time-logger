import CardCheckBox from './CardCheckBox';
import { render } from '@testing-library/react';

const mockProps = {
  todoId: 1,
  name: '테스트 체크 박스',
  status: true,
};

describe('CardCheckBox', () => {
  it('렌더링 레스트', () => {
    const { getByText } = render(<CardCheckBox {...mockProps} />);
    const text = getByText('테스트 체크 박스');
    expect(text).toBeInTheDocument();
  });
});
