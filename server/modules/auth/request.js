import Joi from 'joi';
import httpStatus from 'http-status';
import response from '../../helper/response';

const rule = (method) => {
    let rule = null;
    if (method === 'POST') {
        rule = {
            username: Joi.string().required(),
            password: Joi.string().required(),
        };
    }
    return rule;
};

export default (req, res, next) => {
    const { error } = Joi.validate(req.body, rule(req.method));
    if (error) {
        return res.status(httpStatus.BAD_REQUEST)
          .send(response.fail(
            httpStatus.BAD_REQUEST,
            error.details[0].message,
          ));
    }
    next();
};
