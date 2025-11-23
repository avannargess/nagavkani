export default function Contact() {
  return (
    <section className="page contact">
      <div className="container">
        <h2>Contact</h2>
        <p>For agent queries, press, or general contact, please email: <strong>hello@nagavkani.com</strong></p>
        <p>Or use the form below to send a message (this is a static starter — you'll want to connect a serverless function or form service to handle submissions).</p>

        <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('This starter does not process forms. See README for form setup.'); }}>
          <label>
            Your name
            <input name="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="6"></textarea>
          </label>
          <button className="btn" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}
