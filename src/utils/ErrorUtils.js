const getErrorCode = (errResponse) => {

    if (!errResponse) {
        return 0;
    }

    const {
        data: {
            errorCode = 0
        } = {}
    } = errResponse || {};

    return errorCode;
}

export const matchErrorCode = (errResponse, errorCode) => {
    return getErrorCode(errResponse) === errorCode;
}