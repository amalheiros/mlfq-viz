export default {
   lessonName: "EXPLORE-2",
   simulation: {
      timeQuantums: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      boostTime: Infinity,
      resetTQsOnIO: true,
      speed: 10,
      generation: [
         {
            ioFrequencyRange: [1, 1],
            jobRuntimeRange: [Infinity, Infinity],
            numJobsRange: [2, 2],
            jobCreateTimeRange: [1, 10],
            ioLengthRange: [1, 50]
         },
      ]
   },
   scheduler: {
      attributes: [
         "none",
         ".init.ioFreq",
         ".init.ioLength",
         "tq",
         "none&priority=greyscale",
         "tq&priority=greyscale",
         "none&priority=rainbow",
         "tq&priority=rainbow"
      ],
      options: {
         showBoostTimer: true
      }
   },
   splom: {
      attributes: [
         ".init.ioFreq",
         ".perf.responseTime",
         ".perf.turnaroundTime",
         ".running.avgPriority"
      ]
   },
   parallel: {
      attributes: [
         ".init.runTime",
         ".init.createTime",
         ".init.ioFreq"
      ]
   },
   parameter: {
        "render": true,
        "Scheduler Parameters": {
            "Boost Time": 100,
            "Number of Queues": 12,
            "timeQuantums": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            
        },
        "Job Generator": {
            "Duration": 10,
            "Number of Jobs": 10, 
            "IO Frequency Min" : 10,
            'IO Frequency Max' : 20,
            "IO Length Min" : 10,
            "IO Length Max" : 15,
        },
   },
   details: {
      lesson: [
         {
            message: "Welcome to Explore mode! You are free here to play around with any MLFQ configuration you wish. The Job Generation panel is available in the parameter panel in the top right. Have fun!",
            atCycle: 1,
            dontPause: true
         },
         {
            message: "Your an MLFQ Warrior!",
            atCycle: 100,
            dontPause: true
         },
         {
            message: "Fantastic Work! Keep Exploring!",
            atCycle: 200,
            dontPause: true
         },
         {
            message: "I'm glad your enjoying the visualization",
            atCycle: 300,
            dontPause: true
         },
         {
            message: "Wow! This is quite a lengthy simulation",
            atCycle: 400,
            dontPause: true
         },
         {
            message: "Sorry, this is all we got for messages in explore mode",
            atCycle: 500,
            dontPause: true
         }
      ],
      attributes: [
         ".init.ioFreq",
         ".init.runTime",
         "timeQuantum",
         ".perf.turnaroundTime",
         ".running.priority",
         ".running.serviceTime",
         ".running.avgPriority",
         ".perf.responseTime",
         ".init.ioLength",
      ]
   },
   navigation: [
      "scheduler",
      "parameter",
      "details",
      "splom",
      "parallel"
   ]
}