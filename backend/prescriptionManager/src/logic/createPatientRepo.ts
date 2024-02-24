import { gitea_URL, godUserGitea, patientRepoName } from "../config";
import axios from "axios";
export const CreatePatientRepo = async ({ user }: any) => {
  return await axios.post(
    `${gitea_URL}/user/repos`,
    {
      "auto_init": true,
      "default_branch": "main",
      "description": "General patient",
      "gitignores": "string",
      "issue_labels": "string",
      "license": "string",
      "name": `${user}`,
      "private": true,
      "readme": "string",
      "template": false,
      "trust_model": "default"
    },
    {
      headers: {
        Authorization: `Bearer ${godUserGitea}`,
      },
    }
  ).then(rep => {
    console.log("CREATE PATIENT REPO",rep)
    return rep
  }).catch(err => {
    console.log("CREATE PATIENT REPO",err)
    return err
  })
};
