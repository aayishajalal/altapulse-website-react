import React from "react";

const RefundPolicies = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className=" flex flex-col py-32 px-20 space-y-10">
            <div className="flex flex-col items-center space-y-2 md:space-y-6 text-center px-4 md:px-20">
              <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Refund and Cancellation Policy
              </h1>
            </div>

            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                1. No Refunds Policy
              </h3>
              <p>
                At Altapulse, we are committed to providing top-quality
                services, including social media marketing, WhatsApp Business
                API with web apps, e-commerce store creation through Shopify,
                and performance marketing through Google Ads and Meta Ads. Due
                to the nature of our services, we do not offer refunds once a
                service has been purchased or a campaign has been initiated.
              </p>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                2. Cancellations
              </h3>

              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Service Cancellation:
                  </p>{" "}
                  Clients may cancel their ongoing services at any time by
                  contacting us directly. However, please note that no refunds
                  will be issued for any payments already made. The service will
                  remain active until the end of the billing period.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Campaign Cancellation:
                  </p>{" "}
                  For performance marketing campaigns (Google Ads, Meta Ads),
                  clients can request to stop or pause a campaign. No refunds
                  will be issued for campaigns that have already been launched
                  or are in progress.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                3. Returns and Exchanges
              </h3>
              As our services are digital and customized for each client,
              returns and exchanges are not applicable.
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                4. How to Initiate a Cancellation
              </h3>
              <p>
                If you wish to cancel any service or have any questions
                regarding our policies, please contact us at:
              </p>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Email:
                  </p>{" "}
                  contact@altapulse.in
                </li>
              </ul>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Phone:
                  </p>{" "}
                  +91 80563 92315
                </li>
              </ul>
              Our team will assist you with the cancellation process and answer
              any questions you may have
            </div>

            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                5. Policy Changes
              </h3>

              <p>
                Altapulse reserves the right to modify this Refund and
                Cancellation Policy at any time. We will notify clients of
                significant changes, and the updated policy will be effective
                immediately upon posting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicies;
