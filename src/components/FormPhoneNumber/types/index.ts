import { IPhoneInput } from '@/components/PhoneNumber/types'
import { FieldValues, Path } from 'react-hook-form'

export interface IFormInput<T extends FieldValues> extends IPhoneInput {
  name: Path<T>
}
