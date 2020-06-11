<template>
  <div>
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <a :href="tag.url">{{tag.name}}</a>
        <!-- url dinámica -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tags",
  props: {
    tags: Array
  }
};
</script>


<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  width: 8rem;
  height: 6rem;
}
</style>
