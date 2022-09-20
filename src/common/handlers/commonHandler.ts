import { NextApiRequestExtended } from '@ts/common';
import { verify } from 'jsonwebtoken';
import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export default nextConnect<NextApiRequestExtended, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({
      error: true,
      message: `Something Went Wrong! ${error.message}`,
      data: [],
    });
  },
  onNoMatch(req, res) {
    res.status(405).json({
      error: true,
      message: `Method ${req.method} Not Allowed`,
      data: [],
    });
  },
}).use((req, res, next) => {
  req.user = {
    userId: null,
    userName: null,
  };
  const { authorization } = req.headers;
  if (!authorization) {
    next(); // go to next middleware
  } else {
    verify(authorization, `${process.env.SECRET}`, (error: any, decoded: any) => {
      if (!error && decoded) {
        req.user = {
          userId: decoded.user.userId,
          userName: decoded.user.userName,
        };
      }
      next();
    });
  }
});
