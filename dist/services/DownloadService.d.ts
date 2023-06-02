import IDownloadService from "../interfaces/IDownloadService";
import DownloadResponse from "../response/DownloadResponse";
declare class DownloadService implements IDownloadService {
    Download(url: string): Promise<DownloadResponse[]>;
}
export default DownloadService;
