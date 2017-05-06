import express from 'express';

import user from './server/controllers/userController';

const router = express.Router();

router.post('/api/login', user.login);

module.exports = router;