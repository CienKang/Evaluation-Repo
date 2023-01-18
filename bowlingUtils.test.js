const { getScore } = require('./bowlingUtils');

/*eslint-disable*/
describe("Bowling Utilis", () => {

    describe("getScore", () => {

        it("should return Error when total frames are less than 10", () => {
            expect(() => getScore([1,9])).toThrow(Error('Total Frames are less than 10.'));
        });

        it("should return a 90 wwhen input array is [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]", () => {
            expect(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
        });

        it("should return a 90 wwhen input array is [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]", () => {
            expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
        });
    });
});