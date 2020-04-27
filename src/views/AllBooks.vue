<template>
  <Books :books="booksAvaluable" :loading="loading" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Books from "@/components/Books.vue"
import { useAsync } from "@/hooks"
import { getBooks } from "@/hacks/fetch"
import { useBookListInject } from "@/context"
export default defineComponent({
  name: "books",
  setup() {
    const { books, setBooks, booksAvaluable } = useBookListInject()
    const loading = useAsync(async () => {
      const requestBooks = await getBooks()
      setBooks(requestBooks)
    })
    return { booksAvaluable, loading }
  },
  components: {
    Books
  }
})
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}
</style>
