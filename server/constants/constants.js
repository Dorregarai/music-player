const HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
};

const LASTFM_API = {
    API_KEY: '51d18c878683154dd2c82464e6fa9aca'
};

const PER_PAGE = {
    TRACKS_PER_PAGE: 10
};


module.exports = {
    HTTP_STATUS_CODES,
    LASTFM_API,
    PER_PAGE
};