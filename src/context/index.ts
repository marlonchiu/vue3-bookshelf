// 全局状态肯定不止一个模块 统一的导出
import { useBookListProvide, useBookListInject } from "./books"

export { useBookListInject }

export const useProvider = () => {
  useBookListProvide()
}
