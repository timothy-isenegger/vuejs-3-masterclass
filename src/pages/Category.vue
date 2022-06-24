<template>
  <div class="container col-full">
    <h1>{{ category.name }}</h1>
    <ForumList
        :forums="getForumsByCategory(category.id)"
        :title="category.name"
    />
  </div>
</template>

<script>
import ForumList from "@/components/ForumList";

export default {
  name: "Category",
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String,
    }
  },
  methods: {
    getForumsByCategory(categoryId) {
      return this.$store.state.forums.filter(forum => forum.categoryId === categoryId);
    }
  },
  computed: {
    category() {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
