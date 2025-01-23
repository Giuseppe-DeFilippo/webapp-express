const connection = require("../connection");

// const uploadImage = (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: "Nessun file caricato" });
//     }
//     const imagePath = `uploads/${req.file.filename}`;
//     const sql = "INSERT INTO movies (image) VALUES (?)";
// }


function index(req, res) {
    const sql = "SELECT * FROM `movies`";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("errore non va ", err);
            return res.status(500).json({ error: "errore nel database" });
        }
        res.json({
            conteggio: results.length,
            post: results
        });
    });
}
function show(req, res) {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM `movies` WHERE `id` = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        const item = results[0];
        if (!item) {
            return res.status(404).json({ error: "errore non ce" })
        }
        const sqlReviews = "SELECT*FROM `reviews` WHERE `movie_id` = ?"
        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: "errore query failed review" });
            item.reviews = reviewResults;
            res.json({ success: true, item })
        });
    });
}

module.exports = { index, show }