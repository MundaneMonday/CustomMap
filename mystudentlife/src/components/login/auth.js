// src/auth.js

//This will connect with cognito

import Amplify, { Auth } from "aws-amplify";


// Configure our Auth object to use our Cognito User Pool
Amplify.configure({
  Auth: {
    // Amazon Region
    region: "us-east-1",

    // Amazon Cognito User Pool ID
    userPoolId: "us-east-1_YtZKVbE1L",

    // Amazon Cognito App Client ID (26-char alphanumeric string)
    userPoolWebClientId: "284fqcq56okpob5frp40o3uned",

    // Hosted UI configuration
    oauth: {
      // Amazon Hosted UI Domain
      domain: "mystudentlife.auth.us-east-1.amazoncognito.com",

      // These scopes must match what you set in the User Pool for this App Client
      scope: ["email", "profile", "openid"],

      // NOTE: these must match what you have specified in the Hosted UI
      // app settings for Callback and Redirect URLs (e.g., no trailing slash).
      redirectSignIn: "http://localhost:3000",
      redirectSignOut: "http://localhost:3000",

      // We're using the Access Code Grant flow (i.e., `code`)
      responseType: "code",
    },
  },
});

/**
 * Get the authenticated user
 * @returns Promise<user>
 */
/*async function getUser() {
  try {
    // Get the user's info, see:
    // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();

    // If that didn't throw, we have a user object, and the user is authenticated
    console.log("The user is authenticated");

    // Get the user's username
    const username = currentAuthenticatedUser.username;
    console.log(username);
    // Get the user's Identity Token, which we'll use later with our
    // microservce. See discussion of various tokens:
    // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
    const idToken = currentAuthenticatedUser.signInUserSession.idToken.jwtToken;
    const accessToken =
      currentAuthenticatedUser.signInUserSession.accessToken.jwtToken;

    // Return a simplified "user" object
    return (currentAuthenticatedUser)
  } catch (err) {
    console.log(err);
    // Unable to get user, return `null` instead
    return null;
  }
 
}
*/


export { Auth };