import React from "react";

export default function SiteMapPage() {
  const sitePages = [
    {
      title: "Homepage",
      url: "/",
      description: "Main Boostra landing page - conversion optimization platform"
    },
    {
      title: "Terms of Service",
      url: "/terms-of-services",
      description: "Terms and conditions for using Boostra service"
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
      description: "How we collect, use and protect your information"
    },
    {
      title: "Cookies Policy",
      url: "/cookies-policy",
      description: "Information about cookies usage on our website"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-4 lg:px-[121px] max-w-[1512px] mx-auto items-center mt-8">
      <div className="flex flex-col max-w-[710px] gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="matter-h2-reg">Site Map</h2>
          <p className="matter-p4-reg text-text-secondary">
            Find the page you need on our website. Navigate through all available pages and sections.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6">
          {sitePages.map((page, index) => (
            <div key={index} className="flex flex-col gap-2.5">
              <h6 className="matter-h6-reg">
                <a 
                  href={page.url}
                  className="relative group matter-p4-reg max-w-fit"
                >
                  {page.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                </a>
              </h6>
              <p className="matter-p4-reg text-text-secondary">
                {page.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2.5">
            <h6 className="matter-h6-reg">Last Updated</h6>
            <p className="matter-p4-reg text-text-secondary">
              {new Date().toLocaleDateString('en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
