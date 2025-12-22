import { useState } from "react";
import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

export default function PremiumContact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="animate-slideLeft">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to collaborate?  
            Drop me a message — I’ll get back to you.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 space-y-5 animate-slideUp"
        >
          <Input icon={<User />} placeholder="Your Name" />
          <Input icon={<Mail />} placeholder="Your Email" type="email" />
          <Input icon={<Phone />} placeholder="Phone Number" />
          <Textarea icon={<MessageSquare />} placeholder="Your Message" />

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-lg transition">
            Send Message
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
    <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
      <span className="text-purple-600">{icon}</span>
      <input
        {...props}
        className="w-full outline-none"
        required
      />
    </div>
  );
}

function Textarea({ icon, ...props }: { icon: React.ReactNode } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex gap-3 border rounded-lg px-4 py-3">
      <span className="text-purple-600 mt-1">{icon}</span>
      <textarea
        {...props}
        className="w-full outline-none resize-none h-28"
      />
    </div>
  );
}