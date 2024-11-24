export type ParametersExceptFirst<T extends (...args: any) => any> = T extends (
  ignored: infer _,
  ...args: infer P
) => any
  ? P
  : never;
