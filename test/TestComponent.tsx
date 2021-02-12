import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { useSafeState } from '../src';

export const TIME_TO_UPDATE = 200;

export const TestComponent: FC = (): ReactElement<any, any> | null => {
  const [value, setValue] = useSafeState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(Math.random());
    }, TIME_TO_UPDATE);
  });

  return <p>{value}</p>;
};
