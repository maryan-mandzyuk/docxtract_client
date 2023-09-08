import type { FC } from 'react';
import React from 'react';

interface IFeature {
  title: string;
  description: string;
  icon: string;
  alt: string;
}
export const Feature: FC<IFeature> = ({ title, description, icon, alt }) => {
  return (
    <div className="relative mt-5 max-w-lg">
      <div className=" absolute left-0 top-0">
        <img src={icon} alt={alt} className=" h-14 w-14" />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <p className=" pt-2  text-center text-lg">{description}</p>
      </div>
    </div>
  );
};
