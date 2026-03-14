import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "./Navigation";
import LoadingPage from "./LoadingPage";
import Footer2 from "./Footer2";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { lang } = useLanguage(); 
  
    const { data: globalData, isLoading, error  } = useFetch<any>(`/global?locale=${lang}`);
    console.log("Global Data in Layout", globalData)
    console.log("footer date:", globalData?.footer)
    if (isLoading) return <LoadingPage message='Loading...'/>;
    // // if (!globalData) return <p>no global data</p>;
    if (error) return <LoadingPage message='there was an error'/>
      // console.log("Error loading global data: ", error); // return <p>Error loading global data</p>;
      
  return (
    <div className="min-h-screen flex flex-col">
      {
        globalData.header &&
       <Navigation {...globalData?.header} />
      }

        <main className="flex-1">{children}</main>
      {
        globalData.footer && 
      <Footer2 {...globalData?.footer}/>
      }

    </div>
  );
};

export default Layout;