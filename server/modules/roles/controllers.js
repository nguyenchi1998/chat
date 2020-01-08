import { connect } from '../../config/database';
import httpStatus from 'http-status';
import response from '../../helper/response';
import services from './services';

export default {
    getRoles: async (req, res) => {
        try {
            await connect;
            const users = await services.getRoles();
            res.status(httpStatus.OK)
                .send(response.success(httpStatus.OK, 'Success', users));
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR)
                .send(response.fail(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    err.message
                ));
        }
    },
    getRole: async (req, res) => {
        const { id } = req.params;
        try {
            await connect;
            const user = await services.getRole(id);
            res.status(httpStatus.OK)
                .send(response.success(httpStatus.OK, 'Success', user));
        } catch (err) {
            res.status(httpStatus.NOT_FOUND)
                .send(response.fail(httpStatus.NOT_FOUND, err.message));
        }
    },
    createRole: async (req, res) => {
        if (error) return res.status(httpStatus.BAD_REQUEST)
            .send(response.fail(
                httpStatus.BAD_REQUEST,
                error.details[0].message,
            ));

        try {
            await services.create(req.body);
            res.status(httpStatus.OK)
                .send(response.success(httpStatus.OK, 'Create role success'));
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR)
                .send(response.success(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    err.message,
                ));
        }
    },
    deleteRole: async (req, res) => {
        try {
            const { id } = req.params;
            await services.deleteRole( id );
            res.status(httpStatus.OK)
                .send(response.success(httpStatus.OK, 'Delete role success'));
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR)
                .send(response.success(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    err.message,
                ));
        }
    }
};
