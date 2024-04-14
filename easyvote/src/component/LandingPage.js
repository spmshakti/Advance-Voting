import {React, link} from 'react';
import News2 from './News2';
import Login from './Login';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#9FE5F4] min-h-screen">
      <nav className="p-6 bg-white flex justify-between">
        <h1 className="font-bold text-4xl text-blue-700">EasyVote</h1>
        <div className='font-bold'>
          <NavLink to="contact" className="mx-2">Contact</NavLink>
          <NavLink to="contact" className="mx-2">About</NavLink>
          <NavLink to="contact" className="mx-2">Register</NavLink>
          <button type="submit" className="mx-2 bg-blue-500  px-4 py-2 rounded"><NavLink to="/login" className="text-white">Login</NavLink></button>
        </div>
      </nav>
      <main className="p-6">
        <div className='flex justify-between'>
          <div className='w-[300px] h-[100px]'>
            <p className="font-bold  text-4xl mb-6">Secure Voting Made <span className='text-blue-700'>Simple</span></p>
            <p className="mb-2 font-bold ">Easy Vote will help you to vote online for your constituency</p>
          </div>
          <img src="/familypic.png" className='w-[180px] h-[180px]' alt="pic" />
        </div>
        <div className='mx-auto w-fit items-center'>
          <p className="my-10 font-bold text-3xl text-black mb-12 px-6">Your Vote Is Valuable</p>
          <div className=''>
            <button className="bg-white flex items-center justify-center text-black font-medium rounded-md px-1 py-2 my-3">
                  <img
                    src="/voteIcon.svg"
                    className="w-[50px] h-[50px] pl-2"
                    alt="Google Icon"
                  />
                  <p className='w-[300px] font-bold'>Vote Here</p>
              </button><br></br>
              <button className="bg-white flex items-center justify-center text-black font-medium rounded-md px-1 py-2 my-3">
                  <img
                    src="/partiesIcon.svg"
                    className="w-[50px] h-[50px] pl-2"
                    alt="Google Icon"
                  />
                  <p className='w-[300px] font-bold'>Visit Party</p>
              </button><br></br>
              <button className="bg-white flex items-center justify-center text-black font-medium rounded-md px-1 py-2 my-3">
                  <img
                    src="/searchIcon.svg"
                    className="w-[50px] h-[50px] pl-2"
                    alt="Google Icon"
                  />
                  <p className='w-[300px] font-bold'>Search For Candidate</p>
              </button><br></br>
          </div>
        </div>
        
      </main>
      <div>
        <News2 />
      </div>
    </div>
  );
};

export default LandingPage;
