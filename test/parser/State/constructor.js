/*
 * loquat-core test / parser.State constructor()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const Config = _parser.Config;
const State  = _parser.State;

describe("constructor(config, input, pos, userState)", () => {
    it("should create a new `State' instance", () => {
        // use default argument
        {
            const state = new State(
                new Config({ tabWidth: 4, unicode: true }),
                "foobar",
                new SourcePos("nyancat", 496, 28)
            );
            expect(state).to.be.an.instanceOf(State);
            expect(Config.equal(
                state.config,
                new Config({ tabWidth: 4, unicode: true })
            )).to.be.true;
            expect(state.input).to.equal("foobar");
            expect(SourcePos.equal(
                state.pos,
                new SourcePos("nyancat", 496, 28)
            )).to.be.true;
            expect(state.userState).to.equal(undefined);
        }
        // specify userState
        {
            const state = new State(
                new Config({ tabWidth: 4, unicode: true }),
                "foobar",
                new SourcePos("nyancat", 496, 28),
                "user-defined state"
            );
            expect(state).to.be.an.instanceOf(State);
            expect(Config.equal(
                state.config,
                new Config({ tabWidth: 4, unicode: true })
            )).to.be.true;
            expect(state.input).to.equal("foobar");
            expect(SourcePos.equal(
                state.pos,
                new SourcePos("nyancat", 496, 28)
            )).to.be.true;
            expect(state.userState).to.equal("user-defined state");
        }
    });
});
