
import Image from "next/image";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  blogtitle: string;
  blogurl: string;
  content: string;
}

const MyBlogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBlog(null);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getblogs", {
        cache: "no-store"
      });
      const data = await res.json();
      setBlogs(data.data); // Assuming data is structured as { success: true, data: [...] }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <section id="Expertise" className="bg-[#1c1c1c]">
        <h1
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5"
        >
          MY <span className="text-[#f6136e]">Blogs</span>
        </h1>

        <div
          data-aos="flip-up"
          className="flex justify-center 2xl:pt-0 lg:pt-0 md:pt-0 pt-20"
        >
          <div className="2xl:flex lg:flex md:flex md:flex-wrap justify-center 2xl:gap-20 lg:gap-5 md:gap-5 2xl:mr-20">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="card bg-zinc-800 text-neutral-content text-white shadow-2xl 2xl:w-96 lg:w-96 md:w-80 w-80 rounded-md mb-4"
              >
                <div className="card-body">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full"
                    src={blog.blogurl} // Dynamically set the image
                    alt={blog.blogtitle}
                  />
                  <h2 className="card-title text-xl font-bold my-2 text-[#f6136e]">
                    {blog.blogtitle}
                  </h2>
                  <p>{blog.content.slice(0, 100)}...</p>
                  <button
                    onClick={() => openModal(blog)}
                    className="text-white bg-[#f6136e] py-2 hover:rotate-2 w-full"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && selectedBlog && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom 2xl:modal-top sm:modal-middle bg-[#1c1c1c]"
          open
        >
          <div className="modal-box bg-[#1c1c1c] border-2 border-[#f6136e]">
            <h3 className="font-bold text-lg">{selectedBlog.blogtitle}</h3>
            <p className="py-4">{selectedBlog.content}</p>
            <div className="modal-action">
              <button
                type="button"
                className="content-small-d py-3 px-6 font-bold text-lg rounded bg-[#c32865] hover:py-4 hover:px-7 hover:rotate-12 mt-5 lg:ml-7 md:ml-7 text-white flex items-center gap-3"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyBlogs;
