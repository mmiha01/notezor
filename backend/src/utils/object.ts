/**
 * If input is for example {foo: undefined, bar: true} it will return just {bar: true}
 * @param input
 */
export function removeUndefinedValueKeys<T extends Record<any, any>>(
  input: T,
): Partial<T> {
  const copy: Partial<T> = {
    ...input,
  };

  Object.keys(input).forEach((key) => {
    if (copy[key] === undefined) {
      delete copy[key];
    }
  });

  return copy;
}
