import React, { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  MapPin,
  Phone,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully! ");
        setSent(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message ❌ Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-slate text-lg">
              I’m actively exploring new opportunities and open to meaningful
              conversations. Whether you have a question, a project idea, or
              would like to collaborate, feel free to reach out through the
              channels below.
            </p>

            {/* Connect */}
            <div className="bg-navy-light rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Let’s Connect
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:rajkumar68580@gmail.com"
                  className="flex items-center text-slate hover:text-teal transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <span className="text-sm">rajkumar68580@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Raajj-Kumar-Sah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate hover:text-teal transition-colors"
                >
                  <Github className="mr-3" size={20} />
                  <span className="text-sm">
                    github.com/Raajj-Kumar-Sah
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/raj-kumar-sah-470323308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate hover:text-teal transition-colors"
                >
                  <Linkedin className="mr-3" size={20} />
                  <span className="text-sm">
                    linkedin.com/in/raj-kumar-sah
                  </span>
                </a>

                <a
                  href="https://leetcode.com/u/rajkumar68580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate hover:text-teal transition-colors"
                >
                  <Code className="mr-3" size={20} />
                  <span className="text-sm">
                    leetcode.com/u/rajkumar68580
                  </span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-navy-light rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-center text-slate">
                  <MapPin className="mr-3" size={20} />
                  <span className="text-sm">
                    Lucknow, Uttar Pradesh, India
                  </span>
                </div>

                <a
                  href="tel:+919341961490"
                  className="flex items-center text-slate hover:text-teal transition-colors"
                >
                  <Phone className="mr-3" size={20} />
                  <span className="text-sm">+91 9341961490</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-navy-light rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              {/* Auto subject field (hidden) */}
              <input
                type="hidden"
                name="subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                disabled={sent}
                className="w-full rounded bg-navy-dark px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-60"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                disabled={sent}
                className="w-full rounded bg-navy-dark px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-60"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                disabled={sent}
                className="w-full rounded bg-navy-dark px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-60"
              />

              {/* reCAPTCHA READY (plug later) */}
              {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" /> */}

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full bg-teal text-navy-dark font-medium py-3 rounded hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : sent ? (
                  "Message Sent ✔"
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
