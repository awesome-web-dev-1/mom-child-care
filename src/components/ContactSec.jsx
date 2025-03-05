import {IoCall, IoLocation, IoMailOpenSharp } from "react-icons/io5"
import { useState } from "react";
const ContactSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
return (
<>
    {/* Contact */}
    <section className="section bg-[#FCFBF7]">
    <div className="container grid gap-16 md:gap-[153px] md:grid-cols-2">
        <div>
        <h2 className="title">Contact Info</h2>
        <p className="text mt-2 mb-7 max-w-[318px]">We are here to support you on your journey with baby childcare.</p>
        <div className="grid gap-[41px]">
            <div className="flex gap-4">
            <span className="text-[#00715D] text-[24px]">
                <IoCall />
            </span>
            <div className="grid">
                <span className="font-semibold">Phone</span>
                <p>
                <a href="tel:+44545989626" className="hover:text-[#00715D] transition-colors">+44 545 989 626</a>
                </p>
            </div>
            </div>
            <div className="flex gap-4">
            <span className="text-[#00715D] text-[24px]">
                <IoMailOpenSharp />
            </span>
            <div className="grid">
                <span>text Address</span>
                <p>
                <a href="mailto:youremail@example.com" className="hover:text-[#00715D] transition-colors">youremail@example.com</a>
                </p>
            </div>
            </div>
            <div className="flex gap-4">
            <span className="text-[#00715D] text-[24px]">
                <IoLocation />
            </span>
            <div className="grid">
                <span>Location</span>
                <p>28 Green Tower, Street Name New York City, USA.</p>
            </div>
            </div>
        </div>
        </div>
        <div>
        <form onSubmit={handleSubmit} className="grid gap-5">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        
        <div className="input-field">
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Your Name" 
            required 
            value={formData.name} 
            onChange={handleChange}
            />
        </div>
        <div className="input-field">
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email Address" 
            required 
            value={formData.email} 
            onChange={handleChange}
            />
        </div>
        <div className="input-field">
            <input 
            type="text" 
            name="subject" 
            id="subject" 
            placeholder="Subject" 
            required 
            value={formData.subject} 
            onChange={handleChange}
            />
        </div>
        <textarea 
            name="message" 
            id="message" 
            placeholder="Message" 
            className="h-[114px] border border-[#D9DADB] py-4 px-6 resize-none"
            required 
            value={formData.message} 
            onChange={handleChange}
        ></textarea>
        
        <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
        </button>
        </form>
    </div>
    </div>
    </section>
</>
)
}

export default ContactSec