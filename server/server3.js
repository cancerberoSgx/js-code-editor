var everyauth = require('everyauth')
,   connect = require('connect');

var DEVEL_CLIENT_ID = "1081991926563-e64k9pb3cnmqqpegegaj85kim22vk0np.apps.googleusercontent.com";
// var DEVEL_API_KEY = "AIzaSyAeX11OLg0zyBDlpYr2lqs4POPEjyWrooY";

everyauth.google
  .appId(DEVEL_CLIENT_ID)
  .appSecret('YOUR CLIENT SECRET HERE')
  .scope('https://www.google.com/m8/feeds') // What you want access to
  .handleAuthCallbackError( function (req, res) {
    // If a user denies your app, Google will redirect the user to
    // /auth/facebook/callback?error=access_denied
    // This configurable route handler defines how you want to respond to
    // that.
    // If you do not configure this, everyauth renders a default fallback
    // view notifying the user that their authentication failed and why.
  })
  .findOrCreateUser( function (session, accessToken, accessTokenExtra, googleUserMetadata) {
    // find or create user logic goes here
    // Return a user or Promise that promises a user
    // Promises are created via
    //     var promise = this.Promise();
  })
  .redirectPath('/');

var routes = function (app) {
  // Define your routes here
};

connect(
    connect.bodyParser()
  , connect.cookieParser()
  , connect.session({secret: 'whodunnit'})
  , everyauth.middleware()
  , connect.router(routes)
).listen(3000);