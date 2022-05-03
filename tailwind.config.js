module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      dark0: "#1e2022",
      dark1: "#303236",
      dark3: "#3d3f43",
      "light0": "#ffffff",
      "light1": "#f0f0f0",
      "light2": "#6c8c9b"
    },

    extend: {},
  },
  plugins: [],
};
