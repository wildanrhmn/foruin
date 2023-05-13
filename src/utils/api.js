import axios from "axios";

const api = (() => {
  const baseUrl = "https://forum-himsi-api.vercel.app";

  // Auth
  async function Login(email, password) {
    const url = baseUrl + "/auth/login";
    const data = {
      email,
      password,
    };

    const response = await axios.post(url, data);

    return response;
  }

  async function Refresh() {
    const url = baseUrl + "/auth/refresh";

    try {
      const response = await axios.get(url, {
        credentials: "include",
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function Logout() {
    const url = baseUrl + "/logout";

    const response = await axios.get(url);

    return response;
  }

  async function Register(payload) {
    const url = baseUrl + "/auth/register";
    const formRegister = new FormData();

    formRegister.append("username", payload.username);
    formRegister.append("email", payload.email);
    formRegister.append("password", payload.password);
    formRegister.append("name", payload.name);
    const response = await axios.post(url, formRegister);
    
    return response;
  }

  async function ApproveSubmission(email, password) {
    const url = baseUrl + "/auth/approve-verified";

    const data = {
      email: email,
      password: password,
    };

    const response = await axios.post(url, data);
    return response;
  }

  async function BannedUser(userData) {
    const url = baseUrl + "/auth/banned/" + userData._id;

    const response = await axios.put(url, userData);
    return response.data.data;
  }

  async function UnBannedUser(userData) {
    const url = baseUrl + "/auth/unbanned/" + userData._id;

    const response = await axios.put(url, userData);
    return response.data.data;
  }

  async function TakedownUser(_id) {
    const url = baseUrl + "/auth/takedown/" + _id;

    const response = await axios.delete(url);
    return response.data.data;
  }

  // Users
  async function GetAllUser() {
    const url = baseUrl + "/profile/users";

    const response = await axios.get(url);
    return response.data.data;
  }

  async function GetDetailUser(_id) {
    const url = baseUrl + "/profile/user/" + _id;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function UpdateProfileUser(Userdata) {
    const url = baseUrl + "/profile/user/" + Userdata._id;

    const response = await axios.put(url, Userdata);
    return response.data.data;
  }

  async function UpdateProfilePicture(Userdata) {
    const url = baseUrl + "/profile/change-profile-picture/" + Userdata._id;

    const response = await axios.put(url, Userdata);
    return response.data.data;
  }

  //Posts
  async function GetAllPosts(page = 1) {
    const url = baseUrl + "/posts?page=" + page;

    const response = await axios.get(url);
    const failTemplate = {
      Posts: [],
      page: 0,
      total: 0,
    };

    if (response.data.data.length === 0) {
      return failTemplate;
    }

    return response.data.data;
  }

  async function GetDetailPost(_id) {
    const url = baseUrl + "/post/" + _id;

    const response = await axios.get(url);

    return response.data.data;
  }

  async function CreatePost(data) {
    const url = baseUrl + "/post";

    const form = new FormData();
    form.append("post_title", data.post_title);
    form.append("post_description", data.post_description);
    form.append("post_image", data?.post_image || undefined);

    data.post_category.forEach(kategori => {
      form.append('post_category[]', kategori)
    })

    data.post_attachment.forEach(attach => {
      form.append('post_attachment[]', attach)
    })

    const response = await axios.post(url, form);
    return response.data.data
  }

  async function EditPost(data) {
    const url = baseUrl + '/post/' + data._id;

    const form = new FormData();
    form.append("post_title", data.post_title);
    form.append("post_description", data.post_description);
    form.append("post_image", data?.post_image || undefined);

    data.post_category.forEach(kategori => {
      form.append('post_category[]', kategori)
    })

    data.post_attachment.forEach(attach => {
      form.append('post_attachment[]', attach)
    })

    const response = await axios.put(url, form);
    return response.data.data
  }

  async function LikeUnlikePost(data) {
    const url = baseUrl + '/post/' + data._id;

    const response = await axios.put(url, data);
    return response.data.data;
  }

  async function TakedownPostAdmin(_id) {
    const url = baseUrl + "/post/admin/" + _id;

    const response = await axios.delete(url);
    return response.data.data;
  }
  async function TakedownPostVerified(_id) {
    const url = baseUrl + "/post/" + _id;

    const response = await axios.delete(url);
    return response.data.data;
  }
  return {
    Login,
    Refresh,
    Logout,
    Register,
    ApproveSubmission,
    BannedUser,
    UnBannedUser,
    TakedownUser,
    GetAllUser,
    GetDetailUser,
    UpdateProfileUser,
    UpdateProfilePicture,
    GetAllPosts,
    GetDetailPost,
    CreatePost,
    EditPost,
    LikeUnlikePost,
    TakedownPostAdmin,
    TakedownPostVerified,
  };
})();

export default api;
