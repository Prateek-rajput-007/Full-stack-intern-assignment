import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  // Add authentication logic here
  if (username === 'user' && password === 'pass') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  // Add user registration logic here
  res.status(200).json({
    { message: 'User registered successfully' });
   };

