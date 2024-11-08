import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

type Project = {
  _id: string;
  clientsidelink: string;
  description: string;
  liveurl: string;
  projectimageurl: string;
  projectname: string;
  projecttechnology: string;
  serversidelink: string;
};

const DashboardProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    projectname: "",
    description: "",
    clientsidelink: "",
    serversidelink: "",
    liveurl: "",
    projecttechnology: "",
    projectimageurl: ""
  });
  const modalRef3 = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getprojects", { cache: "no-store" });
        const { data }: { data: Project[] } = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/deleteproject/${projectId}`, {
              method: "DELETE"
            });
            const responseData = await res.json();

            if (res.ok && responseData.success) {
              setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "The project has been deleted.",
                icon: "success"
              });
            } else {
              throw new Error(responseData.message || "Failed to delete the project.");
            }
          } catch (error) {
            console.error("Error deleting project:", error);
            swalWithBootstrapButtons.fire({
              title: "Error",
              text: "An error occurred while trying to delete the project.",
              icon: "error"
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your project is safe :)",
            icon: "error"
          });
        }
      });
  };
  const handleUpdateClick = (project: Project) => {
    setSelectedProject(project);
    setFormData({
      projectname: project.projectname,
      description: project.description,
      clientsidelink: project.clientsidelink,
      serversidelink: project.serversidelink,
      liveurl: project.liveurl,
      projecttechnology: project.projecttechnology,
      projectimageurl: project.projectimageurl
    });
    modalRef3.current?.showModal(); // Show the modal
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProject) {
      try {
        const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/projectsupdate/${selectedProject._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        const updatedData = await res.json();
        if (res.ok && updatedData.success) {
          setProjects((prevProjects) =>
            prevProjects.map((project) => (project._id === selectedProject._id ? { ...project, ...formData } : project))
          );
          Swal.fire("Updated!", "The project has been updated.", "success");
          modalRef3.current?.close();
        } else {
          throw new Error(updatedData.message || "Failed to update the project.");
        }
      } catch (error) {
        console.error("Error updating project:", error);
        Swal.fire("Error", "An error occurred while updating the project.", "error");
      }
    }
  };

  return (
    <>
      <div className='content'>
        <h1 className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">
          MY <span className="text-[#f6136e]">PROJECTS</span>
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {projects.map((project) => (
          <div key={project._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <Image src={project.projectimageurl} alt="project" width={1000} height={1000} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.projectname}</h2>
              <div className="card-actions justify-around mt-5">
                <button
                  onClick={() => handleDelete(project._id)}
                  className="btn bg-red-500 text-white rounded font-bold text-sm">
                  DELETE NOW
                </button>
                <button
                  onClick={() => handleUpdateClick(project)}
                  className="btn bg-green-500 text-white rounded font-bold text-sm">
                  Update NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Update */}
      <dialog ref={modalRef3} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <button
              onClick={() => modalRef3.current?.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Update Project</h3>
            <input
              type="text"
              name="projectname"
              value={formData.projectname}
              onChange={handleFormChange}
              placeholder="Project Name"
              className="w-full p-3 mt-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              placeholder="Description"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="clientsidelink"
              value={formData.clientsidelink}
              onChange={handleFormChange}
              placeholder="Client Side Link"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="serversidelink"
              value={formData.serversidelink}
              onChange={handleFormChange}
              placeholder="Server Side Link"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="liveurl"
              value={formData.liveurl}
              onChange={handleFormChange}
              placeholder="Live URL"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="projecttechnology"
              value={formData.projecttechnology}
              onChange={handleFormChange}
              placeholder="Technologies Used"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="projectimageurl"
              value={formData.projectimageurl}
              onChange={handleFormChange}
              placeholder="Image URL"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="submit"
              value="Update Project"
              className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DashboardProjects;
