const pool = require('../../../db'); // psql db
const log = require('../../../logger');
const rsql = require('../../../sql/restaurant');

module.exports = (req, res) => {
    log.info('Querying get rReviews.');
    const rid = req.params.rid;
    console.log(rid);
    pool.query(rsql.get.allReviews, [rid],
        (qerr, qres) => {
            if (qerr) {
                console.log(qerr);
                res.status(500).send(qerr)
             } else {
                res.json(qres.rows)
             }
        })
};

