const express = require("express");
const router = express.Router();
const { createEvent, getEvents, updateEvent, deleteEvent } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect(), getEvents);
router.post("/", protect(["Admin", "Manager"]), createEvent);
router.put("/:id", protect(["Admin", "Manager"]), updateEvent);
router.delete("/:id", protect(["Admin"]), deleteEvent);

module.exports = router;
