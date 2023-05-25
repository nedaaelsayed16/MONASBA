import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createHall, deleteHall, getHall, getHalls} from "../controllers/hallController.js"

const router = express.Router();

router.post("/", verifyToken, createHall);
router.delete("/:id", verifyToken, deleteHall);
router.get("/single/:id", verifyToken, getHall);
router.get("/", verifyToken, getHalls);

export default router;