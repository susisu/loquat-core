/*
 * loquat test / parser.LazyParser constructor()
 * copyright (c) 2016 Susisu
 */

"use strict";

const { expect } = require("chai");

const { Parser, LazyParser } = require("parser.js");

describe("constructor()", () => {
    it("should create a new `LazyParser' instance", () => {
        let parser = new LazyParser(() => new Parser(() => {}));
        expect(parser).to.be.an.instanceOf(LazyParser);
    });
});