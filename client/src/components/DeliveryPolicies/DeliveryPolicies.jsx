import React from "react";

const DeliveryPolicies = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className=" flex flex-col py-32 px-20 space-y-10">
            <div className="flex flex-col items-center space-y-2 md:space-y-6 text-center px-4 md:px-20">
              <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Delivery Policy
              </h1>
            </div>

            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                1. Order Processing and Shipping Time
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Order Processing:
                  </p>{" "}
                  Once your order is placed, our team will begin processing it
                  within 1-2 business days. You will receive a confirmation
                  email with your order details and estimated delivery time.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Shipping Time:
                  </p>{" "}
                  Depending on the service or product ordered, shipping time may
                  vary. For digital services, access or delivery will typically
                  be provided within 24-48 hours after order processing. For any
                  digital products (if applicable), standard shipping time range
                  from 5-7 business days within the country.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                2. Shipping Costs
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Digital Services:
                  </p>{" "}
                  There are no shipping costs associated with our digital
                  services, as they are delivered electronically.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Digital Products:
                  </p>{" "}
                  If your order includes digital products, shipping costs will
                  be calculated at checkout based on your location and the
                  shipping method selected. Any applicable taxes or duties will
                  also be added to your order total.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                3. International Shipping
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Digital Services:
                  </p>{" "}
                  Our digital services, such as social media marketing, WhatsApp
                  Business API, and e-commerce store setups, are available
                  internationally with no shipping fees, as they are delivered
                  online.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    {" "}
                    Digital Products:
                  </p>{" "}
                  If we ship digital products internationally, shipping times
                  and costs will vary depending on the destination. Customers
                  are responsible for any customs duties, taxes, or import fees
                  that may apply. Please allow extra time for international
                  deliveries, which may take 10-15 business days or more.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                4. Order Tracking
              </h3>
              <p>
                For digital products, once your order is shipped, you will
                receive a tracking number via email to monitor the progress of
                your shipment.
              </p>
            </div>

            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                5. Delivery Delays
              </h3>
              <p>
                While we strive to meet our estimated delivery times, delays may
                occur due to unforeseen circumstances such as customs
                processing, weather conditions, or postal service issues. We do
                not give indemnification in such situations.
              </p>
            </div>
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                6. Contact Information
              </h3>
              <p>
                If you have any questions or concerns regarding our Delivery
                Policy or need assistance with your order, please contact us at:
              </p>
              <ul className="list-disc pl-10">
                {" "}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPolicies;
