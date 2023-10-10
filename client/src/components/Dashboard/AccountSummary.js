import React from "react";

const AccountSummary = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter">
          Total Income/Expenses of All Accounts
        </h3>
        <p className="text-lg md:text-xl text-coolGray-500 font-medium">
          A list of your company's accounts, either separated by category or in
          chronological order.
        </p>
      </div>
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                  <div className="w-auto p-2">

                  </div>

                </div>
                <div className="flex flex-wrap items-center justify-between -m-1">
                  <div className="w-auto p-1">

                  </div>

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                  <div className="w-auto p-2">

                  </div>

                </div>
                <div className="flex flex-wrap items-center justify-between -m-1">
                  <div className="w-auto p-1">

                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                  <div className="w-auto p-2">

                  </div>
                  <div className="w-auto p-2">
                    <a href="#">

                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between -m-1">
                  <div className="w-auto p-1">

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountSummary;
