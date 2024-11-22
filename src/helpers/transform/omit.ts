export function omitFields<T, K extends keyof T>(obj: T, keys: K[]) {
  keys.forEach((key) => {
    delete obj[key];
  });

  return obj as Omit<T, K>;
}
