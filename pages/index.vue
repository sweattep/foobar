<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.dir">
      <h3 class="heading">{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">
          <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          &nbsp;
        </span>
      </p>
      <nuxt-link :to="post.dir">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
/*
To generate our static files in dist/ folder, run:
nuxt build && nuxt export

We can also run those static files directly by running:
nuxt serve

https://dev.to/matthewblewitt/build-a-static-generated-blog-with-nuxt-v2-13-0-and-nuxt-content-387p

Use the i18n module for language support: https://alvarosaburido.dev/blog/multi-language-blog-with-nuxt-content

Use tailwindCSS for styling: https://domarpdev.github.io/blog/create-medium-style-blog-theme/

Use the sitemap module for SEO: https://www.koenvanzeijl.nl/en/blog/blog-with-vue-nuxt/

Use netlify for hosting: https://www.netlifycms.org/docs/nuxt/ 

Use a custom config for a custom theme: https://debbie.codes/blog/nuxt-migrating-to-nuxt-content/

*/

export default {
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content("articles", { deep: true }).fetch();
      console.log("articles", articles)
      return { articles };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  head() {
    return {
      title: "Nuxt blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/",
        },
      ],
    };
  },
};
</script>

<!--
<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
-->
