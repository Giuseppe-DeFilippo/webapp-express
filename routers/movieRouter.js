const express = require("express");
const multer = require("multer");
const { index, show, create, update, canc, tagSearch } = require("../controllers/movieController.js")
const router = express.Router();


// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// const upload = multer({ Storage });


//rotte

router.get("/", index);

//show
router.get("/:id", show);

//img
// router.post("/upload", upload.single("image"), uploadImage);


//create

// router.post("/", create);

//update per modificare un elemento

// router.put("/:id", update);

//delete

//  router.delete("/:id", canc);

//aggiungendo dettagli alla chiamata vai in bacheca ma aggiungi tag

// router.get("/tagSearch/:tag", tagSearch);

module.exports = router;