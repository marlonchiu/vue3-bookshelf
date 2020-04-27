import { provide, inject, computed, ref, Ref } from "@vue/composition-api"
import { Book, Books } from "@/types"

type BookContext = {
  books: Ref<Books>
  setBooks: (value: Books) => void
  finishedBooks: Ref<Books>
  addFinishedBooks: (book: Book) => void
  removeFinishedBooks: (book: Book) => void
  hasReadedBook: (book: Book) => boolean
  booksAvaluable: Ref<Books>
}

const BookSymbol = Symbol()

export const useBookListProvide = () => {
  // 全部图书
  const books = ref<Books>([])
  const setBooks = (value: Books) => (books.value = value)

  provide(BookSymbol, {
    books,
    setBooks
  })
}

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol)

  if (!booksContext) {
    throw new Error(`useBookListInject must be used after useBookListProvide`)
  }

  return booksContext
}
