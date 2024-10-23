"use client";

import Image from 'next/image';
import logo from '../../../assets/hhh.png';
import p from "../../../assets/rauf.jpg";
import user from "../../../assets/profile.png";
import Typewriter from "typewriter-effect";

import { MutableRefObject, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Banner = () => {
  const modalRef1 = useRef<HTMLDialogElement | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter(); // Initialize useRouter

  const handleOpenModal = (modalRef: MutableRefObject<HTMLDialogElement | null>) => {
    if (modalRef.current) {
      modalRef.current.showModal(); // Open the specific modal
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (email === 'raufelahi9876@gmail.com' && password === 'kaizf') {
      router.push('/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Invalid email or password'); // Alert for invalid credentials
    }
  };

  return (
    <div>
      <div>
        <div className="2xl:h-[800px] lg:h-[700px] md:h-[600px]">
          <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-stone-50 flex items-center content-header-sm gap-8 h-28"
          >
            <div>
              <Image className="w-32 mt-5" width={200} height={200} src={logo} alt="Logo" />
            </div>
            <div className="2xl:flex lg:flex md:flex number-email-node content-center gap-5 font-semibold text-sm">
              <h3>+8801404555331</h3>
              <h3 className="text-[#EDD3D3] 2xl:flex lg:flex md:flex hidden">/</h3>
              <h3>raufelahi9876@gmail.com</h3>
            </div>

            <h1 onClick={() => handleOpenModal(modalRef1)} className='underline text-[#f6136e] text-lg'>Login</h1>
          </div>
          <div className="2xl:flex lg:flex md:flex small-d justify-around items-center md:mx-5 2xl:mx-52">
            <div>
              <div 
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <div className="flex items-center gap-3 mb-3 content-small-d">
                  <h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-3xl text-white text-2xl 2xl:mt-0 lg:mt-0 md:mt-0 mt-1">
                    👋🏻 Hey
                  </h1>
                  <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-xl mt-2 gradient-text text-white">
                    I am <span className="font-bold text-[#EDD3D3]">Kazi Rauf Elahi</span>
                  </h1>
                </div>
                <div className="flex items-center gap-2 w-[450px] md:ml-7 content-small-d">
                  <h3 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-white">I am a</h3>
                  <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-[#c32865] font-bold mt-2 md:mb-1">
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Web Developer",
                          "MERN Stack Web Developer",
                          "JavaScript Developer",
                          "React Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="lg:w-3/5 lg:text-left md:text-left text-center lg:mx-7 mx-8 text-white">
                    Versatile web developer with extensive expertise across domains. Committed to ongoing skill refinement, dedicated to delivering sophisticated digital solutions.
                  </p>
                </div>
                <div className="content-small-d">
                  <a href="https://drive.google.com/file/d/1zo-5J-VN-gQ3z_hfO7bVSlc1X3rgf6hc/view?usp=sharing" target='_blank' download="Resume">
                    <button className="content-small-d py-3 px-6 font-bold text-lg rounded bg-[#c32865] hover:py-4 hover:px-7 hover:rotate-12 mt-5 lg:ml-7 md:ml-7 text-white flex items-center gap-3">
                      <h3>Download</h3>
                      <svg className="w-5 mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image width={1000} height={1000} className="2xl:w-[450px] xl:w-[450px] lg:w-[650px] md:w-[600px] small-i-d" src={p} alt="Profile" />
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef1} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-[#f6136e] text-xl text-center">Login Now</h3>
          <div className='flex justify-center my-5'>
            <Image className='w-36' src={user} alt='' width={1000} height={1000} />
          </div>
          <form className="space-y-4 mt-3" onSubmit={handleLogin}>
            <h3 className='font-bold'>Email</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 my-5 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <h3 className='font-bold'>Password</h3>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <div className="modal-action">
              <button type="submit" className="btn bg-[#f6136e] hover:bg-[#f6136e]/90">Login</button>
              <button type="button" className="btn" onClick={() => modalRef1.current?.close()}>Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Banner;
