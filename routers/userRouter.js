const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: 'dennis',
        edad: 24
    })
});

module.exports = router;
