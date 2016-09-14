/*
 * loquat-core test / error.ParseError#addMessages()
 * copyright (c) 2016 Susisu
 */

"use strict";

const { expect } = require("chai");

const { SourcePos } = require("pos.js");
const { ErrorMessageType, ErrorMessage, ParseError } = require("error.js");

describe("#addMessages(msgs)", () => {
    it("should return an `IParseError' object with the specified messages `msgs'"
        + " concatenated to the original messages", () => {
        let pos = new SourcePos("foobar", 496, 28);
        let msgs = [
            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "x"),
            new ErrorMessage(ErrorMessageType.UNEXPECT, "y")
        ];
        let err = new ParseError(pos, msgs);
        let additionalMsgs = [
            new ErrorMessage(ErrorMessageType.EXPECT, "z"),
            new ErrorMessage(ErrorMessageType.MESSAGE, "w")
        ];
        let newErr = err.addMessages(additionalMsgs);
        expect(SourcePos.equal(newErr.pos, pos)).to.be.true;
        expect(ErrorMessage.messagesEqual(newErr.msgs, msgs.concat(additionalMsgs))).to.be.true;
    });
});