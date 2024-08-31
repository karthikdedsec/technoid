/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0) rotate(9deg)" },
          "50%": { transform: "translate(10px, -50px) rotate(-9deg)" },
          "100%": { transform: "translate(0, 0) rotate(9deg)" },
        },
        up: {
          "0%": { transform: "translate(0, 0) rotate(9deg)" },
          "50%": { transform: "rotate(-9deg)" },
          "100%": { transform: "translate(0, 0) rotate(9deg)" },
        },
        scaleUpDown: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        float2: "float 9s ease-in-out infinite",
        float3: "float 10s ease-in-out infinite",
        scale: "scaleUpDown 5s ease-in-out infinite",
        up: "up 5s ease-in-out infinite",
        up2: "up 7s ease-in-out infinite",
        spinSlow: "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
