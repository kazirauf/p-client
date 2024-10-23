import { useEffect, useState } from 'react';
import './WrokExperience.css'; // Ensure correct file path

interface Experience {
  _id: string;
  address: string;
  company: string;
  date: string;
  description: string;
  title: string;
}

const WorkExperience = () => {
  const [experienceData, setExperienceData] = useState<Experience[]>([]);

  useEffect(() => {
    // Function to check if an element is in the viewport
    const isElementInViewport = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      const items = document.querySelectorAll('.timeline li');
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add('in-view');
        }
      });
    };

    // Add event listeners
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('load', callbackFunc);
      window.removeEventListener('resize', callbackFunc);
      window.removeEventListener('scroll', callbackFunc);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getexperience", {
          cache: "no-store"
        });
        const data = await res.json();
        setExperienceData(data.data); // Assuming data.data contains the array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">
        Work <span className="text-[#f6136e]">Experience</span>
      </h1>
      <section className="timeline flex justify-center">
        <ul>
          {experienceData.map((experience) => (
            <li key={experience._id}>
              <div className='card shadow-2xl text-white'>
                <h2 className='text-lg font-bold my-2'>{experience.title}</h2>
                <h3 className='text-lg mb-1 font-bold'>{experience.company}</h3>
                <p className='mb-1'>{experience.address}</p>
                <p className='text-[#f6136e] font-bold'>{experience.date}</p>
                <p>{experience.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WorkExperience;
