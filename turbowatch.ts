import { watch } from "turbowatch";

// Watch for changes to *.scss and rebuild the css
void watch({
  project: __dirname,
  triggers: [
    {
      expression: ["match", "*.scss", "basename"],
      name: "build",
      onChange: async ({ spawn }) => {
        await spawn`npm run build`;
      },
    },
  ],
});
