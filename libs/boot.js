module.exports = app => {
    app.db.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`ǸTask API - porta ${app.get("port")}`);
        });
    });
};