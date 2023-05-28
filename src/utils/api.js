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

    const response = await axios.post(url, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      username: payload.username
    });
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
      url += `&category=${category}`
    }

    const response = await axios.get(url);

    if (response.data.data.length === 0) {
      return [];
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

    form.append("category", JSON.stringify(data.category));

    data.picture_attachments.forEach(attach => {
      form.append('picture_attachments', attach)
    })

    data.video_attachments?.forEach(attach => {
      form.append('video_attachments', attach)
    })

    const response = await axios.post(url, form, {
      timeout: 1000000,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Connection' : 'keep-alive'
      }
    });
    return response.data.data
  }

  async function EditPost(_id, data) {
    const url = baseUrl + '/post/' + _id;
    console.info(url)
    const form = new FormData();
    form.append("body", data.body);

    form.append("category", JSON.stringify(data.category));

    data.picture_attachments.forEach(attach => {
      if(attach.url) {
        form.append('picture_attachments[]', JSON.stringify(attach))
      } else {
        form.append('picture_attachments', attach)
      }
    })

    data.video_attachments?.forEach(attach => {
      if(attach.file) {
        form.append('video_attachments', attach.file)
      } else {
        form.append('video_attachments[]', JSON.stringify(attach[0]))
      }
    })

    const response = await axios.put(url, form);
    return response.data.data
  }

  async function LikeUnlikePost(id) {
    const url = baseUrl + '/post/like/' + id;

    const response = await axios.put(url, id);
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
  async function GetAllDiscussionTopic(id) {
    let url = baseUrl + "/discussion/topic/" + id;

    const response = await axios.get(url);

    if (response.data.data.length === 0) {
      return [];
    }

    return response.data.data;
  }

  async function CreateDiscussion(data, id_topic) {
    const url = baseUrl + "/discussion/" + id_topic;
    const dataComment = {
      body: data
    }
    const response = await axios.post(url, dataComment);
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
  async function getAllCategory() {
    const url = baseUrl + "/category";
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
    const url = `${baseUrl}/profile/users?page=${page}&organizational=true`
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
    createPost,
    EditPost,
    LikeUnlikePost,
    TakedownPostAdmin,
    TakedownPostVerified,
    GetAllDiscussionTopic,
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
