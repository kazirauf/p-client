import Image from "next/image";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetails = async ({params}:any) => {
  let blogDetais = null;
     try{
        const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/getblogs/${params.blogId}`, {
            cache: "no-store"
          })
          const data = await res.json();
          blogDetais = data.data;
          console.log(data.data);
     }
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     catch(err:any){
        console.log(err.massage);
        
     }
           
    return (
        <div className="h-screen flex justify-center pt-10">
         <div className="">  
            <div className="flex justify-center">
            <Image className="lg:w-[700px] w-52 lg:h-96 h-52" src={blogDetais.blogurl} alt="blog image" width={1000} height={1000} />
            </div>
              <h1 data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" className=" text-center mt-10 2xl:text-xl lg:text-lg font-bold text-white  2xl:ml-20 lg:ml-3 md:text-3xl  text-2xl mb-10  ml-5"><span className="text-[#f6136e]">{blogDetais.blogtitle}</span></h1>
     <p className="text-center text-white mx-10">{blogDetais.content}</p></div>
        </div>
    );
};

export default BlogDetails;