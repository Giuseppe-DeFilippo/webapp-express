const connection = require("../connection");
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
        res.json({ success: true, item })
    });
}

module.exports = { index, show }