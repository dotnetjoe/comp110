let { bundle, publish } = require("./server/buildPipelineHTML");

let project = "ps05-emoji";
let app = "emoji.html";
let token = "";

publish(bundle(project, app), token)
    .then((state) => console.log(state))
    .catch((e) => console.error("ERR: " + e))
    ;