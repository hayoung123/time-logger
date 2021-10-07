import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import AllTheProviders from '@utils/test/AllTheProviders';
import TodoForm, { Props as TodoFormType } from './TodoForm';
import TodoCheckItem, { Props as TodoCheckItemType } from './TodoCheckItem';

function renderTodoForm(props?: Partial<TodoFormType>) {
  const closeAddForm = jest.fn();

  const result = render(<TodoForm closeAddForm={closeAddForm} {...props} />, {
    wrapper: AllTheProviders,
  });

  const TitleInput = () => result.getByPlaceholderText('제목');
  const CheckItemInput = () => result.getByPlaceholderText('상세항목을 추가하세요.');
  const CheckAddButton = () => result.container.querySelector('.check-add-form > button');
  const CancelButton = () => result.getByText('취소');
  const SubmitButton = () => result.getByText('확인');
  const CheckList = () => result.container.querySelector('.check-list');

  return {
    TitleInput,
    CheckItemInput,
    CheckAddButton,
    CancelButton,
    SubmitButton,
    CheckList,
  };
}

describe('<TodoForm>', () => {
  it('기본 렌더링 테스트', () => {
    const { TitleInput, CheckAddButton, CancelButton, SubmitButton, CheckList } = renderTodoForm();
    expect(TitleInput()).toBeInTheDocument();
    expect(CheckAddButton()).toBeInTheDocument();
    expect(CancelButton()).toBeInTheDocument();
    expect(SubmitButton()).toBeInTheDocument();
    expect(CheckList()).toBeInTheDocument();
  });
});
