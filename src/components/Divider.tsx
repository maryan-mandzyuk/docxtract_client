import type { FC } from 'react';
import React from 'react';

interface IDivider {
  id?: string;
}
export const Divider: FC<IDivider> = ({ id }) => {
  return (
    <div id={id} className="divider before:bg-gray-400 after:bg-gray-400" />
  );
};
