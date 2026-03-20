import * as React from "react"

export interface ToastProps {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

export type ToastActionElement = React.ReactElement

export interface ToasterToast extends ToastProps {
  id: string
}

let memoryState: { toasts: ToasterToast[] } = { toasts: [] }
let listeners: Array<(state: { toasts: ToasterToast[] }) => void> = []

export function toast({ ...props }: ToastProps) {
  const id = Math.random().toString(36).slice(2, 9)
  const newToast = {
    ...props,
    id,
  }

  memoryState = {
    ...memoryState,
    toasts: [newToast, ...memoryState.toasts].slice(0, 5),
  }

  listeners.forEach((listener) => listener(memoryState))
  
  setTimeout(() => {
    memoryState = {
      ...memoryState,
      toasts: memoryState.toasts.filter((t) => t.id !== id),
    }
    listeners.forEach((listener) => listener(memoryState))
  }, 5000)

  return id
}

export function useToast() {
  const [state, setState] = React.useState<{ toasts: ToasterToast[] }>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      listeners = listeners.filter((l) => l !== setState)
    }
  }, [state])

  return {
    ...state,
    toast,
  }
}
