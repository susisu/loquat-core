/*
 * loquat-core test / pos.SourcePos
 */

"use strict";

describe(".SourcePos", () => {
    require("./SourcePos/constructor.js");

    require("./SourcePos/init.js");
    require("./SourcePos/equal.js");
    require("./SourcePos/compare.js");

    require("./SourcePos/toString.js");
    require("./SourcePos/setName.js");
    require("./SourcePos/setLine.js");
    require("./SourcePos/setColumn.js");
    require("./SourcePos/addChar.js");
    require("./SourcePos/addString.js");
});
