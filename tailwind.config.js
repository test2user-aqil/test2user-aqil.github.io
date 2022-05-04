module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      display: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      bg: "#25272d",
      dark0: "#121518",
      dark1: "#303236",
      fg: "#dddddd",
      accent1: "#687aa7"
    },

    extend: {},
  },
  plugins: [],
};
