module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`ǸTask API - porta ${app.get("port")}`);
    });
};