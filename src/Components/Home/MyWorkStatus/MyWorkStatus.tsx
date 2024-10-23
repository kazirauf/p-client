import first from "../../../assets/image/img/85.jpg"
import secound from "../../../assets/workstatus-2.jpg"
import Image from 'next/image';
const MyWorkStatus = () => {
    return (
        <div>
           <div className=" 2xl:h-[300px] lg:h-[200px] md:h-[200px] max-w-full small-d-w lg:mt-5 md:mt-0 mt-20 ">
           <div className="2xl:flex lg:flex md:flex items-center justify-center ">
         <div data-aos="fade-right" >
         <Image width={1000} height={1000} className="w-[700px]" src={secound} alt="" />
         </div>
          <div >
          <Image data-aos="fade-left" width={1000} height={1000} className="w-[700px]"  src={first} alt="" />
          </div>
           </div>
           

        </div>
        </div>
    );
};

export default MyWorkStatus;