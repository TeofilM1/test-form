import { FC } from 'react'
import { IFormLabelProps } from './types'

export const FormLabel: FC<IFormLabelProps> = ({ label }) => (
  <p>
    {label}
  </p>
)
