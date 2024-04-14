import React from 'react'

function About() {
  return (
    <div className="bg-green-200 p-8 h-screen">
      <h1 className="text-4xl font-bold mb-6">EasyVote</h1>
      <h2 className="text-3xl mb-4 text-center">About Us</h2>
      
      <section className="mb-6">
        <p>Welcome to EasyVote, where we are on a mission to redefine democracy by making voting accessible to all, anytime and anywhere. Our platform empowers citizens to participate in the electoral process with ease, security, and convenience.</p>
      </section>

      <section className="mb-6">
        <h3 className="font-bold text-xl mb-2">Our Work:</h3>
        <p>At EasyVote, we envision a future where every eligible voter has the ability to exercise their democratic right without barriers. By leveraging cutting-edge technology, we aim to bring the ballot box to your fingertips, ensuring that your voice is heard in every election.</p>
      </section>

      <section className="mb-6">
        <h3 className="font-bold text-xl mb-2">How It Works:</h3>
        <p>EasyVote simplifies the voting process by providing a secure online platform for constituents to cast their votes remotely. Through encrypted connections and robust authentication methods, we ensure the integrity and confidentiality of every ballot.</p>
      </section>

      <section className="">
        <h3 className="font-bold text-xl mb-2">Our Commitment to Security:</h3>
        <p>Security is at the heart of everything we do. Our team of experts is dedicated to implementing industry-leading security measures to safeguard your voting data. From end-to-end encryption to stringent authentication protocols, we prioritize the protection of your democratic right.</p>
      </section>
    </div>
  );
}

export default About
