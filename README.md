# adventofcode2024

Link to the public challenge: [Advent of Code](https://adventofcode.com/2024/)

**Day 1:**

_Challenge_

Advent of Code 2024 begins with "Day 1: Historian Hysteria," where the Chief Historian, vital to the Christmas sleigh launch, has mysteriously disappeared. Senior Historians believe he was visiting historically significant locations near the North Pole and have enlisted your help in searching for him. To save Christmas, you need to help them collect fifty stars, earned by solving puzzles, before Santa sets off on 25th December. However, the search starts with a problem—two incomplete lists of location IDs are found in the Chief Historian’s office, and these need to be reconciled to identify the places to check.

The puzzle requires pairing and comparing numbers from the two lists to calculate the total distance between them. The smallest remaining numbers from both lists are matched for each pair, and their difference is calculated. The objective is to sum these differences to determine the total distance. Using the example provided, the distances add up to 11. Participants must perform a similar calculation on their actual puzzle input to assist the Senior Historians in locating the Chief Historian and ensuring Christmas is saved.

_Comments_

Wow. And I mean wow. This was so much fun. My first thought was obviously how I would be able to parse the input information given to a readable file, and the fs library helped LOADS. Quite pleased with how the code came out in the end!

**Day 2:**

_Challenge_

The Historians begin searching the Red-Nosed Reindeer nuclear fusion/fission plant for the Chief Historian, but while no trace of the historian is found, engineers approach you with unusual data from the reactor. Each report contains a list of levels, which are deemed safe if they are either entirely increasing or decreasing, with adjacent levels differing by 1 to 3. Initially, only 2 reports in the example are safe. However, the engineers reveal a Problem Dampener module allows the system to ignore a single bad level in an otherwise safe report, increasing the count of safe reports to 4 in the example. This adjustment changes the task to determine how many reports are safe with the Dampener applied.

_Comments_

Array methods are the best. I have little else to say regarding this matter...

But in all seriousness, once again loads of fun. Whilst not the cleanest code, I'm so glad that it works; that's another two stars on my belt!
