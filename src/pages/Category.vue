<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <ForumList
        :forums="getForumsByCategory(category.id)"
        :title="category.name"
    />
  </div>
</template>

<script>
import ForumList from "@/components/ForumList";
import sourceData from '@/data.json';

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
      return sourceData.forums.filter(forum => forum.categoryId === categoryId);
    }
  },
  computed: {
    category() {
      return sourceData.categories.find(category => category.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
