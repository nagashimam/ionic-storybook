import { setCompodocJson } from "@storybook/addon-docs/angular";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
