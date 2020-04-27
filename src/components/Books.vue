<template>
  <section class="wrap">
    <span v-if="loading">正在加载中...</span>
    <section v-else class="content">
      <el-pagination
        class="pagination"
        v-if="pagedBooks.length"
        :page-size="pageSize"
        :total="books.length"
        :current="bindings.current"
        @current-change="bindings.currentChange"
      />
    </section>
  </section>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"
import { Books } from "@/types"
import Book from "./Book.vue"
import { usePages } from "@/hooks"

export default createComponent({
  name: "books",
  setup(props) {
    const pageSize = 10
    const { bindings, data: pagedBooks } = usePages(
      () => props.books as Books,
      { pageSize }
    )
    return {
      bindings,
      pagedBooks,
      pageSize
    }
  },
  props: {
    books: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Book
  }
})
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}

.pagination {
  margin-top: 12px;
}
</style>
