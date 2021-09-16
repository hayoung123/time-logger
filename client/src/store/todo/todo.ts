import { atom } from 'recoil';

export type TodoType = {
  id: number;
  title: string;
  contents: { name: string; status: boolean }[];
  limitTime: number;
  proceedTime: null | {
    start: null | number;
    end: null | number;
  };
};

const mockTodoList: TodoType[] = [
  {
    id: 1,
    title: 'test1',
    contents: [
      { name: 'test1', status: false },
      { name: 'test2', status: true },
      { name: 'test3', status: false },
    ],
    limitTime: 60,
    proceedTime: null,
  },
  {
    id: 11,
    title: 'test1',
    contents: [
      { name: 'test1', status: false },
      { name: 'test2', status: true },
      { name: 'test3', status: false },
    ],
    limitTime: 60,
    proceedTime: null,
  },
  {
    id: 12,
    title: 'test1',
    contents: [
      { name: 'test1', status: false },
      { name: 'test2', status: true },
      { name: 'test3', status: false },
    ],
    limitTime: 60,
    proceedTime: {
      start: 120,
      end: null,
    },
  },
  {
    id: 2,
    title: 'test1',
    contents: [
      { name: 'test1', status: false },
      { name: 'test2', status: false },
      { name: 'test3', status: false },
    ],
    limitTime: 60,
    proceedTime: {
      start: 120,
      end: 130,
    },
  },
];

export const todoListState = atom<TodoType[]>({
  key: '투두 리스트',
  default: mockTodoList,
});
