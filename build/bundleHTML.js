let { bundle, publish } = require("./server/buildPipelineHTML");

let project = "ps06-compstagram";
let app = "compstagram.html";
let token = "";

publish(bundle(project, app), token)
    .then((state) => console.log(state))
    .catch((e) => console.error("ERR: " + e))
    ;