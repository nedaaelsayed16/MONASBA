import express from 'express';
import { deleteUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js'

const router = express.Router();


router.delete("/:id", verifyToken, deleteUser);
// router.get("/register",)
// router.get("/login",)

export default router;