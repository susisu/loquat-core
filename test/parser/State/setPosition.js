/*
 * loquat-core test / parser.State#setPosition()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const Config = _parser.Config;
const State  = _parser.State;

describe("#setPosition(pos)", () => {
    it("should a copy of the state, with specified `pos'", () => {
        const state = new State(
            new Config({ tabWidth: 4, unicode: true }),
            "foobar",
            new SourcePos("nyan", 496, 28),
            "none"
        );
        const copy = state.setPosition(new SourcePos("cat", 6, 6));
        expect(copy).not.to.equal(state);
        expect(State.equal(
            copy,
            new State(
                new Config({ tabWidth: 4, unicode: true }),
                "foobar",
                new SourcePos("cat", 6, 6),
                "none"
            )
        )).to.be.true;
    });
});
