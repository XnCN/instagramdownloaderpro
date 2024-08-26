//@ts-ignore
import getCode from "./DecrypteHelper";

export default function DecrypteDownload(input: string): string {
  const match = input.match(/\("([^"]+)",/);
  if (!match) throw Error("Code not found");

  const rawCode = match[1];
  const decyriptedBody = getCode(rawCode, 1, "abcdefghi", 1, 2, 1);
  const innerHTML = decyriptedBody.match(
    /document\.getElementById\("download-result"\)\.innerHTML\s*=\s*"(.*?)";/
  );
  if (!innerHTML) throw Error("Inner html not found");
  if (innerHTML[1] == null) throw Error("Error found in inner html");
  return innerHTML[1].replace(/\\/g, "");
}
