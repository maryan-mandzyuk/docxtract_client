import type { FC } from 'react';
import React from 'react';

interface IMainButton {
  title: string;
  href?: string;
  type?: 'button' | 'submit';
}
export const MainButton: FC<IMainButton> = ({
  title,
  href,
  type = 'button',
}) => {
  return type === 'button' ? (
    <a href={href} className="btn btn-primary text-white" type={type}>
      {title}
    </a>
  ) : (
    <button className="btn btn-primary text-white" type="submit">
      {title}
    </button>
  );
};
