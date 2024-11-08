/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Blog {
  _id: string;
  blogtitle: string;
  blogurl: string;
  content: string;
}

const DashboardBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isOpen, setIsOpen] = useState(false); // Track modal open state
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null); // Track selected blog
  const [updatedBlog, setUpdatedBlog] = useState<Partial<Blog>>({}); // Track updated blog values

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getblogs", {
        cache: "no-store",
      });
      const data = await res.json();
      setBlogs(data.data); // Assuming data is structured as { success: true, data: [...] }
    };
    fetchBlogs();
  }, []);

  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setUpdatedBlog(blog);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBlog(null);
  };

  const handleDelete = async (id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/deleteblog/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
          setTimeout(() => {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
          }, 300);
        } else {
          console.error("Failed to delete the blog");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your blog is safe :)",
        icon: "error",
      });
    }
  };

 // Handle blog update
const handleUpdate = async () => {
  if (!selectedBlog) return;

  try {
    // Destructure and exclude _id field
    const { _id, ...blogUpdateData } = updatedBlog;
    
    const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/updateblog/${selectedBlog._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogUpdateData), // Only send the update fields
    });

    if (res.ok) {
      const updatedData = await res.json();

      // Update the blogs list locally
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === selectedBlog._id ? { ...blog, ...updatedBlog } : blog
        )
      );

      // Show success message
      Swal.fire({
        title: "Blog Updated!",
        text: "Your blog has been updated successfully.",
        icon: "success",
      });

      closeModal();
    } else {
      const errorText = await res.text(); // Capture server error message

      // Show error message
      Swal.fire({
        title: "Update Failed",
        text: `Could not update blog: ${errorText}`,
        icon: "error",
      });
    }
  } catch (error:any) {
    // Show error message
    Swal.fire({
      title: "Error",
      text: `Error updating blog: ${error.message}`,
      icon: "error",
    });
  }
};


  return (
    <div>
      <section id="Expertise" className="bg-[#1c1c1c]">
        <h1 className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">
          MY <span className="text-[#f6136e]">Blogs</span>
        </h1>

        <div className="flex justify-center pt-20">
          <div className="flex flex-wrap justify-center gap-5">
            {blogs.map((blog) => (
              <div key={blog._id} className="card bg-zinc-800 text-white shadow-2xl w-80 rounded-md mb-4">
                <div className="card-body">
                  <Image
                    width={1000}
                    height={1000}
                    layout="responsive"
                    className="w-full"
                    src={blog.blogurl}
                    alt={blog.blogtitle}
                  />
                  <h2 className="card-title text-xl font-bold my-2 text-[#f6136e]">
                    {blog.blogtitle}
                  </h2>
                  <p>{blog.content.slice(0, 100)}...</p>
                  <button className="text-white bg-[#f6136e] py-2 w-full">
                    Read More
                  </button>
                  <div className="card-actions justify-around mt-5">
                    <button onClick={() => handleDelete(blog._id)} className="btn bg-red-500 text-white rounded font-bold text-sm">
                      DELETE NOW
                    </button>
                    <button onClick={() => openModal(blog)} className="btn bg-green-500 text-white rounded font-bold text-sm">
                      Update NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && selectedBlog && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle bg-[#1c1c1c]" open>
          <div className="modal-box bg-[#1c1c1c] border-2 border-[#f6136e]">
            <Image className="my-5" width={1000} height={1000} src={updatedBlog.blogurl || selectedBlog.blogurl} alt="" />
            <h3 className="font-bold text-lg text-[#f6136e] mb-4">Edit Blog</h3>
            <input
              type="text"
              className="input w-full mb-2"
              value={updatedBlog.blogtitle || ""}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, blogtitle: e.target.value })}
              placeholder="Blog Title"
            />
            <input
              type="text"
              className="input w-full mb-2"
              value={updatedBlog.blogurl || ""}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, blogurl: e.target.value })}
              placeholder="Image URL"
            />
            <textarea
              className="textarea w-full mb-4"
              value={updatedBlog.content || ""}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, content: e.target.value })}
              placeholder="Blog Content"
            />
            <div className="modal-action">
              <button
                type="button"
                className="py-3 px-6 font-bold text-lg rounded bg-[#c32865] text-white mr-4"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="py-3 px-6 font-bold text-lg rounded bg-gray-500 text-white"
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

export default DashboardBlog;
