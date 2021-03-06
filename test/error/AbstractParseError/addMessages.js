/*
 * loquat-core test / error.AbstractParseError#addMessages()
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const ErrorMessageType   = _error.ErrorMessageType;
const ErrorMessage       = _error.ErrorMessage;
const AbstractParseError = _error.AbstractParseError;

describe("#addMessages(msgs)", () => {
    it("should throw an `Error'", () => {
        const TestParseError = class extends AbstractParseError {
            constructor() {
                super();
            }
        };
        const err = new TestParseError();
        const msgs = [
            new ErrorMessage(ErrorMessageType.SYSTEM_UNEXPECT, "foo"),
            new ErrorMessage(ErrorMessageType.UNEXPECT, "bar"),
            new ErrorMessage(ErrorMessageType.EXPECT, "baz"),
            new ErrorMessage(ErrorMessageType.MESSAGE, "nyancat")
        ];
        expect(() => { err.addMessages(msgs); }).to.throw(Error);
    });
});
