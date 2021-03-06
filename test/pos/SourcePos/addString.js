/*
 * loquat-core test / pos.SourcePos#addString()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

describe("#addString(str, tabWidth, unicode)", () => {
    it("should create a copy with lines and columns are incremented by `str'", () => {
        {
            const pos  = new SourcePos("foobar", 496, 1);
            const copy = pos.addString("nyan\n\tcat\n\u3042\t\uD83C\uDF63", 8, false);
            expect(copy).not.to.equal(pos);
            expect(copy.name).to.equal("foobar");
            expect(copy.line).to.equal(498);
            expect(copy.column).to.equal(11);
        }
        {
            const pos  = new SourcePos("foobar", 496, 1);
            const copy = pos.addString("nyan\n\tcat\n\u3042\t\uD83C\uDF63", 4, false);
            expect(copy).not.to.equal(pos);
            expect(copy.name).to.equal("foobar");
            expect(copy.line).to.equal(498);
            expect(copy.column).to.equal(7);
        }
    });

    it("should count characters in units of code points if `unicode' is true", () => {
        const pos  = new SourcePos("foobar", 496, 1);
        const copy = pos.addString("nyan\n\tcat\n\u3042\t\uD83C\uDF63", 8, true);
        expect(copy).not.to.equal(pos);
        expect(copy.name).to.equal("foobar");
        expect(copy.line).to.equal(498);
        expect(copy.column).to.equal(10);
    });
});
