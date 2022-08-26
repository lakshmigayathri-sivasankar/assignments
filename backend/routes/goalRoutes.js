const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

/*router.get("/", (req, res) => {
  //res.send("get goals");
  //res.json({ message: "Get Goals" });
  res.status(200).json({ message: "get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "set goals" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});
*/
module.exports = router;
