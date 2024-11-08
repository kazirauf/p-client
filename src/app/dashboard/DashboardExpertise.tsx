import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

interface Experience {
  _id: string;
  address: string;
  company: string;
  date: string;
  description: string;
  title: string;
}

const DashboardExpertise = () => {
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [form, setForm] = useState({
    title: "",
    company: "",
    date: "",
    address: "",
    description: ""
  });

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getexperience", {
          cache: "no-store"
        });
        const data = await res.json();
        setExperienceData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  const handleDelete = (id: string) => {
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/experiencedelete/${id}`, {
            method: "DELETE"
          });
          const result = await res.json();
          if (result.success) {
            setExperienceData((prevData) => prevData.filter((experience) => experience._id !== id));
            swalWithBootstrapButtons.fire("Deleted!", "Your experience has been deleted.", "success");
          } else {
            alert(result.message || "Failed to delete experience");
          }
        } catch (error) {
          console.error("Error deleting experience:", error);
          swalWithBootstrapButtons.fire("Error", "An error occurred while trying to delete the experience.", "error");
        }
      }
    });
  };

  const openUpdateModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setForm({
      title: experience.title,
      company: experience.company,
      date: experience.date,
      address: experience.address,
      description: experience.description
    });
    modalRef.current?.showModal();
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExperience) return;

    try {
      const res = await fetch(`https://next-level-p-k-server.vercel.app/api/v1/experienceupdate/${selectedExperience._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await res.json();
      if (result.success) {
        setExperienceData((prevData) =>
          prevData.map((exp) => (exp._id === selectedExperience._id ? { ...exp, ...form } : exp))
        );
        Swal.fire("Updated!", "Your experience has been updated.", "success");
        modalRef.current?.close();
      } else {
        Swal.fire("Failed to Update", result.message || "Failed to update experience", "error");
      }
    } catch (error) {
      console.error("Error updating experience:", error);
      Swal.fire("Error", "An error occurred while trying to update the experience.", "error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div>
      <section id="Expertise" className="bg-[#1c1c1c]">
        <h1 className="text-5xl font-bold text-white pt-36 ml-5">
          Work <span className="text-[#f6136e]">Experience</span>
        </h1>
        <div className="flex justify-center flex-wrap gap-10">
          {experienceData.map((experience) => (
            <div key={experience._id} className="flex justify-center pt-20">
              <div className="card bg-zinc-800 text-neutral-content text-white shadow-2xl max-w-sm rounded-md mb-4">
                <div className="card-body p-7">
                  <h2 className="card-title text-xl font-bold text-[#f6136e]">{experience.title}</h2>
                  <h2 className="card-title text-lg font-bold text-[#f6136e]">{experience.company}</h2>
                  <h2 className="card-title text-sm font-bold text-[#f6136e]">{experience.date}</h2>
                  <h2 className="card-title text-xs font-bold text-[#f6136e]">{experience.address}</h2>
                  <p>{experience.description}</p>
                  <div className="card-actions justify-around mt-5">
                    <button onClick={() => handleDelete(experience._id)} className="btn bg-red-500 text-white rounded font-bold text-sm">
                      DELETE NOW
                    </button>
                    <button onClick={() => openUpdateModal(experience)} className="btn bg-green-500 text-white rounded font-bold text-sm">
                      Update NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Update Modal */}
        <dialog ref={modalRef} id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={handleUpdate} className="space-y-4">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current?.close()}>
                ✕
              </button>
              <h3 className="font-bold text-lg">Update Experience</h3>
              <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-3 bg-gray-800 text-white rounded-md" />
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full p-3 bg-gray-800 text-white rounded-md" />
              <input type="text" name="date" value={form.date} onChange={handleChange} placeholder="Date" className="w-full p-3 bg-gray-800 text-white rounded-md" />
              <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full p-3 bg-gray-800 text-white rounded-md" />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-3 h-32 bg-gray-800 text-white rounded-md"></textarea>
              <input className="w-full p-3 bg-[#f6136e] text-white rounded-md hover:bg-[#f6136e]" type="submit" value="Update" />
            </form>
          </div>
        </dialog>
      </section>
    </div>
  );
};

export default DashboardExpertise;
