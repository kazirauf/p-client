import Image from "next/image";
import img1 from '../../../assets/image/8c.png'
import img2 from '../../../assets/image/c-winer.jpg'
import img3 from '../../../assets/image/1706763281215.jpeg'
import img4 from '../../../assets/image/winner.jpg'

const MyAchievement = () => {
    return (
        <div>
                <section id='achievement' className=''>
     <h1 data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10  2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-10 text-2xl mb-10 pt-36 ml-5">MY <span className="text-[#f6136e]">ACHIEVEMENTS</span></h1>
       <div className="flex flex-wrap justify-center gap-7 w-[90%] mx-auto">
      <div className="relative lg:w-[480px] lg:h-[360px] md:w-[280px] md:h-[210px] w-[300px] h-[230px] bg-white flex items-end p-8 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(13,36,63,0.3)] to-[rgba(13,36,63,1)] z-10 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
        <Image src={img1} width={1000} height={1000} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-20 text-[#f6136e] font-bold opacity-0 translate-y-8 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
          <h1 className="text-2xl leading-10 mb-2.5">Complete Web Development Course Certificate</h1>
          <p className="text-sm tracking-wide mb-5">(Jul - Dec 2023 )
          By (Programming Hero)</p>
          <a href="https://drive.google.com/file/d/1blaKlqDB_OOvPINJnJtujcs7k5-AnX_L/view" target='_blank' className="bg-[#f6136e] text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-400 ease-in-out hover:bg-[#fc5185] hover:text-white hover:shadow-lg">Read More</a>
        </div>
      </div>
      <div className="relative lg:w-[480px] lg:h-[360px] md:w-[280px] md:h-[210px] w-[300px] h-[230px] bg-white flex items-end p-8 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(13,36,63,0.3)] to-[rgba(13,36,63,1)] z-10 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
        <Image src={img2} width={1000} height={1000} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-20 text-[#f6136e] font-bold opacity-0 translate-y-8 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
          <h1 className="text-2xl leading-10 mb-2.5">Winners of CodeforCareer season 2
</h1>
          <p className="text-sm tracking-wide mb-5">By (Programming Hero) 
          (May 2024)</p>
          <a href="https://drive.google.com/file/d/1cTzjTpsfZVkbB0JMy6G5bBqREpGY91ri/view?usp=sharing" target='_blank' className="bg-[#f6136e] text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-400 ease-in-out hover:bg-[#fc5185] hover:text-white hover:shadow-lg">Read More</a>
        </div>
      </div>
      <div className="relative lg:w-[380px] lg:h-[360px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] bg-white flex items-end p-8 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(13,36,63,0.3)] to-[rgba(13,36,63,1)] z-10 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
        <Image src={img3} width={1000} height={1000} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-20 text-[#f6136e] font-bold opacity-0 translate-y-8 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
          <h1 className="text-2xl leading-10 mb-2.5">Black Belt </h1>
          <p className="text-sm tracking-wide mb-5">(Jun 2024 ) By (Programming Hero)</p>
          <a href="https://drive.google.com/file/d/1m5K1PXQaaiDA5s5W35sU8A2CqJadMXoM/view" target='_blank' className="bg-[#f6136e] text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-400 ease-in-out hover:bg-[#fc5185] hover:text-white hover:shadow-lg">Read More</a>
        </div>
      </div>
      <div className="relative lg:w-[380px] lg:h-[360px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] bg-white flex items-end p-8 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(13,36,63,0.3)] to-[rgba(13,36,63,1)] z-10 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
        <Image src={img4} width={1000} height={1000} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-20 text-[#f6136e] font-bold opacity-0 translate-y-8 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
          <h1 className="text-2xl leading-10 mb-2.5">Winners of CodeforCareer season 2 post</h1>
        
          <a href="https://drive.google.com/file/d/1-A_DOWueoeTgyOB_7wdkUoRyHGvLNVkU/view?usp=sharing" target='_blank' className="bg-[#f6136e] text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-400 ease-in-out hover:bg-[#fc5185] hover:text-white hover:shadow-lg">Read More</a>
        </div>
      </div>
    </div>
      </section>
        </div>
    );
};

export default MyAchievement;