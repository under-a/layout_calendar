report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Calendar_initial_state.png",
        "test": "..\\bitmaps_test\\20240125-053931\\Calendar_initial_state.png",
        "selector": "body",
        "fileName": "Calendar_initial_state.png",
        "label": "Calendar initial state",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Calendar_day_with_hover_effect.png",
        "test": "..\\bitmaps_test\\20240125-053931\\Calendar_day_with_hover_effect.png",
        "selector": "body",
        "fileName": "Calendar_day_with_hover_effect.png",
        "label": "Calendar day with hover effect",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.07260640462239584,
          "misMatchPercentage": "0.07",
          "analysisTime": 39
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Calendar_starting_from_Wednesday.png",
        "test": "..\\bitmaps_test\\20240125-053931\\Calendar_starting_from_Wednesday.png",
        "selector": "body",
        "fileName": "Calendar_starting_from_Wednesday.png",
        "label": "Calendar starting from Wednesday",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 12.523778279622396,
          "misMatchPercentage": "12.52",
          "analysisTime": 47
        },
        "diffImage": "..\\bitmaps_test\\20240125-053931\\failed_diff_Calendar_starting_from_Wednesday.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Calendar_with_length_of_29_days.png",
        "test": "..\\bitmaps_test\\20240125-053931\\Calendar_with_length_of_29_days.png",
        "selector": "body",
        "fileName": "Calendar_with_length_of_29_days.png",
        "label": "Calendar with length of 29 days",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 12.232716878255207,
          "misMatchPercentage": "12.23",
          "analysisTime": 44
        },
        "diffImage": "..\\bitmaps_test\\20240125-053931\\failed_diff_Calendar_with_length_of_29_days.png"
      },
      "status": "fail"
    }
  ]
});