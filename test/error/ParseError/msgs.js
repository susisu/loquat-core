/*
 * loquat-core test / error.ParseError#msgs
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos = _pos.SourcePos;

const ErrorMessageType   = _error.ErrorMessageType;
const ErrorMessage       = _error.ErrorMessage;
const ParseError         = _error.ParseError;

describe("#msgs", () => {
    it("should get messages of the error", () => {
        const pos = new SourcePos("foobar", 496, 28);
        const msgs = [
            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "foo"),
            new ErrorMessage(ErrorMessageType.UNEXPECT, "bar"),
            new ErrorMessage(ErrorMessageType.EXPECT, "baz"),
            new ErrorMessage(ErrorMessageType.MESSAGE, "nyancat")
        ];
        const err = new ParseError(pos, msgs);
        expect(ErrorMessage.messagesEqual(err.msgs, msgs)).to.be.true;
    });
});
