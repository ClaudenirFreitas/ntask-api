module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "param1" },
                { title: "param2" }
            ]);
        }
    }
};