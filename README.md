# sanctuary_profiling

Run the following:

 - `yarn` to restore dependencies
 - `yarn data` to download a dataset
 - `yarn start` to run the testcase JS file with profiling (you'll probably want to abort after 10-20s)
 - `yarn process` to convert the dumped profiling data to a readable file in `processed.txt`

The most useful information in the `processed.txt` file is going to be the section entitled `Bottom up (heavy) profile` which shows a tree view of functions by proportion of sampled ticks they were running during.
