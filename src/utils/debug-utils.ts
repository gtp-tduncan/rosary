export function debugElementPosition(desc: string, element: HTMLElement) {
  console.log(`${desc}: ${element.clientLeft}, ${element.clientTop}, ${element.clientWidth}, ${element.clientHeight}`);
  console.log(`${desc}: ${element.offsetLeft}, ${element.offsetTop}, ${element.offsetWidth}, ${element.offsetHeight}`);
}
