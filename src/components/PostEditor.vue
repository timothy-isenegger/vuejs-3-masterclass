<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="postText" name="" id="" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  data() {
    return {
      postText: '',
    }
  },
  methods: {
    save() {
      const post = {
        text: this.postText,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2'
      }

      this.$emit('save-post', { post });

      this.postText = '';
    }
  }
}
</script>

<style scoped>

</style>
