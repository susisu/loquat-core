/*
 * loquat test / parser.Result.equal()
 * copyright (c) 2016 Susisu
 */

"use strict";

const { expect } = require("chai");

const { SourcePos } = require("pos.js");
const { ErrorMessageType, ErrorMessage, ParseError } = require("error.js");
const { Config, State, Result } = require("parser.js");

describe(".equal(resA, resB, valEqual = undefined, inputEqual = undefined, userStateEqual = undefined)", () => {
    it("should return `true' if two results are the same", () => {
        // use default arguments
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.true;
        }
        // specify equal functions
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "RESULT",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "REST",
                    new SourcePos("foobar", 496, 28),
                    "NONE"
                )
            );
            let ieq = (strA, strB) => strA.toLowerCase() === strB.toLowerCase();
            expect(Result.equal(resA, resB, ieq, ieq, ieq)).to.be.true;
        }
    });

    it("should return `false' if two results are different", () => {
        // different `consumed'
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                false,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
        // different `succeeded'
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                false,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
        // different errors
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "a"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "b"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "c"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "d")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
        // different values
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "ok",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
        // different states
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 6, 28),
                    "none"
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
        // all
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                false,
                false,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "a"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "b"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "c"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "d")
                    ]
                )
            );
            expect(Result.equal(resA, resB)).to.be.false;
        }
    });

    it("should compare `val' and `state' properties only when both results are succeeded", () => {
        let ieq = () => {
            throw new Error("unexpected call");
        };
        // both failed
        {
            let resA = new Result(
                true,
                false,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                )
            );
            let resB = new Result(
                true,
                false,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                )
            );
            expect(() => { Result.equal(resA, resB, ieq, ieq, ieq); }).not.to.throw(Error);
        }
        // either resA or resB failed
        {
            let resA = new Result(
                true,
                true,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                ),
                "result",
                new State(
                    new Config({ tabWidth: 4, useCodePoint: true }),
                    "rest",
                    new SourcePos("foobar", 496, 28),
                    "none"
                )
            );
            let resB = new Result(
                true,
                false,
                new ParseError(
                    new SourcePos("foobar", 6, 6),
                    [
                        new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
                        new ErrorMessage(ErrorMessageType.UNEXPECT, "y"),
                        new ErrorMessage(ErrorMessageType.EXPECT, "z"),
                        new ErrorMessage(ErrorMessageType.MESSAGE, "w")
                    ]
                )
            );
            expect(() => { Result.equal(resA, resB, ieq, ieq, ieq); }).not.to.throw(Error);
            expect(() => { Result.equal(resB, resA, ieq, ieq, ieq); }).not.to.throw(Error);
        }
    });
});