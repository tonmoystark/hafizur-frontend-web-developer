import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ConfettiFireworks } from "../ui/ConfettiFireworks";
import { MagicCard } from "../ui/MagicCard";

const ContactContainer = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isFormValid =
    formData.user_name.trim() !== "" &&
    formData.user_email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || !isFormValid) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
      );

      setSuccessMessage(
        "Message sent successfully! We will get back to you soon.",
      );

      setShowConfetti(true); // 🎉 This will now trigger confetti automatically

      formRef.current.reset();
      setFormData({ user_name: "", user_email: "", message: "" });

      setTimeout(() => {
        setSuccessMessage("");
        setShowConfetti(false);
        setLoading(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col px-10 lg:px-0 justify-center items-center relative"
    >
      <h2 className="text-lg text-slate-400">Connect with me</h2>
      <h1 className="text-3xl py-2 font-bold">Get in touch</h1>
      <p className="mb-7 text-center text-sm text-slate-400 lg:w-[35%] lg:text-base">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <MagicCard className="rounded-xl">
        <div className="lg:p-8 p-5 sm:w-112.5 lg:w-full">
          <form ref={formRef} onSubmit={submitHandler}>
            <div className="flex gap-2 lg:flex-row flex-col">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your Name"
                value={formData.user_name}
                onChange={handleChange}
                className="border outline-none border-slate-600 w-full px-4 py-2 rounded-xl text-white"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter Your Email"
                value={formData.user_email}
                onChange={handleChange}
                className="border outline-none border-slate-600 w-full px-4 py-2 rounded-xl text-white"
              />
            </div>

            <textarea
              name="message"
              required
              placeholder="Share Your Idea"
              value={formData.message}
              onChange={handleChange}
              className="border outline-none border-slate-600 w-full px-4 h-40 py-2 rounded-xl text-white mt-5"
            />

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isFormValid || loading
                  ? "bg-slate-600 cursor-not-allowed"
                  : "bg-linear-to-r from-cyan-500 to-blue-500 hover:scale-[1.02]"
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

      {/* 🎉 Confetti renders automatically when showConfetti is true */}
      {showConfetti && <ConfettiFireworks />}
    </div>
  );
};

export default ContactContainer;
