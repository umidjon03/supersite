import axios from "./axios";

export const postQwiz = () => {
  const name = sessionStorage.getItem("name");
  const creativity = sessionStorage.getItem("creativity");
  const functionality = sessionStorage.getItem("functionality");
  const comment = sessionStorage.getItem("comment");
  const logo = sessionStorage.getItem("logo");
  const type = sessionStorage.getItem("type");
  const link = sessionStorage.getItem("link");
  const phone = sessionStorage.getItem("phone");
  return axios.post("/qwiz/create/", {
    type: type,
    style_logo: logo,
    creativity: creativity,
    functionality: functionality,
    website: link,
    name: name,
    phone: phone,
    comment: comment,
  });
};
