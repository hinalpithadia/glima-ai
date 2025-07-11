/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*",
    "./style_lora_single_pages/**/*.html",   
    "./video_template_generator/**/*.html", 
    "./Video-models-template/**/*.html", 
    "./video_template_pikka_Ai_pages/**/*.html", 
    "./video_template_pollo_Ai_pages/**/*.html",  
    "./video_Generator/**/*.html", 
    "./text-to-video-generator/**/*.html",
    "./image-to-video-generator/**/*.html", 
    "./Image_style_menual_single_pager/**/*.html",
    "./nsfw/**/*.html", 
    "./Image_Ai_Tool_Single_page/**/*.html", 
    "./Image-models-template/**/*.html", 
    "./Imagine-art-image/**/*.html",
    "./Imagine-Art-Video-template/**/*.html", 
    "./LLM-pages/**/*.html", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter'],
        'inter-tight': ['inter tight'],
        'playfair': ['playfair'],
      },
      colors: {
        'limegreen': '#C6FF00',
        'black-0a0a0a': '#0A0A0A',
        'black-1B1B1B': '#1B1B1B',
        'gray-B1B1B1':'#B1B1B1',
      },
      scrollbar: {
        hide: {
          'scrollbar-width': 'none', /* For Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* For Chrome, Safari, and Opera */
          }
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none', /* For Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* For Chrome, Safari, and Opera */
          }
        }
      });
    }
  ],
}

