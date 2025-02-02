// NOTE: we need any here for typescript to properly infer types
export type TFunction<TArgs = unknown, TResult = unknown> = (
  ...args: TArgs[]
) => TResult

export interface IMetadata {
  nextPage: number
  totalRows: number
}
