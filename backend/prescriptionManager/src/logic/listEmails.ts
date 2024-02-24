import { gitea_URL, godUserGitea } from "../config";
import axios from "axios";
export const listAllEmails = async() => {
  return await axios
    .get(`${gitea_URL}/admin/emails`,{
      headers: {
        Authorization: `Bearer ${godUserGitea}`,
        
      },
    })
    
};
