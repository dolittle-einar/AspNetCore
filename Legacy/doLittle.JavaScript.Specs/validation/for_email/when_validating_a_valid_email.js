﻿describe("when validating a valid email", function () {

    var validator = Dolittle.validation.email.create({ options: {} });
    var result = validator.validate("something@somewhere.com");

    it("should return true", function () {
        expect(result).toBe(true);
    });
});