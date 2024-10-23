import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cone from '../../../assets/image/cone.png';
import torus from '../../../assets/image/torus.png';
import icosahedron from '../../../assets/image/icosahedron.png';
import sphere from '../../../assets/image/sphere.png';
import './Project.css';

type Project = {
  clientsidelink: string;
  description: string;
  liveurl: string;
  projectimageurl: string;
  projectname: string;
  projecttechnology: string;
  serversidelink: string;
};

const Projects = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Fetch the projects on mount
  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
    const fetchProjects = async () => {
      const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getprojects", { cache: "no-store" });
      const { data }: { data: Project[] } = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return (
    <div>
      <section id='project' className="mt-20">
      <div className='content'>
  <h1 data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000" className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10  2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5">MY <span className="text-[#f6136e]">PROJECTS</span></h1>
  </div>

        <div className='flex justify-center mt-10'>
          <div className='bg-[#1c1c1c] min-h-screen'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {projects.map((project) => (
                <article key={project.projectname} className="card__article">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.projectimageurl}
                    alt={project.projectname}
                    className="card__img"
                  />
                  <div className="card__data">
                    <h2 className="card__title font-bold">{project.projectname}</h2>
                    <div className='mb-3 flex items-center gap-5'>
                      <a
                        href={project.liveurl}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="button"
                      >
                        <span className="button__text">Live Site</span>
                        <Image width={1000} height={1000} src={cone} alt="cone" className="button__cone" />
                        <Image width={1000} height={1000} src={torus} alt="torus" className="button__torus" />
                        <Image width={1000} height={1000} src={icosahedron} alt="icosahedron" className="button__icosahedron" />
                        <Image width={1000} height={1000} src={sphere} alt="sphere" className="button__sphere" />
                      </a>
                      <a href={project.clientsidelink} target="_blank" rel="noopener noreferrer">
                        <Image
                          width={1000}
                          height={1000}
                          className='w-12 hover:w-14 hover:border-2 hover:border-pink-600 hover:rounded-full'
                          src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png"
                          alt="GitHub"
                        />
                      </a>
                    </div>
                    <button onClick={() => openModal(project)} className="card__button ml-2">Read More</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h1 className='text-3xl font-bold text-[#f6136e] mb-6'>{selectedProject.projectname}</h1>
              <h3 className="font-bold text-lg">Project Description</h3>
              <p className="py-4">{selectedProject.description}</p>
              <h3 className="font-bold text-lg">Technology</h3>
              <div className='flex flex-wrap gap-2'>
                {selectedProject.projecttechnology.split(',').map((tech) => (
                  <button key={tech} className={`py-1 px-5 border-2 rounded-lg font-bold text-lg  hover:border-2 hover:border-[#f6136e]`}>
                    {tech}
                  </button>
                ))}
              </div>
              <h3 className="font-bold text-lg mt-5">Watch The Code And Live Site</h3>
              <div className='flex gap-5 mt-2'>
                <a href={selectedProject.liveurl} target='_blank' className="button py-2 px-4 rounded text-xs">
                  <span className="button__text items-center">Live Site</span>
                  <Image width={1000} height={1000} src={cone} alt="cone" className="button__cone" />
                  <Image width={1000} height={1000} src={torus} alt="torus" className="button__torus" />
                  <Image width={1000} height={1000} src={icosahedron} alt="icosahedron" className="button__icosahedron" />
                  <Image width={1000} height={1000} src={sphere} alt="sphere" className="button__sphere" />
                </a>
                <a href={selectedProject.clientsidelink} target="_blank" rel="">
                  <button className='py-1 px-3 bg-[#f6136e] text-xs flex items-center gap-3 text-white font-semibold rounded-lg'>
                    <h1 className="text-xs ">Client Side</h1>
                    <Image width={1000} height={1000} className='w-10' src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png" alt="GitHub" />
                  </button>
                </a>
                <a href={selectedProject.serversidelink} target="_blank" rel="">
                  <button className='py-1 px-3 bg-[#f6136e] text-xs flex items-center gap-3 text-white font-semibold  rounded-lg'>
                    <h1  className="text-xs ">Server Side</h1>
                    <Image width={1000} height={1000} className='w-10' src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png" alt="GitHub" />
                  </button>
                </a>
              </div>
              <div className="modal-action">
                <button onClick={closeModal} className="btn">❌</button>
              </div>
            </div>
          </dialog>
        )}
      </section>
    </div>
  );
};

export default Projects;
