<template>
  <div class="container">
    <h1 class="push-top">Welcome to the Vue.js 3 Master Class Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";
import sourceData from '@/data.json'

export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categories: sourceData.categories
    }
  },
}
</script>

<style scoped>

</style>
