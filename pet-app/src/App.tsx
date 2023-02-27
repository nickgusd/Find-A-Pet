import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { useMediaQuery } from "react-responsive";
import { Maintenance } from "./app/pages/Maintenance";

import { Main } from "./app/components/Main/Main";
import { getConfig } from "./config";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const onRedirectCallback = (appState: any) => {
    navigate(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  const config = getConfig();

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: window.location.origin,
      ...(config.audience ? { audience: config.audience } : null),
    },
  };

  return (
    <div className="App">
      <Auth0Provider {...providerConfig}>
        {isTabletOrMobile ? <Maintenance /> : <Main />}
      </Auth0Provider>
    </div>
  );
}

export default App;
