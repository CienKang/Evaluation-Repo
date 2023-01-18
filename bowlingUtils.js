// need to work
const scoreCal = (Frames) => {

    let score = 0;

    for (let idx = 1; idx <= 10; idx++) {
        console.log(Frames[idx]);

        if (Frames[idx].length === 1)
            score += 10 + Frames[idx + 1][0] + Frames[idx + 1][1];

        else if (Frames[idx].length === 2) {
            const arr = Frames[idx];

            if(arr[0] + arr[1] === 10)
                score+= 10 + Frames[idx+1][0];
            else score += arr[0] + arr[1];
        }
        
        else score += Frames[idx].reduce((sum,currElem) => sum+ currElem , 0);
    }

    return score;

};

const getScore = (Rolls) => {
    const Frames = {};
    let frameNumber = 1;
    for (let idx = 0; idx < Rolls.length; idx++) {
        if (Rolls[idx] === 10) {
            if (Frames[frameNumber] === undefined)
                Frames[frameNumber] = [];

            Frames[frameNumber].push(10);
            if (frameNumber != 10)
                frameNumber++;
        }

        else {
            Frames[frameNumber] = [];
            Frames[frameNumber].push(Rolls[idx], Rolls[idx + 1]);
            idx++;
            if (frameNumber != 10)
                frameNumber++;
        }
    }

    if(frameNumber != 10)
        throw new Error('Total Frames are less than 10.');

    return scoreCal(Frames);
    // console.log(Frames);
};

module.exports = { getScore };