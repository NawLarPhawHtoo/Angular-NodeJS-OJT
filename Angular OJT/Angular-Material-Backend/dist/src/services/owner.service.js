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
exports.deleteOwnerService = exports.updateOwnerService = exports.findOwnerService = exports.createOwnerService = exports.getOwnerService = void 0;
const owner_model_1 = __importDefault(require("../models/owner.model"));
const express_validator_1 = require("express-validator");
const getOwnerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owners = yield owner_model_1.default.find();
        if (!owners) {
            res.json({
                success: false,
                message: "Not Found! ",
            });
        }
        res.json({
            success: true,
            message: "Owners fetched",
            owners: owners,
            status: 1,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getOwnerService = getOwnerService;
const createOwnerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 401;
            throw error;
        }
        const ownerTdo = {
            name: req.body.name,
            dateOfBirth: req.body.date,
            address: req.body.address,
        };
        const owner = new owner_model_1.default(ownerTdo);
        const result = yield owner.save();
        res.status(201).json({
            message: "Created Owner successfully!",
            owners: result,
            status: 1,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createOwnerService = createOwnerService;
const findOwnerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owner = yield owner_model_1.default.findById(req.params.id);
        console.log(owner);
        if (!owner) {
            const error = Error("Not Found!");
            error.statusCode = 401;
            throw error;
        }
        res.json({ owners: owner, status: 1 });
    }
    catch (err) {
        next(err);
    }
});
exports.findOwnerService = findOwnerService;
const updateOwnerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 401;
            throw error;
        }
        const owner = yield owner_model_1.default.findByIdAndUpdate(req.params.id);
        if (!owner) {
            const error = new Error("Not Found!");
            error.statusCode = 401;
            throw error;
        }
        owner.name = req.body.name;
        owner.dateOfBirth = req.body.dateOfBirth;
        owner.address = req.body.address;
        const result = yield owner.save();
        res.json({
            message: "Updated Owner Successfully!",
            owners: result,
            status: 1,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateOwnerService = updateOwnerService;
const deleteOwnerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owner = yield owner_model_1.default.findByIdAndRemove(req.params.id);
        if (!owner) {
            const error = new Error("Not Found!");
            error.statusCode = 401;
            throw error;
        }
        res.json({
            message: "Delete Owner Successfully!",
            owners: owner,
            status: 1,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteOwnerService = deleteOwnerService;
