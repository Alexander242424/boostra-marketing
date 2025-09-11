import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="w-full h-full flex flex-col px-4 lg:px-[121px] max-w-[1512px] mx-auto items-center mt-8">
      <div className="flex flex-col max-w-[710px] gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="matter-h2-reg">Cookie Policy</h2>
          <p className="matter-p4-reg text-text-secondary">
            GetBoostra (&quot;Boostra&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and
            similar technologies to improve your experience on our website and
            services (&quot;Service&quot;). This Cookie Policy explains what cookies are,
            how we use them, and your choices regarding cookies.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">What Are Cookies?</h6>
            <p className="matter-p4-reg text-text-secondary">
              Cookies are small text files placed on your device when you visit
              a website. They help websites function properly, remember user
              preferences, and analyze performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <h6 className="matter-h6-reg">Types of Cookies We Use</h6>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Essential Cookies</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Required for the basic operation of the Service.</li>
                <li>
                  Enable core features like account login and secure payment
                  processing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Performance & Analytics Cookies</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Collect information about how visitors use the Service.</li>
                <li>
                  Help us improve usability, functionality, and overall user
                  experience.
                </li>
                <li>Example: Google Analytics.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Functional Cookies</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Remember your preferences (e.g., language settings).</li>
                <li>Provide a more personalized experience.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Third-Party Cookies</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Some cookies may be set by third-party service providers we use (such as analytics or payment processors).</li>
                <li>These providers have their own privacy policies regarding cookie usage.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">How We Use Cookies</h6>
            <div>
              <p className="matter-p4-reg text-text-secondary">
                We use cookies to:
              </p>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>Operate and secure the Service.</li>
                <li>Analyze traffic and user behavior.</li>
                <li>Improve website performance and functionality.</li>
                <li>Personalize your experience.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Your Choices</h6>
            <div>
              <ul className="list-disc matter-p4-reg text-text-secondary pl-5">
                <li>
                  Most web browsers allow you to manage or disable cookies in
                  settings.
                </li>
                <li>
                  If you block or delete cookies, some features of the Service
                  may not function properly.
                </li>
                <li>
                  To opt out of Google Analytics tracking, you can use the
                  Google Analytics Opt-out Browser Add-on.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Changes to This Policy</h6>
            <div>
              <p className="matter-p4-reg text-text-secondary">
                We may update this Cookie Policy from time to time. Updates will
                be posted on this page with a revised &quot;Effective Date.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-5">
            <h6 className="matter-h6-reg">Contact Us</h6>
            <div>
              <p className="matter-p4-reg text-text-secondary">
                For questions about these Terms, please contact us at:
              </p>
              <a href="mailto:help@getboostra.com">help@getboostra.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
