import { NextApiRequest, NextApiResponse } from 'next';
import authenticate from '../../middlewares/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is secured data', user: req.user });
};

export default authenticate(handler);
