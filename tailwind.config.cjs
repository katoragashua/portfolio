// {/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      grotesk: [
        "Space Grotesk', sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      rubik: ["Rubik", "sans-serif"],
      urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      "slate": "#8892b0",
      "light-slate": "#a8b2d1",
      "lighter-slate": "#ccd6f6",
      "halcyon-green": "#64ffda"
    },
  },
  plugins: [],
};

// font-family: 'Lato', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Rajdhani', sans-serif;
// font-family: 'Rubik', sans-serif;
// font-family: 'Sofia Sans Semi Condensed', sans-serif;
// font-family: 'Space Grotesk', sans-serif;
// font-family: 'Urbanist', sans-serif;}

 
    // --dark-navy: #020c1b;
    // --navy: #0a192f;
    // --light-navy: #112240;
    // --lightest-navy: #233554;
    // --navy-shadow: rgba(2,12,27,0.7);
    // --dark-slate: #495670;
    // --slate: #8892b0;
    // --light-slate: #a8b2d1;
    // --lightest-slate: #ccd6f6;
    // --white: #e6f1ff;
    // --green: #64ffda;
    // --green-tint: rgba(100,255,218,0.1);
    // --pink: #f57dff;
    // --blue: #57cbff;