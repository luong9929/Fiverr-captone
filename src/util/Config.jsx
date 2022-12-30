import axios from "axios";

export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";
export const USER_PROFILE = "userProfile";
export const settings = {
  setStorageJson: (name, data) => {
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
  },
  setStorage: (name, data) => {
    localStorage.setItem(name, data);
  },
  getStorageJson: (name) => {
    if (localStorage.getItem(name)) {
      const data = JSON.parse(localStorage.getItem(name));
      return data;
    }
    return;
  },
  getStore: (name) => {
    if (localStorage.getItem(name)) {
      const data = localStorage.getItem(name);
      return data;
    }
    return;
  },
  setCookieJson: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    value = JSON.stringify(value);
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  setCookie: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookieJson: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  },
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};

export const TOCKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q";

export const http = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn",
  timeout: 30000,
  headers: {
    tokenCybersoft:TOCKEN_CYBERSOFT

  },
});

// cấu hình request:client gửi api đến sever
http.interceptors.request.use(
  (config) => {
    const token = settings.getStore(ACCESSTOKEN)
    config.headers = {
      ...config.headers,
      token:token
    };
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

//cấu hình cho response: sever sẽ trả dữ liệu cho client

// http.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Thất bại của tất cả request sử dụng http sẽ trả vào đây
//     if (error.response?.status === 401) {
//       history.push('/login');
//     }
//     return Promise.reject(error);
//   }
// );
