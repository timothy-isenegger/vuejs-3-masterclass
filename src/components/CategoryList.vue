<template>
  <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsByCategory(category.id)"
      :title="category.name"
      :category-id="category.id"
  />
</template>

<script>
import ForumList from "@/components/ForumList";

export default {
  name: "CategoryList",
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsByCategory(categoryId) {
      return this.$store.state.forums.filter(forum => forum.categoryId === categoryId);
    }
  }
}
</script>

<style scoped>

</style>
