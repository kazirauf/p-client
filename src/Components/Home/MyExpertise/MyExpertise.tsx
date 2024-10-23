import Image from "next/image";
import icon1 from "../../../assets/code (3).png"
import icon2 from "../../../assets/video-editing.png"
import icon3 from "../../../assets/sing.png"


const MyExpertise = async() => {

  

    return (
        <div>
            <section id="Expertise" className="bg-[#1c1c1c]">
       <h1 data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10  2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">MY <span className="text-[#f6136e]">EXPERTISE</span></h1> 
      
       <div data-aos="flip-up"
     className=" flex justify-center 2xl:pt-0 lg:pt-0 md:pt-0  pt-20">
       <div className=" 2xl:flex lg:flex md:flex md:flex-wrap  justify-center 2xl:gap-20 lg:gap-5 md:gap-5 2xl:mr-20">
   <div className="card  bg-zinc-800 text-neutral-content text-white shadow-2xl 2xl:w-80 lg:w-80 md:w-80 w-80 rounded-md mb-4">
  <div className="card-body p-7">
    <Image width={1000} height={1000} className="w-10" src={icon1} alt="" />
    <h2 className="card-title text-xl font-bold my-2 text-[#f6136e]">Website Development</h2>
    <p>With two years of experience, I specialize in creating dynamic <br /> and visually captivating websites. <br /> My Full Stack expertise allows <br /> me to deliver cutting-edge, highly functional web solutions. I bring creative precision and adaptability <br /> to ensure your project stands out <br /> in the digital landscape.</p>
   
  </div>
</div>
   <div className="card  bg-zinc-800 text-neutral-content text-white  2xl:w-80 lg:w-80 md:w-80 w-80 rounded-md mb-4">
  <div className="card-body p-7">
    <Image width={1000} height={1000} className="w-10" src={icon3} alt="" />
    <h2 className="card-title text-xl font-bold my-2 text-[#f6136e]">Content Creation</h2>
    <p>I have extensive experience in content creation and specialize in producing visually appealing content. My work is unique and does not follow conventional topics. Some companies have sought my expertise for their content needs. I bring creative precision and adaptability, ensuring each piece of content plays an important role.</p>
   
  </div>
</div>
   <div className="card  bg-zinc-800 text-neutral-content text-white 2xl:w-80 lg:w-80 md:w-80 w-80 rounded-md mb-4">
  <div className="card-body p-7">
    <Image width={1000} height={1000} className="w-10" src={icon2} alt="" />
    <h2 className="card-title  text-xl font-bold my-2 text-[#f6136e]">Graphic Design</h2>
    <p>I have solid experience in graphic design, creating visually appealing and brand-aligned designs. My time at Dr.tech enhanced my skills in using tools like Figma to deliver engaging digital solutions. I’m focused on crafting high-quality, impactful visuals for various projects.</p>
   
  </div>
</div>
        </div>
       </div>
       </section>
        </div>
    );
};

export default MyExpertise;