/**
 * Terminus node: nothing more sits inside.
 * This can be for example a "Text" or "Image" component
 * @param name component name
 * @returns component
 */
export function final<T>(name: string): (t: T) => JSX.Element {
  var f = function (props: any): JSX.Element {
    return (props && (props.children as any as JSX.Element)) || null;
  };
  Object.defineProperty(f, 'name', {value: name, writable: false});
  return f;
}
