import { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";


function App() {

  const [language, setLanguage] = useState("se");

  return (
    <>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <RouterProvider router={router} />
      </LanguageContext.Provider>
    </>
  )
}

export default App
