import React, { useEffect } from 'react';
import { useTheme } from "next-themes";

const SubstackWidget = () => {
  
  const { theme } = useTheme()

  
  useEffect(() => {
    // Define the CustomSubstackWidget on the window object
    window.CustomSubstackWidget = {
      substackUrl: "akileshio.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: `${theme === "dark" ? "#e8e5f0" : "#0e1012"}`, //e8e5f0
        // input: "#0e1012", //e8e5f0
        input: `${theme === "dark" ? "#0e1012" : "#e8e5f0"}`, //e8e5f0
        email:  `${theme === "dark" ? "#e8e5f0" : "#0e1012"}`, //e8e5f0
        text: `${theme === "dark" ? "#0e1012" : "#e8e5f0"}`, //e8e5f0
      },
    };

    // Create a new script element
    const script = document.createElement('script');

    // Set the source of the script to the Substack widget script
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, [theme]);

  return (
    <div id="custom-substack-embed"></div>
  );
};

export default SubstackWidget;