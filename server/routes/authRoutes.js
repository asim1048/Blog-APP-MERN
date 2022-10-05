import express from "express";
import authController from "../controllers/authController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/users/register", authController.userRegistration);
router.post("/users/login", authController.userLogin);

import {addUserModule,deleteUser} from '../controllers/userModuleController.js'
// Forget Password

router.post("/forget-password", authController.forgetPassword);
router.post("/forget-password/:id/:token", authController.forgetPasswordEmail);

// Email Verification

router.get("/verify/:token", authController.saveVerifiedEmail);

// Protected Routes

router.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);

//userModule
//router.post("/forget-password", authController.forgetPassword);
router.post("/userM/UserModule",addUserModule);
router.post("/userM/deleteM",addUserModule);

export default router;
