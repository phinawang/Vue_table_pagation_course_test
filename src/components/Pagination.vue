<script>
export default {
  props: {
    totalData: {
      type: Array,
      default() {
        return [];
      },
    },
    onTablePageChange: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      init: true,
    };
  },
  computed: {
    pageItem() {
      const len = this.totalData.length;
      const size = Math.ceil(len / 10);
      const item = [];
      for (let i = 1; i <= size; i++) {
        item.push(i);
      }
      return item;
    },
  },
  mounted() {
    console.log("pagination", this.totalData);
    console.log(this.pageItem);
  },
  methods: {
    pageChange(num) {
      console.log(num);
    },
  },
};
</script>

<template>
  <div class="pagination-div">
    <a
      href="#"
      v-for="num in pageItem"
      :key="num"
      @click="() => pageChange(num)"
      >{{ num }}</a
    >
  </div>
</template>

<style>
.pagination-div {
  margin-bottom: 10px;
}
.pagination-div > a {
  padding: 0 10px;
}
</style>