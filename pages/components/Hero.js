import React from "react";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  const socialsData = useRef([
    { icon: <FaGithub />, url: "https://github.com/kirtanchandak" },
    { icon: <FaTwitter />, url: "https://twitter.com/chandak_kirtan" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/kirtan-chandak-65736b159/",
    },
    { icon: <FaInstagram />, url: "https://instagram.com/chandak.kirtan" },
  ]);
  return (
    <div>
      <section className="home-view-container">
        <div className="hero-content-wrapper mt-20 flex flex-row items-center justify-center gap-24">
          <div className="profile-picture-wrapper w-fit h-fit">
            <img
              src={
                "https://ik.imagekit.io/kirtanchandak/portfolio_website/img1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673427941593"
              }
              className="w-[360px] h-auto rounded-lg shadow-2xl"
              alt="profile"
            />
          </div>
          <div className="personal-details-content-wrapper">
            <h1 className="name text-6xl text-gray-900 font-bold">
              Kirtan Chandak
            </h1>
            <p className="role-keywords-wrapper text-sm h-auto font-normal leading-snug text-gray-500 mt-1">
              JavaScript Developer | SIH 2022 Winner | GDSC Core Team
            </p>
            <div className="socials-wrapper mt-8 flex flex-row items-center justify-start gap-3 w-fit h-auto">
              <span className="font-semibold text-gray-800 text-sm leading-snug">
                {"Socials"}
              </span>
              <ul className="socials-list flex flex-row items-center justify-start gap-2">
                {socialsData.current?.map((social, socialIndex) => (
                  <li
                    className="social-item text-gray-400 hover:text-gray-600 text-base"
                    key={socialIndex}
                  >
                    <a href={social?.url} target="_blank" rel="noreferrer">
                      {social?.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="recent-work-details-wrapper mt-10">
              <h1 className="leading-snug text-sm font-semibold text-gray-400 select-none cursor-default">
                Recent experiences
              </h1>
              <div className="recent-work-experience-list-wrapper mt-2">
                <ul className="recent-work-experience-list flex flex-col items-start justify-start gap-2">
                  <li className="">
                    <button
                      className="recent-work-experience-item-content-wrapper bg-transparent hover:bg-gray-100 hover:px-6 py-4 transition-all text-left rounded-md cursor-pointer"
                      onClick={() =>
                        window.open("https://github.com/kirtanchandak")
                      }
                    >
                      <h3 className="leading-snug text-base font-semibold text-gray-700 w-[32ch]">
                        HackThisFall x Nhost 🚀
                      </h3>
                      <span className="text-gray-400 font-normal text-sm">
                        learning conference
                      </span>
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="recent-work-experience-item-content-wrapper bg-transparent hover:bg-gray-100 hover:px-6 py-4 transition-all text-left rounded-md cursor-pointer"
                      onClick={() =>
                        window.open("https://github.com/kirtanchandak")
                      }
                    >
                      <h3 className="leading-snug text-base font-semibold text-gray-700 w-[32ch]">
                        Hackcon by MLH 🤝
                      </h3>
                      <span className="text-gray-400 font-normal text-sm">
                        community meetup
                      </span>
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="recent-work-experience-item-content-wrapper bg-transparent hover:bg-gray-100 hover:px-6 py-4 transition-all text-left rounded-md cursor-pointer"
                      onClick={() => window.open(recentExperience?.link)}
                    >
                      <h3 className="leading-snug text-base font-semibold text-gray-700 w-[32ch]">
                        Smart India Hackthon 2022 🏆
                      </h3>
                      <span className="text-gray-400 font-normal text-sm">
                        Won second runner-up Rs.50,000
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
