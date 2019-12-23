const { User, validate } = require('../model/player');
const auth = require('../middleware/auth');
const { HTTP_STATUS_CODES, LASTFM_API, PER_PAGE } = require('../constants/constants');
const LastFM = require('last-fm');

const lastfm = new LastFM(LASTFM_API.API_KEY, { userAgent: 'MyApp/1.0.0 (http://example.com)' });

async function getUsers(req, res) {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
}

async function registrateUser(req, res) {
    // validate the request body first
    const { error } = validate(req.body);
    if(error) {
        return res
            .status(HTTP_STATUS_CODES.BAD_REQUEST)
            .send(error.details[0].message);
    }

    //find an existing user
    let user = await User.findOne({ name: req.body.name });
    if(user) return res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .send('User already exists');

    user = new User({
        name: req.body.name,
        password: req.body.password,
        tracklist: req.body.tracklist
    });
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send({
        _id: user._id,
        name: user.name,
        tracklist: user.tracklist
    });
}

async function authorization(req, res){
    console.log(req.body);
    const { error } = validate(req.body);
    if(error) {
        return res
            .status(HTTP_STATUS_CODES.BAD_REQUEST)
            .send(error.details[0].message);
    }

    let user = await User.findOne({ name: req.body.name, password: req.body.password });
    if(!user) return res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .send('Check input!');

    console.log('Logged successful');
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send({
        _id: user._id,
        name: user.name,
        tracklist: user.tracklist
    });
}

async function logout(req, res) {
    console.log(req.body);

}

async function getAudioTop(req, res) {
    console.log(req.headers);
    console.log(` this is getaudio`);
    if(req.body.q) {
        lastfm.trackSearch({                // searching track according q - track name or artist name
                q: req.query.q,
                page: req.query.page,
                perPage: PER_PAGE.TRACKS_PER_PAGE
            },
            (err, data) => {
                if (err) console.error(err);
                res.json(data)
            })
    } else {
        lastfm.chartTopTracks({
                page: req.query.page,
            },
            (err, data) => {
                if (err) console.error(err);
                res.json(data)
            });
    }
}

async function searchArtist(req, res){
    console.log(req.params);
    lastfm.artistSearch({                   //searching ONLY artist
            q: req.params.artistName,
            page: req.body.page,
        },
        (err, data) => {
            if (err) console.error(err);
            else res.send(data)
        })
}

module.exports = {
    getUsers,
    registrateUser,
    authorization,
    getAudioTop,
    searchArtist
};