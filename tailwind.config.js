module.exports = {
    darkMode: 'class',
    content: [
      './docs/**/*.{html,js,vue,ts,md}',
      './docs/.vitepress/**/*.{html,js,vue,ts,md}',
    ],
    options: {
      safelist: ['html', 'body'],
    },
  };
  