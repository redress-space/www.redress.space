import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    const data: any = await res.json();

    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error);
    }
  };

  const handleVerify = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div>
      <h1>Join the Waitlist</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <h2>Verify your email</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your verification code"
          required
        />
        <button type="submit">Verify</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
