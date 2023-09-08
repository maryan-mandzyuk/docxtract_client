import Link from 'next/link';
import type { ReactNode } from 'react';

import { MainButton } from '@/components/MainButton';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-gray-200 px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-1  md:mx-16">
      <header className="flex items-center justify-around pt-10">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
        </div>
        <nav>
          <ul className="flex flex-wrap  text-xl">
            <div className="hidden flex-wrap text-xl sm:flex">
              <li className="mr-6 flex items-center">
                <Link
                  href="#price"
                  className="border-none text-gray-800 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
            </div>

            <li className="mr-6">
              <MainButton href="#waitlist" title="Join Waitlist" />
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
