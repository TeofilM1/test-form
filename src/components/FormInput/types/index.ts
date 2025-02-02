
import { IInput } from '@/components/Input/types'
import { FieldValues, Path } from 'react-hook-form'

export interface IFormInput<T extends FieldValues> extends IInput {
  name: Path<T>
}
