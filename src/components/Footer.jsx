import React from "react";

function Footer() {
  const [email, setEmail] = React.useState("");

  function subscribe(e) {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <>
      <section className="contact" id="contact">
        <h2>Stay Connected With Us</h2>
        <p>Subscribe to receive fashion updates and offers.</p>

        <form onSubmit={subscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        <p>Email: stylehub@example.com</p>
      </section>

      <footer>
        <h2>StyleHub.</h2>
        <p>Your Fashion, Your Style.</p>
        <p>© 2026 StyleHub. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;