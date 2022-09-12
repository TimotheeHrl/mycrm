export function getTokenFunc(): string {
  const name = "token";
  let ca: Array<string> = document.cookie.split(";");
  console.log(document.cookie);
  let caLen: number = ca.length;
  let cookieName = `${name}=`;
  let c: string;

  for (let i: number = 0; i < caLen; i += 1) {
    c = ca[i].replace(/^\s+/g, "");
    if (c.indexOf(cookieName) == 0) {
      return `Bearer ${c.substring(cookieName.length, c.length)}`;
    }
  }
  return "";
}
