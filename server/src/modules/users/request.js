import Joi from 'joi';
import httpStatus from 'http-status';
import response from '../../helper/response';

const rule = (method) => {
  let rule = null;
  if (method === 'POST') {
    rule = {
      email: Joi.string().email().required(),
      // phone: Joi.string().required().regex(/09|01|06\d{8}/),
      password: Joi.string().required().min(6),
      // avatar: Joi.string().default(''),
      roles: Joi.array(),
      // username: Joi.string(),
    };
  }
  return rule;
};

export default (req, res, next) => {
  const { error } = Joi.validate(req.body, rule(req.method));
  if (error) {
    return res.status(httpStatus.BAD_REQUEST)
      .send(response.error(
        httpStatus.BAD_REQUEST,
        error.details[0].message,
      ));
  }
  next();
};

