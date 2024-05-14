import IBase from "./IBase";

export default interface IUser extends IBase {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  role_id: number;

  provider: string;
  provider_id: string;
}
