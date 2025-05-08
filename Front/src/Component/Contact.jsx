import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from '../Pages/Footer';
import { useForm } from "react-hook-form";
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Message as MessageIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const collectData = async (data) => {
    try {
      const res = await fetch("http://localhost:5011/contact", {
        method: "POST",
        body: JSON.stringify({
          userName: data.userName,
          email: data.email,
          password: data.password,
          message: data.message
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      if (result) {
        toast.success("Message sent successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="text-blue-500 text-3xl" />,
      title: "Call Us",
      info: "+92 320 2376159",
      action: "tel:+923202376159"
    },
    {
      icon: <EmailIcon className="text-blue-500 text-3xl" />,
      title: "Email Us",
      info: "aliasghargh540@gmail.com",
      action: "mailto:aliasghargh540@gmail.com"
    },
    {
      icon: <LocationIcon className="text-blue-500 text-3xl" />,
      title: "Visit Us",
      info: "Kaltar pur muhala Kandiaro , Sindh",
      action: "https://maps.google.com"
    }
  ];

  return (
    <>
      <div className='relative flex items-center justify-center h-96 bg-center bg-cover' style={{backgroundImage: "url('/Image/tr3.jpg')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Our Team</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries or travel advice.
          </p>
          <Link to="/">
            <button className='text-white bg-transparent border-2 border-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'>
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            data-aos="fade-right"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit(collectData)} className="space-y-6 bg-slate-100 p-6 rounded-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PersonIcon className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="User Name" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  {...register("userName", { required: "Name is required" })}
                />
                {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EmailIcon className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Your Password" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3">
                  <MessageIcon className="text-gray-400" />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div 
            data-aos="fade-left"
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Other Ways to Connect
            </h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {method.title}
                    </h3>
                    <a 
                      href={method.action} 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {method.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM -  8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Close</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622341.715200987!2d67.0301099!3d27.987731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Our Location"
            className="filter grayscale-0 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
      <Footer />
    </>
  );
}

export default Contact;