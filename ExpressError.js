class ExpressError extends Error {
    constructor(msg, status) {
        //needed for extending Error
        super();
        //store message
        this.msg = msg;
        //store status
        this.status = status;
        //get full stack error back
        console.error(this.stack)
    }
}

module.exports = ExpressError;