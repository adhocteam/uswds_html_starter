import { watch } from "turbowatch";

// Watch for changes to *.{scss, html} and rebuild the css. We need to watch
// for changes on the HTML too because it affects what CSS gets purged
void watch({
  project: __dirname,
  triggers: [
    {
      expression: [
        "anyof",
        ["match", "**/*.scss", "basename"],
        ["match", "**/*.html", "basename"],
      ],
      name: "build",
      onChange: async ({ spawn }) => {
        await spawn`npm run build`;
      },
    },
  ],
});
