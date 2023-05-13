import axios from "axios";

const api = (() => {
  const baseUrl = "https://forum-himsi-api.vercel.app";

  // AUTH
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

  // USERS
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

  // POSTS
  async function GetAllPosts(page = 1, category = null) {
    let url = baseUrl + "/posts?page=" + page;

    if (category) {
      url += `?category=${category}`
    }

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

  async function createPost(data) {
    const url = baseUrl + "/post";

    const form = new FormData();
    form.append("body", data.body);

    data.category.forEach(kategori => {
      form.append('category[]', kategori)
    })

    data.attachments.forEach(attach => {
      form.append('attachments[]', attach)
    })

    const response = await axios.post(url, form);
    return response.data.data
  }

  async function EditPost(_id, data) {
    const url = baseUrl + '/post/' + _id;

    const form = new FormData();
    form.append("body", data.body);

    data.category.forEach(kategori => {
      form.append('category[]', kategori)
    })

    data.attachments.forEach(attach => {
      form.append('attachments[]', attach)
    })

    const response = await axios.put(url, form);
    return response.data.data
  }

  async function LikeUnlikePost(data) {
    const url = baseUrl + '/post/like/' + data._id;

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

  // DISCUSSION
  async function GetAllDiscussionTopic(page = 1, id_topic = null) {
    let url = baseUrl + "/discussion/topic/" + id_topic + "?page=" + page;

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

  async function GetAllDiscussionLayer(page = 1, id_layer = null) {
    let url = baseUrl + "/discussion/layer/" + id_layer + "?page=" + page;

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

  async function GetDetailDiscussion(id_dicussion) {
    const url = baseUrl + "/discussion/" + id_dicussion;

    const response = await axios.get(url);

    return response.data.data;
  }

  async function CreateDiscussion(data, id_topic) {
    const url = baseUrl + "/discussion/" + id_topic;

    const response = await axios.post(url, data);
    return response.data.data
  }

  async function EditDiscussion(id_dicussion, data) {
    const url = baseUrl + '/discussion/' + id_dicussion;

    const response = await axios.put(url, data);
    return response.data.data
  }

  async function TakedownDiscussionAdmin(id_dicussion) {
    const url = baseUrl + "/discussion/admin/" + id_dicussion;

    const response = await axios.delete(url);
    return response.data.data;
  }

  async function TakedownDiscussionUser(id_dicussion) {
    const url = baseUrl + "/discussion/" + id_dicussion;

    const response = await axios.delete(url);
    return response.data.data;
  }


  // CATEGORY
  async function getAllCategory(page) {
    const url = baseUrl + "/category?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  // REPORT
  async function createReport(data) {
    const url = baseUrl + "/report";

    const response = await axios.post(url);
    return response.data.data;
  }

  async function adminGetAllReport(page) {
    const url = baseUrl + "/reports?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function adminGetReportDetail(id_report) {
    const url = baseUrl + "/report/" + id_report;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function adminApproveReport(id_report, payload) {
    const url = baseUrl + "/report/" + id_report;

    const response = await axios.put(url, payload);
    return response.data.data;
  }

  async function adminTakedownReport(id_report) {
    const url = baseUrl + "/report/" + id_report;

    const response = await axios.delete(url);
    return response.data.data;
  }

  async function userGetAllReport(page) {
    const url = baseUrl + "/y/reports?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function userGetReportDetail(id_report) {
    const url = baseUrl + "/my/report/" + id_report;

    const response = await axios.get(url);
    return response.data.data;
  }

  // SUBMISSION
  async function createSubmission(data) {
    const url = baseUrl + "/submission";

    const response = await axios.post(url);
    return response.data.data;
  }

  async function adminGetAllSubmission(page) {
    const url = baseUrl + "/submissions?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function adminGetSubmissionDetail(id_submission) {
    const url = baseUrl + "/submission/" + id_submission;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function adminApproveSubmission(id_submission, payload) {
    const url = baseUrl + "/submission/" + id_submission;

    const response = await axios.put(url, payload);
    return response.data.data;
  }

  async function adminTakedownSubmission(id_submission) {
    const url = baseUrl + "/submission/" + id_submission;

    const response = await axios.delete(url);
    return response.data.data;
  }

  async function userGetAllSubmission(page) {
    const url = baseUrl + "/my/submissions?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function userGetSubmissionDetail(id_submission) {
    const url = baseUrl + "/my/submission/" + id_submission;

    const response = await axios.get(url);
    return response.data.data;
  }

  // Profile
  async function userGetAllUsers(page) {
    const url = baseUrl + "/profile/users?page=" + page;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function userGetAllOrganization(page) {
    const url = `${baseUrl}/profile/users?page=${page}?organizational=true`

    const response = await axios.get(url);
    return response.data.data;
  }

  async function userGetProfile(id_user) {
    const url = `${baseUrl}/profile/user/${id_user}`

    const response = await axios.get(url);
    return response.data.data;
  }

  async function userUpdateProfile(id_user, data) {
    const url = `${baseUrl}/profile/user/${id_user}`

    const response = await axios.put(url, data);
    return response.data.data;
  }

  async function userUpdateProfilePicture(id_user, data) {
    const url = `${baseUrl}/profile/change-profile-picture/${id_user}`

    const response = await axios.put(url, data);
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
    GetAllDiscussionTopic,
    GetAllDiscussionLayer,
    GetDetailDiscussion,
    CreateDiscussion,
    EditDiscussion,
    TakedownDiscussionAdmin,
    TakedownDiscussionUser,
    getAllCategory,
    createReport,
    adminGetAllReport,
    adminGetReportDetail,
    adminApproveReport,
    adminTakedownReport,
    userGetAllReport,
    userGetReportDetail,
    createSubmission,
    adminGetAllSubmission,
    adminGetSubmissionDetail,
    adminApproveSubmission,
    adminTakedownSubmission,
    userGetAllSubmission,
    userGetSubmissionDetail,
    userGetAllUsers,
    userGetAllOrganization,
    userGetProfile,
    userUpdateProfile,
    userUpdateProfilePicture
  };
})();

export default api;
