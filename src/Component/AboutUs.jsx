import React from 'react';

const AboutUs = () => {
    return (
      <section className="p-6">
      <div className="container max-w-xl mx-auto">
        <div className="flex flex-col items-center w-full  space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
          <img src="https://scontent.fdac127-1.fna.fbcdn.net/v/t39.30808-6/423555335_2142843209402260_4177588908120714809_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExahkmSoMaqBC2k3kWLloIXvFIbO2wfble8Uhs7bB9uZy8R_icwZq8uJapy089uhRz0vtMozcPLc8btsSLQk_M&_nc_ohc=z_18kLH9CP8Q7kNvgGJXL7W&_nc_ht=scontent.fdac127-1.fna&oh=00_AYCEioLSxPAC_sRHDElzk4a3trK1ewQDsbnf8SolBnJerQ&oe=669AC5B1" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">"Success isn't just about talent; it's about tenacity, persistence, and the willingness to put in the hard work!"</blockquote>
          <div className="text-center dark:text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
            <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
            <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
            <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutUs;