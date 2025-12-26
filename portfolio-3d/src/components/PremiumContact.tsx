import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, MessageSquare, CheckCircle, Zap, Handshake, Lightbulb } from "lucide-react";

export default function PremiumContact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check
    const honeypot = formRef.current?.elements.namedItem("company") as HTMLInputElement;
    if (honeypot?.value) return;

    const formData = new FormData(formRef.current as HTMLFormElement);
    const message = formData.get("message") as string;
    const email = formData.get("email") as string;

    if (!message || message.length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }

    const today = new Date().toDateString();
    const lastSentKey = `lastSent_${email}`;
    if (localStorage.getItem(lastSentKey) === today) {
      setError("You have already sent a message today using this email.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        localStorage.setItem(lastSentKey, today);
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setError("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="contact-section relative py-28 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-400/25 blur-[80px] animate-float top-[-120px] left-[-120px]"></div>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/25 blur-[80px] animate-float-delay bottom-[-120px] right-[-120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT - Animated */}
        <div className={`fade-left ${isInView ? 'animate-fadeLeft' : ''}`}>
          <h2 className="connect-title text-5xl md:text-6xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Have a project in mind or want to collaborate?  
            Drop me a message — I'll get back to you.
          </p>

          {/* Feature points with animations */}
          <ul className="connect-points space-y-4">
            <li className="flex items-center gap-3 text-gray-700 animate-slideIn delay-200">
              <Zap className="w-5 h-5 text-purple-600" /> Quick Response
            </li>
            <li className="flex items-center gap-3 text-gray-700 animate-slideIn delay-400">
              <Handshake className="w-5 h-5 text-purple-600" /> Open to Collaboration
            </li>
            <li className="flex items-center gap-3 text-gray-700 animate-slideIn delay-600">
              <Lightbulb className="w-5 h-5 text-purple-600" /> Idea → Execution
            </li>
          </ul>
        </div>

        {/* FORM CARD - Premium styling */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`contact-card bg-white rounded-2xl shadow-2xl p-8 space-y-5 transition-all duration-400 ${isInView ? 'animate-fadeRight' : ''}`}
        >
          <Input icon={<User />} name="name" placeholder="Your Name" required />
          <Input icon={<Mail />} name="email" placeholder="Your Email" type="email" required />
          <Input icon={<Phone />} name="phone" placeholder="Phone Number" />
          <Textarea icon={<MessageSquare />} name="message" placeholder="Your Message" required />

          {/* Honeypot field - hidden from users but visible to bots */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {/* Error Display */}
          {error && (
            <div className="text-red-600 text-sm text-center animate-shake">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className={`send-btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-full text-lg transition-all duration-300 relative overflow-hidden group ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>

          {sent && (
            <div className="flex items-center justify-center gap-2 text-green-600 animate-bounce">
              <CheckCircle /> Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Input({ icon, ...props }: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="input-group flex items-center gap-3 border rounded-lg px-4 py-3 transition-all duration-300">
      <span className="text-purple-600 transition-transform duration-300">{icon}</span>
      <input
        {...props}
        className="contact-input w-full outline-none"
      />
    </div>
  );
}

function Textarea({ icon, ...props }: { icon: React.ReactNode } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="input-group flex gap-3 border rounded-lg px-4 py-3 transition-all duration-300">
      <span className="text-purple-600 mt-1 transition-transform duration-300">{icon}</span>
      <textarea
        {...props}
        className="contact-input w-full outline-none resize-none h-28"
      />
    </div>
  );
}