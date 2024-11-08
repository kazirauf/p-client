import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";

type Skill = {
  _id: string;
  skillurl: string;
  skillname: string;
};

const DashboardSkill = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [updatedSkillName, setUpdatedSkillName] = useState("");
  const [updatedSkillUrl, setUpdatedSkillUrl] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getskills", {
          cache: "no-store",
        });
        const result = await res.json();
        if (result.success) {
          setSkills(result.data);
        } else {
          console.error("Error: No skills data found");
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (skillId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/skillsdelete/${skillId}`, {
            method: "DELETE",
          });
          const responseData = await res.json();
          if (res.ok && responseData.success) {
            setSkills((prevSkills) => prevSkills.filter((skill) => skill._id !== skillId));
            Swal.fire("Deleted!", "Your skill has been deleted.", "success");
          } else {
            throw new Error(responseData.message || "Failed to delete the skill.");
          }
        } catch (error) {
          console.error("Error deleting skill:", error);
          Swal.fire("Error", "An error occurred while trying to delete the skill.", "error");
        }
      }
    });
  };

  const handleUpdateClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setUpdatedSkillName(skill.skillname);
    setUpdatedSkillUrl(skill.skillurl);
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedSkill) return;

    try {
      const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/skillsupdate/${selectedSkill._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skillname: updatedSkillName, skillurl: updatedSkillUrl }),
      });
      const responseData = await res.json();
      if (res.ok && responseData.success) {
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill._id === selectedSkill._id ? { ...skill, skillname: updatedSkillName, skillurl: updatedSkillUrl } : skill
          )
        );
        Swal.fire("Updated!", "Your skill has been updated.", "success");
        modalRef.current?.close();
        setSelectedSkill(null);
      } else {
        throw new Error(responseData.message || "Failed to update the skill.");
      }
    } catch (error) {
      console.error("Error updating skill:", error);
      Swal.fire("Error", "An error occurred while trying to update the skill.", "error");
    }
  };

  return (
    <div>
      <div>
        <div id="skills">
          <h1
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-3 md:text-3xl md:mb-10 md:ml-5 text-2xl pt-36 ml-5"
          >
            MY <span className="text-[#f6136e]">SKILLS</span>
          </h1>

          <div className="flex justify-center flex-wrap items-center gap-10">
            {skills.map((skill) => (
              <div key={skill._id} className="flex flex-col justify-center items-center gap-3 border-2 border-gray-500 rounded w-52 p-5">
                <Image className="w-24 h-24" src={skill.skillurl} alt={skill.skillname} width={1000} height={1000} />
                <h3 className="font-medium text-xl text-[#f6136e]">{skill.skillname}</h3>
                <div className="card-actions justify-around mt-5">
                  <button onClick={() => handleDelete(skill._id)} className="btn bg-red-500 text-white rounded font-bold text-sm">
                    DELETE NOW
                  </button>
                  <button onClick={() => handleUpdateClick(skill)} className="btn bg-green-500 text-white rounded font-bold text-sm">
                    Update NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <dialog ref={modalRef} id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Update Skill</h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="skillname"
              value={updatedSkillName}
              onChange={(e) => setUpdatedSkillName(e.target.value)}
              placeholder="Skill Name"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              type="text"
              name="skillurl"
              value={updatedSkillUrl}
              onChange={(e) => setUpdatedSkillUrl(e.target.value)}
              placeholder="Skill Image URL"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
            />
            <input
              className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e] transition duration-200"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DashboardSkill;
