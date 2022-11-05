---
title: Get started with Markdoc
description: How to get started with Markdoc
cover: /images/martin-sanchez-gD3dUQpMlvk-unsplash.jpg
---

## Get started with Markdoc

Markdoc is a static site generator that uses Markdown files as input and outputs HTML files.

Markdoc features several core concepts which include:

- **Nodes**:
  These are the elements that Markdoc inherits from Markdown
- **Tags**:
  Tags are the main syntactic extension that Markdoc adds on top of Markdown. Similar to HTML, each tag is enclosed with `{%` and `%}` and includes the tag name, attributes, and the content body.
- **Annotations**:
  These can be added to nodes to customize how they are rendered

### Installation

To install markdoc in Next.js, run the following command:

```bash
npm install @markdoc/next.js @markdoc/markdoc
```

### Background

Markdoc was built by [Stripe](https://stripe.com/) to power their developer documentation.

{%infobox title="Hey there!" type="info"%}
Here's some info for you!
{%/infobox%}
{%infobox title="Hey there!" type="warning"%}
Here's a warning for you!
{%/infobox%}
{%infobox title="Hey there!" type="error"%}
Here's an error for you!
{%/infobox%}

> Is there such an element as a "blockquote"?

The title of this page is: **{% $markdoc.frontmatter.title %}** after all

{% partial file="bike-promo.md" variables={title: "Getting started with Markdoc"} /%}

{% if includes($markdoc.frontmatter.title, "Llamas") %}
  > This page is about Llamas

  {% else /%}
  > This page is not about Llamas
{% /if %}

![image](/vercel.svg)