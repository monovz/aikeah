function errorHandler(err, req, res, next){
    let errCode;
    let errStatus;
    let errMsg;

    switch(err.name){
        case "INVALID_PASSWORD":
            errCode = 404;
            errStatus = err.name;
            errMsg = 'Your password is invalid. Please try again!'
            break;

        case "USERNAME_OR_EMAIL_NOT_FOUND":
            errCode = 404;
            errStatus = err.name;
            errMsg = 'Your username or email is not found. Please try again!'
            break;

        case "NOT_AUTHORIZED":
            errCode = 404;
            errStatus = err.name;
            errMsg = 'You don\'t have authorization to do this!'
            break;

        default:
            errCode = 500;
            errStatus = err.name;
            console.log(err)
            errMsg = 'Internal server error!'
            break;
    }

    res.status(errCode).json({
        status: errStatus,
        message: errMsg
    })
}

module.exports = errorHandler