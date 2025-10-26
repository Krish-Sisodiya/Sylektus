/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a', // Tailwind slate-900 जैसा डार्क बैकग्राउंड
        'dark-card': '#1e293b', // Tailwind slate-800 जैसा कार्ड बैकग्राउंड
        'primary-blue': '#3b82f6', // नीला रंग
        'accent-purple': '#a855f7', // पर्पल एक्सेंट (आपके डिज़ाइन से मैच करने के लिए)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // एक साफ़-सुथरा फॉन्ट
      },
      
      // ----------------------------------------------------
      // --- NEW: INFINITE SCROLL ANIMATION FOR TECH ICONS ---
      // ----------------------------------------------------
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, 
          // यहाँ -50% इसलिए क्योंकि हम लिस्ट को दो बार डुप्लीकेट करते हैं, 
          // ताकि वह डुप्लीकेटेड हिस्से की शुरुआत तक जाए, और फिर लूप करे।
        },
      },
      animation: {
        // 'infinite-scroll' 40s की गति से चलता रहेगा (linear infinite)
        'infinite-scroll': 'infinite-scroll 40s linear infinite', 
      },
      // ----------------------------------------------------

    }
  },
  plugins: [],
}