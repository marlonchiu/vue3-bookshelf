<template>
  <Books :books="books" :loading="loading" />
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"
import Books from "@/components/Books.vue"
import { useAsync } from "@/hooks"
import { getBooks } from "@/hacks/fetch"
import { useBookListInject } from "@/context"
export default createComponent({
  name: "books",
  setup() {
    const { books, setBooks } = useBookListInject()
    const loading = useAsync(async () => {
      const requestBooks = await getBooks()
      setBooks(requestBooks)
    })
    return { books, loading }
  },
  components: {
    Books
  }
})
</script>
