import axios from "axios";

// default axios config for cookies and session
axios.defaults.withCredentials = true;

import UserService from "./users";

export { UserService };
