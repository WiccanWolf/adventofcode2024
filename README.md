# adventofcode2024

Link to the public challenge: [Advent of Code](https://adventofcode.com/2024/)

**Day 1: Historian Hysteria**

_Challenge_

Advent of Code 2024 begins with "Day 1: Historian Hysteria," where the Chief Historian, vital to the Christmas sleigh launch, has mysteriously disappeared. Senior Historians believe he was visiting historically significant locations near the North Pole and have enlisted your help in searching for him. To save Christmas, you need to help them collect fifty stars, earned by solving puzzles, before Santa sets off on 25th December. However, the search starts with a problem—two incomplete lists of location IDs are found in the Chief Historian’s office, and these need to be reconciled to identify the places to check.

The puzzle requires pairing and comparing numbers from the two lists to calculate the total distance between them. The smallest remaining numbers from both lists are matched for each pair, and their difference is calculated. The objective is to sum these differences to determine the total distance. Using the example provided, the distances add up to 11. Participants must perform a similar calculation on their actual puzzle input to assist the Senior Historians in locating the Chief Historian and ensuring Christmas is saved.

_Comments_

Wow. And I mean wow. This was so much fun. My first thought was obviously how I would be able to parse the input information given to a readable file, and the fs library helped LOADS. Quite pleased with how the code came out in the end!

**Day 2: Red-Nosed Reports**

_Challenge_

The Historians begin searching the Red-Nosed Reindeer nuclear fusion/fission plant for the Chief Historian, but while no trace of the historian is found, engineers approach you with unusual data from the reactor. Each report contains a list of levels, which are deemed safe if they are either entirely increasing or decreasing, with adjacent levels differing by 1 to 3. Initially, only 2 reports in the example are safe. However, the engineers reveal a Problem Dampener module allows the system to ignore a single bad level in an otherwise safe report, increasing the count of safe reports to 4 in the example. This adjustment changes the task to determine how many reports are safe with the Dampener applied.

_Comments_

Array methods are the best. I have little else to say regarding this matter...

But in all seriousness, once again loads of fun. Whilst not the cleanest code, I'm so glad that it works; that's another two stars on my belt!

**Day 3: Mull It Over**

_Challenge_

Analyse corrupted programme memory to extract and process valid mul(X, Y) instructions, which multiply two numbers, ignoring invalid characters and corrupted sequences. Initially, compute the sum of all valid multiplication results. Then, incorporate conditional statements: do() enables and don't() disables future mul instructions, with only the most recent condition affecting subsequent operations. Finally, compute the sum of results from enabled multiplications based on these conditions.

_Comments_

I have to admit, this one got me good. Part 1 was relatively painless, but moving onto part 2 felt like swimming through custard. As I had started I pushed through to get my two stars, but following days I may tap out early if I have no hide nor hair of being able to complete the task.

**Day 4: Ceres Search**

_Challenge_

In this puzzle, you need to find all occurrences of the word "XMAS" within a word search grid, where the word can appear horizontally, vertically, diagonally, in reverse, or overlapping with other words. For the second part, the task shifts to finding the pattern of two "MAS" arranged in an "X" shape within the grid, where each "MAS" can be written forwards or backwards. The challenge is to count all instances of this specific X-MAS pattern throughout the grid.

_Comments_

This was really fun! A bit confusing at the very beginning on how to parse the information into a grid, but I managed to sit and think for a bit of how to write a function to do it for me!

**Day 4: Print Queue**

_Challenge_

On Day 5, the Historians search for the North Pole printing department, where an Elf operates a printer. They encounter a problem with the new sleigh launch safety manual updates, which are not printed correctly. The Elf provides the page ordering rules and page numbers for each update, but struggles to determine the correct order. To fix the issue, they identify the correct order of the updates, which are then printed in the correct order. The Elf also needs to know the middle page number of each update.

_Comments_

I'm starting to really dislike these elves to be honest. Gimli son of Glóin becomes more understandable year by year...BUT programmatically this one was a nice breathe of fresh air as opposed to yesterdays! There's no obligation but I'm going to try and steer away from `for...loops` going forward where possible, but this was an incredibly fun challenge to do!
