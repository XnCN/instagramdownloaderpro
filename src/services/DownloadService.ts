import IDownloadService from "../interfaces/IDownloadService";
import DownloadResponse from "../response/DownloadResponse";
import download from "../api/DownloadApi";
import parse from "node-html-parser";
import DownloadParser from "../parsers/DownloadParser";

class DownloadService implements IDownloadService {
  async Download(url: string): Promise<DownloadResponse[]> {
    const { data } = await download.post("/ajaxSearch", {
      recaptchaToken: null,
      q: url,
      t: "media",
      v: "v2",
    });
    if (data.status != "ok") throw Error("Api error");
    
    //reversing Code
    let reversedHtml = '';

    eval(data.data.replace('eval', 'reversedHtml=')); // execute code, before execute change eval to variable assign

    const patterns = /document\.getElementById\("download-result"\)\.innerHTML\s*=\s*"([\s\S]+?)";/i;
    const match = reversedHtml.match(patterns); // get the html
    const html = match[1].replaceAll('\\', ''); // remove backslashes from the html

    //encrytpe data
    const dom = parse(html);
    const downloadItems: DownloadResponse[] = [];
    const items = dom.querySelectorAll(".download-box li");
    items.forEach((i) => {
      const item = DownloadParser.parse(i);
      if (item.url != undefined) downloadItems.push(item);
    });
    return downloadItems;
  }
}

export default DownloadService;
