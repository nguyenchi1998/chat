const success = (status, message, data) => {
    const res = {
        'status': status,
        'message': message,
    };
    if (data) {
        res.data = data;
    }
    return res;
};

const fail = (status, message) => {
    return {
        'status': status,
        'message': message,
    };
};

export default {
    success,
    fail
};
