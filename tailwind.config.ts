import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
          "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
      },
      keyframes: {
          "text-focus-in": {
              "0%": {
                  filter: "blur(12px)",
                  opacity: "0"
              },
              to: {
                  filter: "blur(0)",
                  opacity: "1"
              }
          }
      }
    },
    fontFamily: {
      'noto': ['Noto Serif JP', 'Noto Serif SC', 'Noto Serif KR'],
    }
  },
  plugins: [],
} satisfies Config;
