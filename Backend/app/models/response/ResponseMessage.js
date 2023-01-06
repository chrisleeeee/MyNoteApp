class ResponseMessage {

    withSuccess(success) {
        this.success = success;
        return this;
    }

    withCode(code) {
        this.code = code;
        return this;
    }

    withMessage(message) {
        this.message = message;
        return this;
    }

    withData(data) {
        this.data = data;
        return this;
    }
}

module.exports = ResponseMessage