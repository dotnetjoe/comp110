let { bundle, publish } = require("./server/buildPipeline");

let project = "demo";
let app = "test";
let token = "";

publish(bundle(project, app), token)
    .then((state) => console.log(state))
    .catch((e) => console.error("ERR: " + e))
    ;