/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate";

export const darkMode = ["class"];
export const content = [
	"./pages/**/*.{ts,tsx}",
	"./components/**/*.{ts,tsx}",
	"./app/**/*.{ts,tsx}",
	"./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px",
		},
	},
	extend: {
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
			lisGreen: {
				500: "hsla(133, 58%, 53%, 1)",
				400: "hsla(162, 100%, 36%, 1)",
				300: "hsla(175, 100%, 31%, 1)",
				200: "hsla(185, 100%, 28%, 1)",
				100: "hsla(190, 100%, 25%, 1)",
				50: "hsla(137, 100%, 95%, 1)"
			},
			lisBlue: {
				500: "hsla(211, 88%, 53%, 1)",
				100: "hsla(202, 100%, 94%, 1)"
			},
			lisYellow: {
				500: "hsla(54, 93%, 77%, 1)",
				400: "hsla(29, 100%, 94%, 1)",
				300: "hsla(54, 100%, 94%, 1)",
			},
			lisRed: {
				500: "hsla(0, 96%, 56%, 1)"
			},
			lisGrey: {
				500: "hsla(137, 100%, 95%, 1)",
				100: "hsla(0, 0%, 94%, 1)"
			},
			lisPurple: {
				500: "hsla(281, 88%, 53%, 1)"
			}
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
	},
};
export const plugins = [tailwindAnimate];