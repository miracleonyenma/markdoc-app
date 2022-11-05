// ./markdoc/nodes.js

import Blockquote from "../components/Blockquote";

export const blockquote = {
  render: Blockquote,
  attributes: {
    author: {
      type: String,
    },
  }
}