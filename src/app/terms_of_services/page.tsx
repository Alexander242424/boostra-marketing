import React from "react";

export default function TermsOfServices() {
  return (
    <div className="w-full h-full flex flex-col px-4 lg:px-[121px] max-w-[1512px] mx-auto items-center mt-8">
      <div className="flex flex-col max-w-[710px] gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="matter-h2-reg">Terms of services</h2>
          <p className="matter-p4-reg text-text-secondary">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of our
            website, services, and platform (collectively, the
            &ldquo;Service&rdquo;). By accessing or using our Service, you agree
            to comply with and be bound by these Terms. Please read them
            carefully before using our Service.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Acceptance of Terms</h6>
            <p className="matter-p4-reg text-text-secondary">
              By using our Service, you confirm that you have read, understood,
              and agree to be bound by these Terms and our Privacy Policy. If
              you do not agree with these Terms, you may not access or use the
              Service.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Description of the Service</h6>
            <p className="matter-p4-reg text-text-secondary">
              [Usability Checker Name] provides an online tool that analyzes the
              usability and performance of websites and generates reports with
              actionable recommendations. Our Service is designed to help you
              improve user experience and site performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Eligibility</h6>
            <div>
              <p className="matter-p4-reg text-text-secondary">
                To use the Service, you must:
              </p>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>
                  Be at least 18 years old or have legal parental/guardian
                  consent.
                </li>
                <li>
                  Provide accurate, complete, and up-to-date information when
                  creating an account.
                </li>
                <li>
                  Ensure that your use of the Service complies with all
                  applicable laws and regulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Account Registration and Security</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>
                  You must create an account to access certain features of the
                  Service.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </li>
                <li>
                  You agree to notify us immediately of any unauthorized access
                  to or use of your account.
                </li>
                <li>
                  We are not liable for any loss or damage arising from
                  unauthorized use of your account.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Use of the Service</h6>
            <div>
              <p className="matter-p4-reg text-text-secondary">
                You agree to use the Service only for lawful purposes and in
                compliance with these Terms. You agree not to:
              </p>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>
                  Reverse-engineer, modify, or attempt to access the source code
                  of the Service.
                </li>
                <li>
                  Use the Service to transmit spam, viruses, or any harmful
                  code.
                </li>
                <li>
                  Misuse the Service for illegal or unauthorized purposes.
                </li>
                <li>
                  Violate any intellectual property rights or proprietary rights
                  of others.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Payments and Subscriptions</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Some features of the Service may require payment.</li>
                <li>
                  By purchasing a report or subscribing to a paid plan, you
                  agree to pay all fees and applicable taxes.
                </li>
                <li>
                  Payments are processed securely through our third-party
                  payment processor.
                </li>
                <li>All fees are non-refundable unless otherwise stated.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
