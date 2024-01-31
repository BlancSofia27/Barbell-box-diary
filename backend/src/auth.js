// auth.js

const auth0Domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;


passport.use(new Auth0Strategy({
    domain: auth0Domain,
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: 'http://localhost:5153/home',
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    // Save user to the database or retrieve user from the database
    User.findOne({ email: profile.emails[0].value }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        const newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.picture || '',  // Use the picture from Auth0, or an empty string if not available
          // You can map other fields here according to your model
          role: 'user',
          isActive: true,
        });
        newUser.save((err) => {
          if (err) {
              console.log('error al guardar user');
            return done(err);
          }
          return done(null, newUser);
        });
      } else {
        return done(null, user);
      }
    });
  }));
  