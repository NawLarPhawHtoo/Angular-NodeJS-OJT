"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const owner_controller_1 = require("../controllers/owner.controller");
const router = express_1.default.Router();
router
    .route('/')
    .get(owner_controller_1.getOwners)
    .post(owner_controller_1.createOwner);
router
    .route('/:id')
    .get(owner_controller_1.findOwner)
    .put(owner_controller_1.updateOwner)
    .delete(owner_controller_1.deleteOwner);
exports.default = router;
