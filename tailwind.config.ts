import type {Config} from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            blue: "#4285F4",
            "blue-dark": "#254272",
            "blue-light": "#9AC0FF",
            red: "#EA4335",
            "red-dark": "#811C13",
            "red-light": "#FA8E85",
            green: "#0F9D58",
            "green-dark": "#0E7B46",
            "green-light": "#71FFBA",
            yellow: "#FBBC04",
            "yellow-dark": "#A58117",
            "yellow-light": "#FFDB74",
            "dark-background": "#1E1E1E",
            "text-color": "#C3C3C3",
         },
         backgroundImage: {
            'gradient': 'linear-gradient(to right, theme("colors.red"), theme("colors.green"), theme("colors.blue"))',
         },
         container: {
            padding: "1rem",
            center: true,
            screens: {
               sm: "480px",
               md: "768px",
               lg: "976px",
               xl: "1440px",
            }
         },
      },
   },
   plugins: [],
};
export default config;
