/*
 * loquat-core test / pos.SourcePos#setName()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

describe("#setName(name)", () => {
    it("should create a copy of the `SourcePos' object with the specified name", () => {
        const pos  = new SourcePos("foobar", 496, 28);
        const copy = pos.setName("nyancat");
        // different objects
        expect(copy).not.to.equal(pos);
        // with different names
        expect(copy.name).to.equal("nyancat");
        expect(copy.line).to.equal(496);
        expect(copy.column).to.equal(28);
    });
});
