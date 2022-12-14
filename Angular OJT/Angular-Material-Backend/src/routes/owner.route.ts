import express, { Request,Response,NextFunction } from "express";
import { getOwners,createOwner,findOwner,updateOwner,deleteOwner } from "../controllers/owner.controller";

const router=express.Router();

router
  .route('/owners')
  .get(getOwners)
  .post(createOwner)

router
 .route('owners/:id')
 .get(findOwner)
 .put(updateOwner)
 .delete(deleteOwner)

export default router;