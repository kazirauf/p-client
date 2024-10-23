import Image from "next/image";
import image from "../../../assets/aboutme.jpg";
const AboutUs = () => {
    return (
        <div>
             <div id="about" className="bg-[#1c1c1c] min-h-screen">
      <h1 data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10  2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">ABOUT <span className="text-[#f6136e]">ME</span></h1>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
        <div className="hero ">
          <div className="hero-content flex justify-center items-center gap-24 text-white">
            <Image  width={1000} height={1000} src={image}  className="lg:max-w-md md:max-w-sm max-w-xs rounded-lg shadow-2xl" alt="kazi rauf elahi about us image" />
            <div>
              <div>
                <h1 className="lg:text-2xl md:text-2xl text-[16px] font-bold text-[#f6136e] ">
                  🚀{" "}
                  <span className="gradient-text-a ">
                    Driven Full Stack Web Developer
                  </span>{" "}
                  🚀
                </h1>
                <p className="py-6 lg:text-base md:text-base max-w-lg text-sm">
                  Driven Full stack web developer with expertise in HTML, CSS,
                  JavaScript, React, Bootstrap, React JS, Firebase, MongoDB,
                  Express JS, Typescript, Redux, Next.js and a commitment to
                  delivering high-quality, scalable solutions. Seeking
                  opportunities to apply my technical skills and continuously
                  enhance my proficiency in diverse technologies, contributing
                  to the success of innovative web development projects.
                </p>

                <div className="mt-5 flex gap-x-5 items-center">
              <a
                href="https://bd.linkedin.com/in/kazi-rauf-elahi-a47a78250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                width={1000}
                height={1000}
                  className="w-[52px]"
                  src="https://i.pinimg.com/originals/b2/f8/28/b2f828513f21444829a619ce563d4d4e.png"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/kazirauf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                width={1000}
                height={1000}
                  className="w-10"
                  src="https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100075923125510"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                width={1000}
                height={1000}
                  className="w-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/RaufElahi"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                width={1000}
                height={1000}
                  className="w-10"
                  src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/kazirauf897/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                width={1000}
                height={1000}
                  className="w-10"
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/@kazirauf7726"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                width={1000}
                height={1000}
                  className="w-10"
                  src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                  alt=""
                />
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutUs;