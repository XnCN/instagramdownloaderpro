import IDownloadService from "../interfaces/IDownloadService";
import DownloadResponse from "../response/DownloadResponse";
import download from "../api/DownloadApi";
import parse from "node-html-parser";
import DownloadParser from "../parsers/DownloadParser";
import DecrypteDownload from "../helpers/DownloadDecrypteHelper";

class DownloadService implements IDownloadService {
  async Download(url: string): Promise<DownloadResponse[]> {
    const { data } = await download.post("/ajaxSearch", {
      recaptchaToken: null,
      q: url,
      t: "media",
      v: "v2",
    });
    if (data.status != "ok") throw Error("Api error");
    const parsedBody = DecrypteDownload(data.data);
    const dom = parse(parsedBody);
    const downloadItems: DownloadResponse[] = [];
    const items = dom.querySelectorAll(".download-box li .download-items");
    items.forEach((i) => {
      const item = DownloadParser.parse(i);
      if (item.url != undefined) downloadItems.push(item);
    });
    return downloadItems;
  }
}

export default DownloadService;
