import { createContext, useContext } from 'react'

export const CanvasContext = createContext<{
  ctx: CanvasRenderingContext2D | undefined
}>({
  ctx: undefined,
})

export const useCanvasContext = () => {
  return useContext(CanvasContext)
}
