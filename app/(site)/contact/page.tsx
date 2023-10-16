import ContactCard from "../components/contactCard";

const Contact = () => {
  return (
    <div className="mb-15">
      <h2 className="m-5 text-bold text-gray-700 text-3xl">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-2">
        <ContactCard
          name="GitHub"
          href="https://github.com/LordHarsh"
          image="/github.png"
          description="Checkout my gitHub."
        />

        <ContactCard
          name="LinkedIn"
          href="https://www.linkedin.com/in/harsh-banka/"
          image="/linkedin.png"
          description="Let's connect on LinkedIn."
        />

        <ContactCard
          name="Email"
          href="mailto:harsh.banka@example.com"
          image="/email.png"
          description="Send me an email."
        />

        <ContactCard
          name="Instagram"
          href="https://www.instagram.com/_harsh_banka_/"
          image="/instagram.png"
          description="Follow me on Insta."
        />
      </div>
    </div>
  );
};

export default Contact;
