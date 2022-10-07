import { Request, Response, NextFunction } from "express";
import Owner from "../models/owner.model";
import { OwnerCreate } from "../interfaces/owner";
import { validationResult } from "express-validator";

export const getOwnerService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const owners: any = await Owner.find();
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
  } catch (err) {
    next(err);
  }
};

export const createOwnerService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 401;
      throw error;
    }
    const ownerTdo: OwnerCreate = {
      name: req.body.name,
      dateOfBirth: req.body.date,
      address: req.body.address,
    };
    const owner = new Owner(ownerTdo);
    const result = await owner.save();
    res.status(201).json({
      message: "Created Owner successfully!",
      owners: result,
      status: 1,
    });
  } catch (err) {
    next(err);
  }
};

export const findOwnerService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const owner: any = await Owner.findById(req.params.id);
    console.log(owner);

    if (!owner) {
      const error: any = Error("Not Found!");
      error.statusCode = 401;
      throw error;
    }
    res.json({ owners: owner, status: 1 });
  } catch (err) {
    next(err);
  }
};

export const updateOwnerService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 401;
      throw error;
    }
    const owner: any = await Owner.findByIdAndUpdate(req.params.id);
    if (!owner) {
      const error: any = new Error("Not Found!");
      error.statusCode = 401;
      throw error;
    }
    owner.name = req.body.name;
    owner.dateOfBirth = req.body.dateOfBirth;
    owner.address = req.body.address;
    const result = await owner.save();
    res.json({
      message: "Updated Owner Successfully!",
      owners: result,
      status: 1,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteOwnerService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const owner: any = await Owner.findByIdAndRemove(req.params.id);
    if (!owner) {
      const error: any = new Error("Not Found!");
      error.statusCode = 401;
      throw error;
    }
    res.json({
      message: "Delete Owner Successfully!",
      owners: owner,
      status: 1,
    });
  } catch (err) {
    next(err);
  }
};
