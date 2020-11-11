<script>
import Pagination from "./Pagination";
import { getFactList } from "../apis/index";
export default {
  components: { Pagination },
  data() {
    return {
      tableData: [],
      page: 1,
    };
  },
  computed: {
    renderData() {
      const start = (this.page - 1) * 10;
      const end = start + 10;
      return this.tableData.slice(start, end);
    },
  },
  mounted() {
    getFactList().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
};
</script>

<template>
  <div class="table-container">
    <h1>Table</h1>
    <Pagination :totalData="tableData" />
    <table class="pure-table pure-table-bordered pure-table-striped">
      <thead>
        <tr>
          <th>TEXT</th>
          <th>Updated At</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in renderData"
          :key="item._id"
          :class="[index % 2 === 0 ? 'pure-table-odd' : '']"
        >
          <td>{{ item.text }}</td>
          <td>{{ item.updatedAt }}</td>
          <td>{{ item.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>