/*
 * loquat-core test / parser.State constructor()
 * copyright (c) 2016 Susisu
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const _pos = require("pos.js");
const SourcePos = _pos.SourcePos;

const _parser = require("parser.js");
const Config = _parser.Config;
const State  = _parser.State;

describe("constructor(config, input, pos, userState)", () => {
    it("should create a new `State' instance", () => {
        // use default argument
        {
            let state = new State(
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
            let state = new State(
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
