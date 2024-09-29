import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col py-32 px-20 space-y-10">
            <div className="flex flex-col items-center space-y-2 md:space-y-6 text-center px-4 md:px-20">
              <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Privacy Policy
              </h1>
            </div>
            {/* 1. Introduction */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                1. Introduction
              </h3>
              <p>
                At Altapulse, we value your privacy and are committed to protecting your personal
                information. This Privacy Policy outlines what information we collect, how we
                collect it, how we use it, and how we keep it safe. By using our website, services,
                or apps, you agree to the terms of this Privacy Policy.
              </p>
            </div>
            {/* 2. Information We Collect */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                2. Information We Collect
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Personal Information:
                  </p>
                  We may collect personal information from you, including but not limited to your name,
                  email address, phone number, billing information, and any other details you provide when using
                  our services.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Usage Data:
                  </p>
                  We may collect information about how you use our website and services, such as your IP address,
                  browser type, device information, pages visited, and time spent on our site.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Cookies and Tracking Technologies:
                  </p>
                  We use cookies and similar tracking technologies to enhance your experience on our site,
                  track user behavior, and collect information about your preferences.
                </li>
              </ul>
            </div>
            {/* 3. How We Collect Information */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                3. How We Collect Information
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Directly from You:
                  </p>
                  We collect personal information that you provide directly to us when you sign up for our services,
                  fill out forms, contact us, or make a purchase.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Automatically:
                  </p>
                  We automatically collect usage data through cookies, log files, and other tracking technologies
                  when you interact with our website or services.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    From Third Parties:
                  </p>
                  We may receive information about you from third-party sources, such as social media platforms,
                  payment processors, and marketing partners, to enhance our services.
                </li>
              </ul>
            </div>
            {/* 4. How We Use Collected Information */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                4. How We Use Collected Information
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Service Delivery:
                  </p>
                  We use your personal information to provide, maintain, and improve our services, including
                  processing payments, setting up campaigns, and delivering digital products.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Communication:
                  </p>
                  We use your contact information to communicate with you about your account, provide customer support,
                  send updates, and respond to inquiries.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Marketing:
                  </p>
                  With your consent, we may use your information to send promotional materials, special offers,
                  and other marketing communications.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Analytics:
                  </p>
                  We use usage data to analyze trends, monitor the effectiveness of our marketing efforts,
                  and improve our website and services.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Compliance:
                  </p>
                  We may use your information to comply with legal obligations, enforce our terms and conditions,
                  and protect our rights and the rights of others.
                </li>
              </ul>
            </div>
            {/* 5. How We Keep Information Safe */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                5. How We Keep Information Safe
              </h3>
              <p>
                We take the security of your personal information seriously and have implemented appropriate
                technical and organizational measures to protect it from unauthorized access, disclosure,
                alteration, or destruction. This includes using encryption, secure servers, and regular security
                assessments. However, please note that no method of transmission over the Internet or electronic
                storage is 100% secure.
              </p>
            </div>
            {/* 6. Information Sharing with Third Parties */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                6. Information Sharing with Third Parties
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Service Providers:
                  </p>
                  We may share your personal information with trusted third-party service providers who assist us in
                  operating our business, such as payment processors, hosting services, and marketing partners.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Legal Requirements:
                  </p>
                  We may disclose your information if required to do so by law or in response to valid legal processes,
                  such as a court orders.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Business Transfers:
                  </p>
                  In the event of a merger, acquisition, or sale of all or a portion of our business, your personal
                  information may be transferred as part of the transaction.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    With Your Consent:
                  </p>
                  We will share your information with third parties if you provide explicit consent for us to do so.
                </li>
              </ul>
            </div>
            {/* 7. Your Rights and Choices */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                7. Your Rights and Choices
              </h3>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Access and Correction:
                  </p>
                  You have the right to access and update your personal information at any time. If you wish to
                  review or correct your information, please contact us.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Opt-Out:
                  </p>
                  You can opt out of receiving marketing communications from us by following the unsubscribe
                  instructions in any promotional email or by contacting us directly.
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-semibold py-1">
                    Data Deletion:
                  </p>
                  You have the right to request the deletion of your personal information. Please note that certain
                  information may need to be retained for legal or business purposes.
                </li>
              </ul>
            </div>
            {/* 8. Updates to This Privacy Policy */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                8. Updates to This Privacy Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We encourage you to review this policy periodically for any updates. The date of
                the latest revision will be indicated at the top of this page.
              </p>
            </div>
            {/* 9. Contact Us */}
            <div>
              <h3 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2">
                9. Contact Us
              </h3>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p>Email: support@altapulse.com</p>
              <p>Phone: +1-234-567-8901</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
