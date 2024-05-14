import IBase from "./IBase";

export default interface IUser extends IBase {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;

  provider: "credentials" | "google" | "facebook";
  provider_id: string;
}
