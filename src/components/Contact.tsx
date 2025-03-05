import { useRef, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const { toast } = useToast();
  const contactRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
    name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    
    // Send email using EmailJS service
    emailjs.send(
      "service_g8gcp1f", // Replace with your service ID from EmailJS
      "template_fbswbkl", // Replace with your template ID from EmailJS
      templateParams,
      "r_isZ0Y0qZQxAab8s" // Replace with your user ID from EmailJS
    )
    .then(
      (response) => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
      },
      (error) => {
        setIsSubmitting(false);
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
        });
      }
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary" ref={contactRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)} 
          className="opacity-0 translate-y-10 transition-all duration-700 delay-100 mb-12 text-center"
        >
          <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">Let's work together</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div 
            ref={(el) => (sectionsRef.current[1] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 delay-200 space-y-6"
          >
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Have a project in mind or just want to chat? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-background/80 p-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-muted-foreground">+91 (8707018191)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-background/80 p-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-muted-foreground">sayyedfaiz336@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={(el) => (sectionsRef.current[2] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

