import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { MagicCard } from "../ui/MagicCard";
import { ConfettiFireworks } from "../ui/ConfettiFireworks";


interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const isFormValid =
    formData.user_name.trim() &&
    formData.user_email.trim() &&
    formData.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setLoading(true);

      // 🔥 Replace this with EmailJS / backend integration
      await new Promise((res) => setTimeout(res, 1500));

      setSuccessMessage("Message sent successfully 🎉");
      setShowConfetti(true);

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setTimeout(() => {
        setShowConfetti(false);
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-20 bg-linear-to-b from-slate-800 via-rose-950/50 to-slate-800 py-24   mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-sm tracking-widest text-sky-400 uppercase">
          Connect With Me
        </h2>

        <h1 className="text-3xl lg:text-4xl font-bold text-slate-100 mt-2">
          Get in Touch
        </h1>

        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          I'd love to hear from you! If you have any questions, comments,
          or feedback, feel free to send a message.
        </p>
      </div>

      {/* Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
        {/* LEFT: Form */}
        <div className="w-full lg:w-175">
          <MagicCard className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="p-6 lg:p-10">
              <form ref={formRef} onSubmit={submitHandler}>
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter your name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-emerald-400 outline-none px-4 py-3 rounded-xl text-slate-200 placeholder-slate-400 transition"
                  />

                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Enter your email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-emerald-400 outline-none px-4 py-3 rounded-xl text-slate-200 placeholder-slate-400 transition"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  placeholder="Share your idea"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-emerald-400 outline-none px-4 py-3 rounded-xl text-slate-200 placeholder-slate-400 transition mt-5 h-40 resize-none"
                />

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    !isFormValid || loading
                      ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                      : "bg-linear-to-r from-cyan-500 to-blue-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 text-white"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {successMessage && (
                  <p className="text-green-400 text-sm mt-4 text-center">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </MagicCard>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="w-full lg:w-1/3 space-y-6">
          <a
            href="mailto:tonmoy.a009@gmail.com"
            className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-sky-400 hover:bg-white/10 transition group"
          >
            <Mail className="text-sky-400 group-hover:scale-110 transition" />
            <span className="text-slate-200">
              tonmoy.a009@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-sky-400 hover:bg-white/10 transition group">
            <Phone className="text-sky-400" />
            <span className="text-slate-200">
              +880 1700-962184
            </span>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/tonmoystark"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-sky-400 hover:bg-white/10 transition"
            >
              <Github className="text-slate-200 hover:text-white transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/md-hafizur-rahman-69b723258/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-sky-400 hover:bg-white/10 transition"
            >
              <Linkedin className="text-slate-200 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {showConfetti && <ConfettiFireworks />}
    </section>
  );
}