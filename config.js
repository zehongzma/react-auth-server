const providers = ['twitter', 'google', 'facebook', 'github']

const callbacks = providers.map(provider => {
  return `http://hkappdlv006:8080/${provider}/callback`
})

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks

exports.CLIENT_ORIGIN = ['http://hkappdlv006:3000']

exports.TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: twitterURL,
}

exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: googleURL
}

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
  callbackURL: facebookURL
}

exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL
}