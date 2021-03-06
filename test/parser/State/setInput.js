/*
 * loquat-core test / parser.State#setInput()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const Config = _parser.Config;
const State  = _parser.State;

describe("#setInput(input)", () => {
    it("should a copy of the state, with specified `input'", () => {
        const state = new State(
            new Config({ tabWidth: 4, unicode: true }),
            "foo",
            new SourcePos("nyancat", 496, 28),
            "none"
        );
        const copy = state.setInput("bar");
        expect(copy).not.to.equal(state);
        expect(State.equal(
            copy,
            new State(
                new Config({ tabWidth: 4, unicode: true }),
                "bar",
                new SourcePos("nyancat", 496, 28),
                "none"
            )
        )).to.be.true;
    });
});
