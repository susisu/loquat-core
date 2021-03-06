/*
 * loquat-core test / error.ParseError
 */

"use strict";

describe(".ParseError", () => {
    require("./ParseError/constructor.js");
    require("./ParseError/unknown.js");
    require("./ParseError/equal.js");
    require("./ParseError/merge.js");
    require("./ParseError/pos.js");
    require("./ParseError/msgs.js");
    require("./ParseError/toString.js");
    require("./ParseError/isUnknown.js");
    require("./ParseError/setPosition.js");
    require("./ParseError/setMessages.js");
    require("./ParseError/addMessages.js");
    require("./ParseError/setSpecificTypeMessages.js");
});
