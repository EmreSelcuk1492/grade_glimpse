import React, { useEffect } from "react";

const InstagramAuthFlow: React.FC = () => {
  useEffect(() => {
    redirectToInstagramOAuth();
  }, []);

  const redirectToInstagramOAuth = () => {
    const instagramOAuthUrl =
      "https://api.instagram.com/oauth/authorize" +
      "?client_id=763568429111393" +
      "&redirect_uri=https://grade-glimpse-git-main-emreselcuk1492.vercel.app/instagram-success" +
      "&scope=user_profile,user_media" +
      "&response_type=code";
    window.location.href = instagramOAuthUrl;
  };

  return <p>Redirecting to Instagram for authentication...</p>;
};

export default InstagramAuthFlow;

