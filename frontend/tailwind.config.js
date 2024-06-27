/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          100: "#7d7d7d",
          200: "#2f2b36",
          300: "rgba(0, 0, 0, 0.1)",
          1500: "#2F2B36",
          1600: "#7D7D7D",
        },
        bluish: "#003B7A",
        lightblue: "#698ECD",
        yellowish: "#FFA500",
        aquablue: "#008080",
        grayish: "#F2F2F2",
        blackish: "#333333",
        greenish: "#077D45",
        orangish: {
          100: "#B33900",
          200: "#FF5200",
        },

        snow: "#fff8f5",
        darkcyan: "#009b9b",
        chocolate: "#ea6020",
        aqua: "#00fefe",
        steelblue: "#88a5d7",
        darkslategray: "#2e2e2e",
        orangered: "#ff5200",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        "source-sans-3": "'Source Sans 3'",
        "space-grotesk": "'Space Grotesk'",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
        mini: "15px",
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      xl: "20px",
      xs: "12px",
      "21xl": "40px",
      "13xl": "32px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },

      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  corePlugins: {
    preflight: false,
  },
};
