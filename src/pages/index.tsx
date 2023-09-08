import { Divider } from '@/components/Divider';
import { Feature } from '@/components/Feature';
import { MainButton } from '@/components/MainButton';
import { PriceCard } from '@/components/PriceCard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <main className="h-full">
        <section>
          <div className="hero min-h-[85vh] bg-gray-200">
            <div className="hero-content flex-col justify-around text-center lg:flex-row">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold">
                  Automate Your PDF Data Extraction
                </h1>
                {/* <h1 className="text-5xl font-bold"></h1> */}
                {/* <p className="m-0 p-0">Automate your document workflow</p> */}
                <p className="py-6">
                  Introducing {AppConfig.title}, the Easy to Use Tool for
                  Seamless Data Extraction from PDF
                </p>

                <MainButton href="#waitlist" title="Join Waitlist" />
              </div>
              <img
                className="h-full w-full object-cover object-center"
                src="/assets/images/pdf2other.png"
                alt="PDF to CSV, JSON, EXCEL"
              />
            </div>
          </div>
        </section>
        <Divider />

        <section className="pt-20">
          <div className="hero bg-gray-200">
            <div className="hero-content mb-20 h-full w-full flex-col items-center justify-around px-0 text-center lg:flex-row">
              <div className=" grid h-full max-w-xs grid-flow-col grid-rows-3">
                <h1 className="text-4xl font-bold">
                  No Manual Data Extraction
                </h1>
                <p className="row-span-2">
                  {AppConfig.title} is your trusted companion for automating
                  your document workflow. With its advanced technology, this
                  powerful tool extracts data from PDF files with unparalleled
                  precision and speed, saving you valuable time and resources.
                </p>
              </div>
              <div className="flex h-full flex-col justify-around">
                <Feature
                  title="Easy To Use"
                  description="No complex tools and configuration needed."
                  icon="/assets/images/icons8-easy-50.png"
                  alt="Easy to use icon"
                />
                <Feature
                  title="Fast"
                  description="Get the information you need in seconds."
                  icon="/assets/images/icons8-fast-50.png"
                  alt="Fast icon"
                />
                <Feature
                  title="Accurate"
                  description=" Expect highly accurate extraction results, minimizing errors and ensuring reliable data for informed decision-making"
                  icon="/assets/images/icons8-goal-50.png"
                  alt="accuracy icon"
                />
              </div>
            </div>
          </div>
        </section>
        <Divider />

        <section className="flex flex-col justify-evenly py-20 lg:flex-row">
          <div className="flex flex-col items-center justify-center pb-10 lg:pb-0">
            <img
              src="/assets/images/zapier-icon-svgrepo-com.svg"
              alt="Zapier Icon"
              width={170}
              height={170}
            />
            <p className="text-center">
              Automate dataflow with <b>Zapier</b>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center lg:pl-8">
            <img
              src="/assets/images/google-sheets.png"
              alt="Zapier Icon"
              width={170}
              height={170}
              className="pb-4"
            />
            <p className="text-center">
              Export data from PDF to <b>Google Sheets</b>
            </p>
          </div>
        </section>
        <section
          id="waitlist"
          className="flex h-full flex-col items-center justify-center rounded-lg border bg-gray-400 py-16"
        >
          <h1 className="px-5 text-center text-4xl font-bold">
            Get early access for a discount
          </h1>
          <p className="px-5 py-6 text-center">
            Join our waitlist and get access to {AppConfig.title} for a
            discounted early-bird price
          </p>
          <form className="flex " action="https://submit-form.com/iy0ZmUn8">
            <input
              type="email"
              required
              placeholder="Enter email address"
              className="input mr-2  w-full max-w-xs"
              autoComplete="email"
              name="email"
            />
            <MainButton type="submit" title="Join" />
          </form>
        </section>
        <Divider id="price" />
        <div className="flex pt-20">
          <section className=" flex grow flex-col items-center lg:flex-row lg:items-start lg:justify-evenly">
            <PriceCard
              buttonTitle="Join waitlist"
              name="Free"
              price="$0"
              description="For individuals tired of manually extracting data trapped in their documents."
              featureList={[
                '30 pages per month',
                'Download to Excel, CSV, JSON, XML ',
              ]}
            />
            <PriceCard
              buttonTitle="Join waitlist"
              name="Pro"
              fakePrice="$22"
              price="$16"
              description="Great for professionals sicking to automate data extraction."
              featureList={[
                '5000 pages per month',
                'Download to Excel, CSV, JSON, XML ',
                'Google Sheets Export Integration',
                'Zapier Integration',
              ]}
            />

            <PriceCard
              buttonTitle="Join waitlist"
              name="Business"
              fakePrice="$50"
              price="$39"
              description="Perfect for business to automate PDF data extraction"
              featureList={[
                '16000 pages per month',
                'Download to Excel, CSV, JSON, XML ',
                'Google Sheets Export Integration',
                'Zapier Integration',
                'API (coming soon)',
              ]}
            />
          </section>
        </div>
      </main>
    </Main>
  );
};

export default Index;
