export type ParametersExceptFirst<T extends (...args: any) => any> = T extends (
  ignored: infer _,
  ...args: infer P
) => any
  ? P
  : never;

export type WithoutGenerated<T extends { id: string }> = Omit<T, 'id' | 'updatedAt' | 'createdAt' | 'joinedAt'>;
