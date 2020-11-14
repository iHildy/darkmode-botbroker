module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "60p": "60%",
        "70p": "70%",
        "80p": "80%",
        "85p": "85%",
        "90p": "90%",
      },
      height: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        104: "24rem",
        112: "26rem",
        120: "28rem",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "780px",
        // => @media (min-width: 768px) { ... }
        lg: "1034px",
        // => @media (min-width: 1024px) { ... }
        xl: "1290px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: "#252525",
        secondary: "##FF2440",
        // third: "#9FA7D3",
        background: "#0E0E0E",
        // hover: "#1B1F37",
        // textbubble: "#A4C3FF",
        // border: "#7FF6FE",
        // button: "#1D5EE3",
        // button2: "#25345C",
        offwhite: "#f5f5f5",
        // darkgray: "#202020",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};

// 65f9cd