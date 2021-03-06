/*
 * loquat-core test / parser.Result.cerr()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const ErrorMessageType = _error.ErrorMessageType;
const ErrorMessage     = _error.ErrorMessage;
const ParseError       = _error.ParseError;

const Result = _parser.Result;

describe(".cerr(err)", () => {
    it("should create a consumed failure result object", () => {
        const res = Result.cerr(
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
        expect(Result.equal(
            res,
            new Result(
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
            )
        )).to.be.true;
    });
});
