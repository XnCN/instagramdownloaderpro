import IService from "./IService";
import ProfileInfoResponse from "../response/ProfileInfoResponse";
export default interface IUserService extends IService {
    getProfileInfo(): ProfileInfoResponse;
}
