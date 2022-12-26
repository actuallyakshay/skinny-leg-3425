import createHttpError from "http-errors";
import { ErrorRequestHandler } from "express";

export const errorhandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.send(err.message);
};
