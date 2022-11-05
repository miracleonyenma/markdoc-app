// ./markdoc/tags/infobox.markdoc.js
import Infobox from "../../components/Infobox";

export const infobox = {
  render: Infobox,
  attributes: {
    type: {
      type: String,
      default: "info",
      matches: ["warning", "info", "error"],
    },
    title: {
      type: String,
    },
  },
};
