<template>
  <div>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import Prism from "~/plugins/prism";

export default {
  async asyncData({ $content, params, error }) {
    let articles;
    try {
      articles = await $content("articles", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Article not found" });
    }

    return {
      post
    };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        // Twitter Card
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'foobar',
        },
        {
          hid: 'keywords',
          name: 'author',
          content: 'sweatte',
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        }
      ]
    }
  }  
};
</script>
