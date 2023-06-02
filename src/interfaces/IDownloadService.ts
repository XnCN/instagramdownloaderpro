import DownloadResponse from "../response/DownloadResponse";

export default interface IDownloadService {
  Download(url: string): Promise<DownloadResponse[]>;
}
