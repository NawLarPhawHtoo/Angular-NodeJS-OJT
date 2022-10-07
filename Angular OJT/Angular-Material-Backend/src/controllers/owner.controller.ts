import { Request,Response,NextFunction } from "express";
import { getOwnerService,createOwnerService ,findOwnerService,updateOwnerService,deleteOwnerService} from "../services/owner.service";

export const getOwners = async (
  req: Request, res: Response, next: NextFunction) => {
    getOwnerService(req, res, next);
};

export const createOwner = async (
  req: Request, res: Response, next: NextFunction) => {
  createOwnerService(req, res, next);
};

export const findOwner = async (
  req: Request, res: Response, next: NextFunction) => {
  findOwnerService(req, res, next);
};

export const updateOwner = async (
  req: Request, res: Response, next: NextFunction) => {
  updateOwnerService(req, res, next);
};

export const deleteOwner = async (
  req: Request, res: Response, next: NextFunction) => {
  deleteOwnerService(req, res, next);
};