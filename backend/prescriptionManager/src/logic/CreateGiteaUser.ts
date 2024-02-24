import { gitea_URL, godUserGitea } from "../config";
import axios from "axios";
export const CreateGiteaUser = async({ email, userName }: any) => {
  axios
    .post(
      `${gitea_URL}/admin/users`,
      {
        created_at: new Date().toISOString(),
        email: email,
        full_name: userName,
        login_name: userName,
        must_change_password: false,
        password: userName,
        restricted: true,
        send_notify: false,
        source_id: 0,
        username: userName,
        visibility: "public",
      },
      {
        headers: {
          Authorization: `Bearer ${godUserGitea}`,
        },
      }
    )
    .then((res:any) => {
      console.log("Res from Gitea", res.response);
      return res;
    })
    .catch((err: any) => {
      console.log("Error from Gitea", err);
      return err;
    });
};
