class ApiError extends Error {
    constructor(statusCode, messeage) {
        super();
        this.statusCode = statusCode;
        this.message = messeage;
    }
}

module.exports = ApiError;