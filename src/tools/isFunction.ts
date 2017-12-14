export function isFunction(functionToCheck: any): boolean {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
