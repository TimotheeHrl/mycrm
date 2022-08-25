export let isClosed: boolean = false;

export function toggle() {
  isClosed = !isClosed;
  return isClosed;
}

export function getIsClose() {
  return isClosed;
}
