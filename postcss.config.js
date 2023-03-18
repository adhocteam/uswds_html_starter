module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
    // remove unused css
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
      // it's important that the first character class here includes a
      // backslash, because sass generates css selector names that include a
      // backslash like: ".mobile-lg\:grid-col", which we need to make sure
      // that purge parses as a single selector. purgecess does not propely
      // parse CSS, so we have to be kind of loose here to get it to work.
      defaultExtractor: (content) => content.match(/[\w-/\\:]+(?<!:)/g) || [],
      safelist: {
        standard: ["html", "body"],
        greedy: [],
      },
    }),
    // minify
    require("cssnano")({
      preset: "default",
    }),
  ],
};
