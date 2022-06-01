<template>
  <div class="category-list">
    <ForumList
        v-for="category in categories"
        :key="category.id"
        :forums="getForumsByCategory(category.id)"
        :title="category.name"
        :category-id="category.id"
    />
  </div>
</template>

<script>
import ForumList from "@/components/ForumList";
import sourceData from '@/data.json';

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
    getForumsByCategory (categoryId) {
      return sourceData.forums.filter(forum => forum.categoryId === categoryId);
    }
  }
}
</script>

<style scoped>

</style>
