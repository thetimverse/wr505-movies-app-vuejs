<template>
    <div class="flex justify-between w-1/2 mt-14 mx-auto">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"><v-icon name="fa-chevron-left" scale="1.3" /></button>
      <span class="font-medium">{{ currentPage }} / {{ lastPage }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === lastPage"><v-icon name="fa-chevron-right" scale="1.3" /></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      lastPage: {
        type: Number,
        required: true,
      },
    },
    methods: {
      goToPage(page) {
          this.$emit('update-page', page);
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination-bar {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

  }
  
  button {
    cursor: pointer;
  }
  </style>