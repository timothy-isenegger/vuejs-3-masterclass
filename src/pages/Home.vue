<template>
    <h1 class="push-top">Welcome to the Vue.js 3 Master Class Forum</h1>
    <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  components: {
    CategoryList,
  },
  computed: {
    categories () {
      return this.$store.state.categories;
    }
  }
}
</script>

<style scoped>

</style>
