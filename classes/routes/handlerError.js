const path = require('path')

const { Router } = require('express');

const rootDir = require('../util/path');

const router = Router()

router.use((req, res, next) => {
    res
        .status(404)
        .sendFile(path.join(rootDir, 'views', '404.html'));
});

module.exports = router;