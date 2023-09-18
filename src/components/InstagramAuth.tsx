import React, { useState } from "react";

const InstagramAuth: React.FC = () => {
  const [redirecting, setRedirecting] = useState<boolean>(false);

  const handleRedirect = () => {
    // Define the Instagram OAuth URL with your client_id and redirect_uri
    const instagramOAuthUrl =
      "https://api.instagram.com/oauth/authorize" +
      "?client_id=YOUR_CLIENT_ID" + // Replace with your Instagram Client ID
      "&redirect_uri=YOUR_REDIRECT_URI" + // Replace with your Redirect URI
      "&scope=user_profile,user_media" +
      "&response_type=code";

    // Redirect the user to Instagram's OAuth flow
    window.location.href = instagramOAuthUrl;

    // Set redirecting to true to show a message
    setRedirecting(true);
  };

  return (
    <div>
      {redirecting ? (
        <p>Redirecting to Instagram...</p>
      ) : (
        <button onClick={handleRedirect}>Authenticate with Instagram</button>
      )}
    </div>
  );
};

export default InstagramAuth;
