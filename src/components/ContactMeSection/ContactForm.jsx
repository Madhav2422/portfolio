import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )

      .then(
        () => {
          form.current.reset();
          setErrorMessage('');
          setIsModalOpen(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      {/* Contact Form */}
      <div className="w-full max-w-lg mx-auto mt-4 p-6 bg-[#0f172a] rounded-2xl shadow-xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-center text-[#88BDBC] mb-6">
            Send Message
          </h2>

          <form ref={form} className="flex flex-col gap-4 w-full" onSubmit={sendEmail}>
            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-lg" htmlFor="from_name">Name</label>
              <input
                id="from_name"
                type="text"
                placeholder="Your Name"
                required
                name="from_name"
                className="h-12 w-full rounded-lg bg-[#88BDBC] bg-opacity-20 px-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#88BDBC]"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-lg" htmlFor="from_email">Email</label>
              <input
                id="from_email"
                type="email"
                placeholder="Your Email"
                required
                name="from_email"
                className="h-12 w-full rounded-lg bg-[#88BDBC] bg-opacity-20 px-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#88BDBC]"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-lg" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                name="message"
                rows="6"
                required
                className="w-full rounded-lg bg-[#88BDBC] bg-opacity-20 px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#88BDBC] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#88BDBC] hover:bg-[#6da8a7] text-white h-12 font-semibold text-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Error message */}
        {errorMessage && (
          <p className="text-red-400 text-center mt-6">{errorMessage}</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Message Sent!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. I’ll get back to you as soon as possible. 😊
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#88BDBC] hover:bg-[#6da8a7] text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
