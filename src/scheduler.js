/**
 * Creates an instance of the mlfq scheduler
 */

import Scheduler from "./mlfq";

import random from "random-seed";

const scheduler = new Scheduler({
    timeQuantums: [5, 9, 15, 20],
    boostTime: 50,
    random: (function(){
        const gen = random.create();
        return {
            seed(seed) {
                gen.seed(seed);
            },
            range(highLow) {
                return gen.intBetween(...highLow);
            }
        };
    }()),
    ioFrequencyRange: [0, 0],
    jobRuntimeRange: [20, 50],
    numJobsRange: [3, 4],
    jobCreateTimeRange: [3, 8],
    ioLengthRange: [1, 3]
});
export default scheduler;