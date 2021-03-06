/*
 * loquat-core test / utils._internal.escapeChar()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const escapeChar = _utils._internal.escapeChar;

describe(".escapeChar(char)", () => {
    it("should escape the character `char' if it is a special character", () => {
        expect(escapeChar("\\")).to.equal("\\\\");
        expect(escapeChar("\"")).to.equal("\\\"");
        expect(escapeChar("\b")).to.equal("\\b");
        expect(escapeChar("\t")).to.equal("\\t");
        expect(escapeChar("\n")).to.equal("\\n");
        expect(escapeChar("\r")).to.equal("\\r");
        expect(escapeChar("\f")).to.equal("\\f");
        expect(escapeChar("\v")).to.equal("\\v");
    });

    it("should return `char' itself if it is not a special character", () => {
        const chars = "09AZaz'`\u3042\u5b89\uD83C\uDF63";
        for (const char of chars) {
            expect(escapeChar(char)).to.equal(char);
        }
    });
});
