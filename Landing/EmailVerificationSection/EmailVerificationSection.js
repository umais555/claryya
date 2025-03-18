import Image from "next/image";

const EmailVerificationSection = ({ sections }) => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 space-y-12 lg:space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${
            index === 1 ? "md:flex-row" : index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* ✅ Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-xl lg:text-3xl font-medium text-gray-900">
              {section.title === "Build a High-Quality Lead Base with Accurate Verification" ? (
                <>
                  Build a <span className="text-[#009199]">High-Quality</span>
                  <span> Leads</span>
                  <br />
                  Base with Accurate <span className="text-[#009199]">Verification</span>
                </>
              ) : section.title === "What are the benefits of free Email Verifier?" ? (
                <>
                  What are the <span className="text-[#009199]">Benefits</span>
                  <br />
                  of free <span className="text-[#009199]">Email Verifier?</span>
                </>
              ) : section.title.includes("with") && (section.title.includes("Accuracy") || section.title.includes("Intelligent")) ? (
                <>
                  {section.title.split(/(with)/g).map((part, i) =>
                    part === "with" ? (
                      <>
                        {part}
                        <br />
                      </>
                    ) : (
                      part.split(/(Accuracy|Intelligent)/g).map((subPart, j) =>
                        ["Accuracy", "Intelligent"].includes(subPart) ? (
                          <span key={`${i}-${j}`} className="text-[#009199]">{subPart}</span>
                        ) : (
                          subPart
                        )
                      )
                    )
                  )}
                </>
              ) : (
                <>
                  {section.title.split(/(High-Quality|Verification|Benefits|Email Verifier)/g).map(
                    (part, i) =>
                      ["High-Quality", "Verification", "Benefits", "Email Verifier"].includes(part) ? (
                        <span key={i} className="text-[#009199]">{part}</span>
                      ) : (
                        part
                      )
                  )}
                </>
              )}
            </h2>

            {/* ✅ Corrected Description Logic */}
            <p
  className="mt-4 text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base whitespace-pre-line 
             max-w-full sm:max-w-[62%] md:max-w-full">
  {index === 2 ? (
    <>
      Ensuring authentic email addresses is key to successful
      <br className="hidden min-[360px]:inline sm:hidden xl:inline" /> {/* ✅ 360px - 767px & above 1280px */}
      communication. Our AI-powered verification hub filters
      <br className="hidden min-[360px]:inline sm:hidden xl:inline" /> {/* ✅ 360px - 767px & above 1280px */}
      out invalid, fake, and inactive emails, keeping only high-
      <br className="hidden min-[360px]:inline sm:hidden xl:inline" /> {/* ✅ 360px - 767px & above 1280px */}
      quality leads.
    </>
  ) : (
    section.description.split("over a").map((part, i) => (
      <span key={i}>
        {part}
        {i < section.description.split("over a").length - 1 && (
          <>
            <span className="hidden xl:inline"> over a</span>
            <br className="hidden xl:block" /> {/* ✅ Break ABOVE 1280px */}
            <span className="inline xl:hidden"> over a</span>
          </>
        )}
      </span>
    ))
  )}
</p>






            <ul className="mt-4 space-y-2">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                  <Image
                    src="/LandingSection/Isolation_Mode.svg"
                    alt="Bullet Icon"
                    width={20}
                    height={20}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Image Section for Mobile (Fully Aligned Right and Below Bullets) */}
     {/* ✅ Image Section for Mobile (Fully Aligned Right and Below Bullets) */}
<div className="w-full flex justify-end mt-6 md:hidden pr-0">
  <div className="w-[300px] ml-auto"> {/* Adjust width as needed */}
    <Image
      src={section.image}
      alt={section.title}
      width={index % 2 === 0 ? 480 : 460}
      height={index % 2 === 0 ? 320 : 300}
      className="w-full rounded-lg object-cover"
    />
  </div>
</div>


          {/* ✅ Image Section for Desktop (Original Placement for Larger Screens) */}
          <div className={`hidden md:block md:w-1/2 ${index === 1 ? "md:order-first" : ""}`}>
            <Image
              src={section.image}
              alt={section.title}
              width={index % 2 === 0 ? 480 : 460}
              height={index % 2 === 0 ? 320 : 300}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default EmailVerificationSection;
