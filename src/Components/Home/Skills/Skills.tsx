import Image from "next/image";
import './Skills.css';
import { useEffect, useState } from "react";

type Skill = {
    _id: string;
    skillurl: string;
    skillname: string;
};

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("https://next-level-p-k-server.vercel.app/api/v1/getskills", {
                    cache: "no-store"
                });
                const result = await res.json();
                console.log(result);  // Check the API response in the console
                if (result.success) {
                    setSkills(result.data);  // Access the `data` field in the response
                } else {
                    console.error("Error: No skills data found");
                }
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        fetchSkills();
    }, []);

    return (
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
                {/* <div className="banner">
                    <div 
                        className="slider" 
                        style={{ '--quantity': skills.length } as React.CSSProperties}
                    >
                        {skills.map((skill, index) => (
                            <div 
                                key={skill._id} 
                                className="item" 
                                style={{ '--position': index + 1 } as React.CSSProperties}
                            >
                                <Image 
                                    width={1000} 
                                    height={1000} 
                                    src={skill.skillurl} 
                                    alt={skill.skillname || "Skill"} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="content">
                        <h1 
                            data-aos="fade-right"  
                            data-aos-easing="linear"
                            data-aos-duration="1500" 
                            data-content="SKILLS"
                        >
                            SKILLS
                        </h1>
                        <div className="author">
                            <h2>DEV TOOLS</h2>
                            <p>Figma | VS Code | Git | NPM | Netlify | Firebase | Vercel</p>
                        </div>
                        <div className="model"></div>
                    </div>
                </div> */}
                <div className="flex justify-center flex-wrap items-center gap-10">
                {skills.map((skill) => (
                               <div key={skill._id} className="flex flex-col justify-center items-center gap-3 border-2 border-gray-500 rounded w-52 p-5">
                               <Image className="w-24 h-24 " src={skill.skillurl} alt="css" width={1000} height={1000}/>
                               <h3 className="font-medium text-xl text-[#f6136e]">{skill.skillname}</h3>
                           </div>
                        ))}
                
                </div>
            </div>
        </div>
    );
};

export default Skills;
