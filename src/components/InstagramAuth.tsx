import React, { useState } from "react";

const InstagramAuth: React.FC = () => {
  const [redirecting, setRedirecting] = useState<boolean>(false);

  const handleRedirect = () => {
    // Define the Instagram OAuth URL with your client_id and redirect_uri
    const instagramOAuthUrl =
      "https://api.instagram.com/oauth/authorize";

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
