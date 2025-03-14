import mongoose from 'mongoose';
import { HTTP_404_MSG, HTTP_500_MSG } from 'messages/httpErrorMsg';

const { DocumentNotFoundError, CastError } = mongoose.Error;

export default (err, req, res, next) => {
  switch (true) {
    case err instanceof DocumentNotFoundError:
    case err instanceof CastError:
      return res.status(404).send(HTTP_404_MSG);
    default:
      return res.status(500).send(HTTP_500_MSG);
  }
};
