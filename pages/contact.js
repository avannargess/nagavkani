import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      <h2>Contact Me</h2>
      <p classname= "lead"> info@nagavkani.com <br/>
      avan.nargess@gmail.com </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '10px', background: '#222', color: '#fff', border: '1px solid #555' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '10px', background: '#222', color: '#fff', border: '1px solid #555' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: '10px', background: '#222', color: '#fff', border: '1px solid #555' }}
        />
        <button
          type="submit"
          style={{ padding: '10px', background: '#555', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Send
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}

