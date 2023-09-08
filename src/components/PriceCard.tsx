import type { FC } from 'react';
import React from 'react';

import { MainButton } from './MainButton';

interface IPriceCard {
  name: string;
  description: string;
  featureList: string[];
  buttonTitle: string;
  price: string;
  fakePrice?: string;
}
export const PriceCard: FC<IPriceCard> = ({
  name,
  description,
  buttonTitle,
  price,
  featureList,
  fakePrice,
}) => {
  const featureListElements = featureList.map((feature) => {
    return (
      <div className="flex items-start pt-5" key={`${feature}`}>
        <img
          src="/assets/images/checked.png"
          alt="Zapier Icon"
          width={30}
          height={30}
        />
        <p className="m-0">{feature}</p>
      </div>
    );
  });

  return (
    <div className="card mb-10 h-full w-80 border border-gray-500 bg-gray-200 pb-10 lg:pb-0 ">
      <div className="card-body items-center pb-0 text-center">
        <h2 className="card-title text-start">{name}</h2>
        <h1 className="font-bold">
          {fakePrice && <s>{fakePrice}</s>} {price}
          <span className="font-normal"> / month</span>
        </h1>
        <div className="card-actions pt-5">
          <MainButton href="#waitlist" title={buttonTitle} />
        </div>
        <p className="h-20 grow-0 font-light">{description}</p>
        <div className="divider" />
        <div className="m-0 flex flex-col">{featureListElements}</div>
      </div>
    </div>
  );
};
