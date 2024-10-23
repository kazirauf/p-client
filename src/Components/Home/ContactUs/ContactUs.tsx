/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from "next/image";
import Swal from "sweetalert2";
import img from "../../../assets/image/WhatsApp Image 2024-01-06 at 15.07.57_29555a67-fotor-bg-remover-2024060902512.png";
const ContactUs = () => {
   
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "06dad70c-7739-42a4-a0b3-5427272b2bae");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            const form = event.currentTarget; // Store a reference to the form

            Swal.fire({
                title: "Your Message is successfully sent",
                width: 600,
                padding: "3em",
                color: "#f6136e",
                background: "#f6136e url(https://media.tenor.com/i6ZydtpnJEAAAAAM/happy.gif)",
                backdrop: `
               
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            }).then(() => {
                // Reset the form after the alert is closed
                window.location.reload(); // Use the stored reference to reset the form
            });
        }
    }
    return (
        <div>
              <div id="contact" className="bg-[#1c1c1c]">
            <h1
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="2xl:text-5xl lg:text-4xl font-bold text-white 2xl:mb-20 lg:mb-10 2xl:ml-20 lg:ml-16 md:text-3xl md:mb-10 md:ml-5 text-3xl pt-36 ml-5"
            >
                CONTACT <span className="text-[#f6136e]">ME</span>
            </h1>

            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row items-center 2xl::ml-52 text-white p-6">
                    <div className="md:w-1/2 p-4">
                        <Image width={1000} height={1000} src={img} alt="Profile" className="rounded-md max-w-sm" />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <form  onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                name="message"
                                className="w-full p-3 h-32 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                            <input
                                className="w-full p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200"
                                type="submit"
                                value="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;