import { MutableRefObject, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import user from "../../../assets/profile.png";
import Image from 'next/image';

const Login = () => {
    const modalRef1 = useRef<HTMLDialogElement | null>(null);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter(); // Initialize useRouter
  
    const handleOpenModal = (modalRef: MutableRefObject<HTMLDialogElement | null>) => {
      if (modalRef.current) {
        modalRef.current.showModal(); // Open the specific modal
      }
    };
  
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission
      if (email === 'raufelahi9876@gmail.com' && password === 'kaizf') {
        router.push('/dashboard'); // Redirect to dashboard on successful login
      } else {
        alert('Invalid email or password'); // Alert for invalid credentials
      }
    };
  
    return (
        <div>
            <button  onClick={() => handleOpenModal(modalRef1)}   className="menu-item text-center text-[#c32865] font-bold mb-2" >
          Login
        </button>
              
               <dialog ref={modalRef1} id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-[#f6136e] text-xl text-center">Login Now</h3>
          <div className='flex justify-center my-5'>
            <Image className='w-36' src={user} alt='' width={1000} height={1000} />
          </div>
          <form className="space-y-4 mt-3" onSubmit={handleLogin}>
            <h3 className='font-bold'>Email</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 my-5 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <h3 className='font-bold'>Password</h3>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:bg-[#f6136e]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <div className="modal-action">
              <button type="submit" className="btn bg-[#f6136e] hover:bg-[#f6136e]/90">Login</button>
              <button type="button" className="btn" onClick={() => modalRef1.current?.close()}>Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
        </div>
    );
};

export default Login;