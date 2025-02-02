import { type ChangeEvent } from 'react'

export interface IInput {
  type?: string
  error?: string
  value?: string
  isSubmitted?: boolean
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void
}
