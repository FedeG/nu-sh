// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '809730862470028', // your App ID
        'clientSecret'    : 'f70924f61443475a123992db247cc4f2', // your App Secret
        'callbackURL'     : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'XzCeWY67h987zlFXKU0DYmCee',
        'consumerSecret'     : 'IDdYhjvwl7KFL8iuAVNaV4KnyciHQda9GLkDoQetiVOMgbEMMd',
        'callbackURL'        : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '114839941783424638158',
        'clientSecret'     : '6827bb0f17ade1dbb83be6958dfc37fd3df7befe',
        'callbackURL'      : 'http://localhost:3000/auth/google/callback'
    }

};
