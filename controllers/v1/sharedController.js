// @desc GET Health Check
// @route GET /health
// @access Public

const healthCheckHandler = (req, res) => {
    res.status(200).json({status: 'Ok'})
};

module.exports = { healthCheckHandler }
