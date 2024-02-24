"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGiteaUser = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const CreateGiteaUser = ({ email, userName }) => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default
        .post(`${config_1.gitea_URL}/admin/users`, {
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
    }, {
        headers: {
            Authorization: `Bearer ${config_1.godUserGitea}`,
        },
    })
        .then((res) => {
        console.log("Res from Gitea", res.response);
        return res;
    })
        .catch((err) => {
        console.log("Error from Gitea", err);
        return err;
    });
});
exports.CreateGiteaUser = CreateGiteaUser;
