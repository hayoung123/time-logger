import { atom } from 'recoil';

type TodoListType = {
  title: string;
  contents: string[];
  limitTime: number;
  proceedTime: {
    start: null | Date;
    end: null | Date;
  };
};

const mockTodoList: TodoListType[] = [
  {
    title: 'test1',
    contents: ['test1', 'test2', 'test3'],
    limitTime: 60,
    proceedTime: {
      start: null,
      end: null,
    },
  },
  {
    title: 'test1',
    contents: ['test1', 'test2', 'test3'],
    limitTime: 60,
    proceedTime: {
      start: new Date(),
      end: null,
    },
  },
];

export const todoListState = atom<TodoListType[]>({
  key: '투두 리스트',
  default: mockTodoList,
});
