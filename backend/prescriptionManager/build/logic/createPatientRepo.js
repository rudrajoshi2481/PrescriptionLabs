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
exports.CreatePatientRepo = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const CreatePatientRepo = ({ user }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.post(`${config_1.gitea_URL}/user/repos`, {
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
    }, {
        headers: {
            Authorization: `Bearer ${config_1.godUserGitea}`,
        },
    }).then(rep => {
        console.log("CREATE PATIENT REPO", rep);
        return rep;
    }).catch(err => {
        console.log("CREATE PATIENT REPO", err);
        return err;
    });
});
exports.CreatePatientRepo = CreatePatientRepo;
