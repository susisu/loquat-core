/*
 * loquat-core test / parser.Parser#parse()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const ErrorMessageType = _error.ErrorMessageType;
const ErrorMessage     = _error.ErrorMessage;
const ParseError       = _error.ParseError;

const Config = _parser.Config;
const State  = _parser.State;
const Result = _parser.Result;
const Parser = _parser.Parser;

describe("#parse(name, input, userState = undefined, opts = {})", () => {
    it("should run the parser with a state created from arguments and return result as a simple object", () => {
        // csuc
        {
            const parser = new Parser(state => {
                expect(State.equal(
                    state,
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "test",
                        new SourcePos("foobar", 1, 1),
                        "none"
                    )
                )).to.be.true;
                return Result.csuc(
                    new ParseError(
                        new SourcePos("foobar", 496, 28),
                        [
                            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                            new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                        ]
                    ),
                    "nyancat",
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "rest",
                        new SourcePos("foobar", 496, 28),
                        "some"
                    )
                );
            });
            const res = parser.parse("foobar", "test", "none", { tabWidth: 4, unicode: true });
            expect(res).to.deep.equal({
                success: true,
                value  : "nyancat"
            });
        }
        // cerr
        {
            const parser = new Parser(state => {
                expect(State.equal(
                    state,
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "test",
                        new SourcePos("foobar", 1, 1),
                        "none"
                    )
                )).to.be.true;
                return Result.cerr(
                    new ParseError(
                        new SourcePos("foobar", 496, 28),
                        [
                            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                            new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                        ]
                    )
                );
            });
            const res = parser.parse("foobar", "test", "none", { tabWidth: 4, unicode: true });
            expect(res).to.be.an("object");
            expect(res.success).to.be.false;
            expect(ParseError.equal(
                res.error,
                new ParseError(
                    new SourcePos("foobar", 496, 28),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                )
            )).to.be.true;
        }
        // esuc
        {
            const parser = new Parser(state => {
                expect(State.equal(
                    state,
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "test",
                        new SourcePos("foobar", 1, 1),
                        "none"
                    )
                )).to.be.true;
                return Result.esuc(
                    new ParseError(
                        new SourcePos("foobar", 496, 28),
                        [
                            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                            new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                        ]
                    ),
                    "nyancat",
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "rest",
                        new SourcePos("foobar", 496, 28),
                        "some"
                    )
                );
            });
            const res = parser.parse("foobar", "test", "none", { tabWidth: 4, unicode: true });
            expect(res).to.deep.equal({
                success: true,
                value  : "nyancat"
            });
        }
        // eerr
        {
            const parser = new Parser(state => {
                expect(State.equal(
                    state,
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "test",
                        new SourcePos("foobar", 1, 1),
                        "none"
                    )
                )).to.be.true;
                return Result.eerr(
                    new ParseError(
                        new SourcePos("foobar", 496, 28),
                        [
                            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                            new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                        ]
                    )
                );
            });
            const res = parser.parse("foobar", "test", "none", { tabWidth: 4, unicode: true });
            expect(res).to.be.an("object");
            expect(res.success).to.be.false;
            expect(ParseError.equal(
                res.error,
                new ParseError(
                    new SourcePos("foobar", 496, 28),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                )
            )).to.be.true;
        }
        // use default parameters
        {
            const parser = new Parser(state => {
                expect(State.equal(
                    state,
                    new State(
                        new Config(),
                        "test",
                        new SourcePos("foobar", 1, 1),
                        undefined
                    )
                )).to.be.true;
                return Result.csuc(
                    new ParseError(
                        new SourcePos("foobar", 496, 28),
                        [
                            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                            new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                        ]
                    ),
                    "nyancat",
                    new State(
                        new Config({ tabWidth: 4, unicode: true }),
                        "rest",
                        new SourcePos("foobar", 496, 28),
                        "some"
                    )
                );
            });
            const res = parser.parse("foobar", "test");
            expect(res).to.deep.equal({
                success: true,
                value  : "nyancat"
            });
        }
    });
});
