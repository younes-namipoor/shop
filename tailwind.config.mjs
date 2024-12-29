/** @type {import('tailwindcss').Config} */
export default  {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
	container:{
		center:true,
		padding:"15px",
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px"
	},
	fontFamily:{
		primary:"var(--font-JetBrainsMono)"
	},
  	extend: {
		backgroundImage: {
			'custom-gradient': 'linear-gradient(to right, #0e1113, #101416, #111619, #13181b, #141a1e, #192025, #1d262b, #222c32, #2c383e, #36444b, #415159, #4c5e66)',
			'custom-gradient1': 'linear-gradient(to left bottom, #111518, #0f171e, #0e1824, #0f192a, #12192f, #141c3d, #181d4a, #211e57, #272271, #2f258b, #3827a6, #4527c1)',

		  },
		  
  		colors: {
			primary:"#1c1c22",
			accent:"#00ff99",
		
				hover:"#00e187",
			
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
