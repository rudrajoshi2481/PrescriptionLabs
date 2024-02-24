"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGiteaUser = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const CreateGiteaUser = ({ email, userName }) => {
    axios_1.default
        .get(`${config_1.gitea_URL}/admin/emails`, {
        headers: {
            Authorization: `Bearer ${config_1.godUserGitea}`,
        },
    })
        .then((res) => {
        console.log("LIST USERS", res.response);
        return res;
    })
        .catch((err) => {
        console.log("LIST USERS", err);
        return err;
    });
};
exports.CreateGiteaUser = CreateGiteaUser;
