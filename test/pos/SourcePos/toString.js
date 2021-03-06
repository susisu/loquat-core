/*
 * loquat-core test / pos.SourcePos#toString()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

describe("#toString()", () => {
    it("should return the string representation of the position", () => {
        // if the position has a name, the string representation contains its name
        {
            const pos = new SourcePos("foobar", 496, 28);
            expect(pos.toString()).to.equal("\"foobar\"(line 496, column 28)");
        }
        // if not, it does not contain name
        {
            const pos = new SourcePos("", 496, 28);
            expect(pos.toString()).to.equal("(line 496, column 28)");
        }
    });
});
