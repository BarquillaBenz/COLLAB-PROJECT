
require('dotenv').config();
const app = express();
const cors = require('cors')
require('./db/conn')
const DB = process.env.DATABASE;
const PORT = 3000; //callback
const session = require('express-session')
const passport = require('passport')
const OAuthStrategy = require('passport-google-oauth2').Strategy



const clientID = '643656399823 - hg616ukm6884e94bnrmqoasagkmifbqu.apps.googleusercontent.com'
const clientSecret = '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'

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('server is running')
})

app.listen(PORT, () => {
    console.log('server running at port ${PORT}')
})

