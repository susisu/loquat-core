/*
 * loquat-core test / pos.SourcePos#setName()
 * copyright (c) 2016 Susisu
 */

"use strict";

const { expect } = require("chai");

const { SourcePos } = require("pos.js");

describe("#setName(name)", () => {
    it("should create a copy of the `SourcePos' object with the specified name", () => {
        let pos  = new SourcePos("foobar", 496, 28);
        let copy = pos.setName("nyancat");
        // different objects
        expect(copy).not.to.equal(pos);
        // with different names
        expect(copy.name).to.equal("nyancat");
        expect(copy.line).to.equal(496);
        expect(copy.column).to.equal(28);
    });
});
