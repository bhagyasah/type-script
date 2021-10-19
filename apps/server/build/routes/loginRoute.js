"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    router.get('/protected', requireAuth, function (req, res) {
        res.send('Welcome to protected route');
    });
    res.status(403);
    res.send('Not permtted');
}
var router = (0, express_1.Router)();
exports.router = router;
