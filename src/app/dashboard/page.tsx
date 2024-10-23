"use client";

import { useState, RefObject, useRef, FormEvent, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import add from "../../assets/add.png";
import project from "../../assets/file-managament.png";
import job from "../../assets/portfolio.png";
import blog from "../../assets/blog.png";
import 'react-quill/dist/quill.snow.css';
interface BlogFormData {
  blogtitle: string;
  blogurl: string;
  content: string;
  // Add other properties as needed
}
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const modalRef1 = useRef(null);
  const modalRef2 = useRef(null);
  const modalRef3 = useRef(null);
  const modalRef4 = useRef(null);



  // Function to open a specific modal
  const handleOpenModal = (modalRef: RefObject<HTMLDialogElement>) => {
    if (modalRef.current) {
      modalRef.current.showModal(); // Open the specific modal
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const modalRef = useRef<HTMLDialogElement>(null);
  const [blogData, setBlogData] = useState<BlogFormData>({
  
    blogtitle: '',
    blogurl: '',
    content: '',
  });

  // Function to handle blog content change
  const handleContentChange = (content: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBlogData((prevData: any) => ({
      ...prevData,
      content,
    }));
  };

  // Function to handle input change
  const handleBlogChangee = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBlogData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle blog form submission
  const handleBlogSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Blog data:', blogData);

    try {
      const response = await fetch('https://next-level-p-k-server.vercel.app/api/v1/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Blog added successfully:', data);
        // Reset form data
        setBlogData({
          blogtitle: '',
          blogurl: '',
          content: '',
        });
      } else {
        console.error('Failed to add blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };



  const [formSkill, setFormSkill] = useState({
    skillurl: '',
    skillname: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormSkill({
      ...formSkill,
      [e.target.name]: e.target.value,
    });
  };
  const [formExperiance, setFormExperiance] = useState({
    title: '',
    address: '',
    company: '',
    date: '',
    description: '',
    
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeExperiance = (e: any) => {
    setFormExperiance({
      ...formExperiance,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleExperiance = async (e: any) => {
    e.preventDefault(); // Prevents page refresh
    console.log('Form data:', formExperiance);

    try {
      const response = await fetch('https://next-level-p-k-server.vercel.app/api/v1/addexperience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formExperiance),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Project added successfully:', data);
        // Reset the form fields
        setFormExperiance({
          title: '',
          address: '',
          company: '',
          date: '',
          description: '',
          
        });
      } else {
        console.error('Failed to add project:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [formProject, setFormProject] = useState({
    liveurl: '',
    projectname: '',
    projectimageurl: '',
    clientsidelink: '',
    serversidelink: '',
    projecttechnology: '',
    description: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeProject = (e: any) => {
    setFormProject({
      ...formProject,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProject = async (e: any) => {
    e.preventDefault(); // Prevents page refresh
    console.log('Form data:', formProject);

    try {
      const response = await fetch('https://next-level-p-k-server.vercel.app/api/v1/addproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formProject),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Project added successfully:', data);
        // Reset the form fields
        setFormProject({
          liveurl: '',
          projectname: '',
          projectimageurl: '',
          clientsidelink: '',
          serversidelink: '',
          projecttechnology: '',
          description: '',
        });
      } else {
        console.error('Failed to add project:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSkills = async (e: any) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log('Form data:', formSkill);

    try {
      const response = await fetch('https://next-level-p-k-server.vercel.app/api/v1/createskills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formSkill),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Skill added successfully:', data);
        // Reset form
        setFormSkill({
          skillurl: '',
          skillname: '',
        });
      } else {
        console.error('Failed to add skill:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <h1
        data-aos="fade-top"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="2xl:text-5xl lg:text-4xl font-bold text-center text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5"
      >
        Welcome <span className="text-[#f6136e]">Kazi Rauf Elahi</span> In
        Dashboard
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {/* Buttons to open each modal */}
        <button
          onClick={() => handleOpenModal(modalRef1)}
          className="flex items-center text-white font-bold gap-4 bg-[#f6136e] py-6 px-10 rounded"
        >
          <Image width={1000} height={1000} className="w-10" src={add} alt="" />
          <h3 className="text-lg">Add New Skills</h3>
        </button>
        <button
          onClick={() => handleOpenModal(modalRef2)}
          className="flex items-center text-white font-bold gap-4 bg-[#f6136e] py-6 px-10 rounded"
        >
          <Image
            width={1000}
            height={1000}
            className="w-10"
            src={project}
            alt=""
          />
          <h3 className="text-lg">Add New Projects</h3>
        </button>
        <button
          onClick={() => handleOpenModal(modalRef3)}
          className="flex items-center text-white font-bold gap-4 bg-[#f6136e] py-6 px-10 rounded"
        >
          <Image width={1000} height={1000} className="w-10" src={job} alt="" />
          <h3 className="text-lg">Add New Experience</h3>
        </button>
        <button
          onClick={() => handleOpenModal(modalRef4)}
          className="flex items-center text-white font-bold gap-4 bg-[#f6136e] py-6 px-10 rounded"
        >
          <Image width={1000} height={1000} className="w-10" src={blog} alt="" />
          <h3 className="text-lg">Add New Blogs</h3>
        </button>
      </div>

      {/* Modals */}
      <dialog ref={modalRef1} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Skill</h3>
          <form onSubmit={handleSkills} className="space-y-4">
      <input
        type="text"
        name="skillurl"
        value={formSkill.skillurl}
        onChange={handleChange}
        placeholder="Skill Image URL"
        className="w-full p-3 my-5 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="skillname"
        value={formSkill.skillname}
        onChange={handleChange}
        placeholder="Skill name"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
        type="submit"
        value="Add"
      />
    </form>
        </div>
      </dialog>
      <dialog ref={modalRef2} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Project</h3>
          <form onSubmit={handleProject} className="space-y-4">
      <input
        type="text"
        name="liveurl"
        value={formProject.liveurl}
        onChange={handleChangeProject}
        placeholder="Project Live URL"
        className="w-full p-3 mt-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="projectname"
        value={formProject.projectname}
        onChange={handleChangeProject}
        placeholder="Project Name"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="projectimageurl"
        value={formProject.projectimageurl}
        onChange={handleChangeProject}
        placeholder="Project Image URL"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="clientsidelink"
        value={formProject.clientsidelink}
        onChange={handleChangeProject}
        placeholder="Project Client Side Repo URL"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="serversidelink"
        value={formProject.serversidelink}
        onChange={handleChangeProject}
        placeholder="Project Server Side Repo URL"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="projecttechnology"
        value={formProject.projecttechnology}
        onChange={handleChangeProject}
        placeholder="Project Technology (Separate each tech with space)"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <textarea
        placeholder="Project Description"
        name="description"
        value={formProject.description}
        onChange={handleChangeProject}
        className="w-full p-3 h-32 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      ></textarea>
      <input
        className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
        type="submit"
        value="Add"
      />
    </form>
        </div>
      </dialog>
      {/* Other modals like modalRef2, modalRef3 would go here */}
      <dialog ref={modalRef3} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Project</h3>
          <form onSubmit={handleExperiance} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formExperiance.title}
        onChange={handleChangeExperiance}
        placeholder="Job Title"
        className="w-full p-3 mt-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="company"
        value={formExperiance.company}
        onChange={handleChangeExperiance}
        placeholder="Company Name"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="address"
        value={formExperiance.address}
        onChange={handleChangeExperiance}
        placeholder="Company Address"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
      <input
        type="text"
        name="date"
        value={formExperiance.date}
        onChange={handleChangeExperiance}
        placeholder="Date (use Start - End)"
        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
      />
     
      <textarea
        placeholder="Description"
        name="description"
        value={formExperiance.description}
        onChange={handleChangeExperiance}
        className="w-full p-3 h-32 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      ></textarea>
      <input
        className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
        type="submit"
        value="Add"
      />
    </form>
        </div>
      </dialog>
      {/* Other modals like modalRef2, modalRef3 would go here */}

      <dialog ref={modalRef4} id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Blog</h3>
          <form onSubmit={handleBlogSubmit} className="space-y-4">
            <input
              type="text"
              name="blogtitle"
              value={blogData.blogtitle}
              onChange={handleBlogChangee}
              placeholder="Your Blog Title"
              className="w-full p-3 mt-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="blogurl"
              value={blogData.blogurl}
              onChange={handleBlogChangee}
              placeholder="Your Blog Image URL"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            {/* Add the Text Editor for Blog Content */}
            <ReactQuill
              value={blogData.content}
              onChange={handleContentChange}
              placeholder="Write your blog content here..."
              className="text-[#f6136e] rounded-md focus:outline-none focus:ring-2"
            />
            <input
              className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Page;
