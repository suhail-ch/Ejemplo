"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Interfaces
const mongoose_1 = __importStar(require("mongoose"));
const course_1 = __importDefault(require("./course"));
//Modelo de objeto que se guarda en la BBDD de MongoDB
const userSchema = new mongoose_1.Schema({
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    edad: {
        type: Number
    },
    correo: {
        type: String
    },
    telefono: {
        type: Number
    },
    grado: {
        type: String
    },
    courses: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: course_1.default
        }]
});
//Exportamos modelo para poder usarlo
exports.default = mongoose_1.default.model('User', userSchema);
