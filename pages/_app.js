import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AppContext from "../AppContext";


function MyApp({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState();
  return (
    <AppContext.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;