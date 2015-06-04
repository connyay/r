'use strict';

exports.validationError = function (res, statusCode) {
    statusCode = statusCode || 422;
    return function (err) {
        res.status(statusCode).json(err);
    };
};

exports.handleError = function (req, res) {
    return function (err) {
        console.log(err);
        res.status(500).json({
            internal_error: {
                reference: req.reqId
            }
        });
    };
};

exports.responseWithResult = function (res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
    };
};

exports.respondWith = function (res, statusCode) {
    statusCode = statusCode || 200;
    return function () {
        res.status(statusCode).end()
    };
};

exports.handleEntityNotFound = function (res) {
    return function (entity) {
        if (!entity) {
            res.status(404).json({});
            return null;
        }
        return entity;
    };
};

exports.missingParameters = function (res) {
    return res.status(400).json({
        message: 'Missing parameters'
    });
};

exports.removeEntity = function (res) {
    return function (entity) {
        if (entity) {
            return entity.destroy()
                .then(function () {
                    return res.status(204).end();
                });
        }
    };
};

exports.saveUpdates = function (updates) {
    return function (entity) {
        return entity.updateAttributes(updates)
            .then(function (updated) {
                return updated;
            });
    };
};
