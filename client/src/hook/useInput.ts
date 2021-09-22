import { Dispatch, SetStateAction, useState } from 'react';

export type InputHookType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleChange: ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
};

export function useInput(initState = ''): InputHookType {
  const [value, setValue] = useState<string>(initState);
  const handleChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    setValue(target.value);
  };

  return { value, setValue, handleChange };
}
