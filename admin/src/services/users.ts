import axios from "axios";

import { IUser } from "@/interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/users";

const login = async (formData: Partial<IUser>) => {
  const { data } = await axios.post(`${API_URL}/login`, formData);

  return data?.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
};
