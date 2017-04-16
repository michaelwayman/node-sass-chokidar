# node-sass-chokidar

A thin wrapper around node-sass executable to replicate `node-sass --watch --recursive` using chokidar instead of Gaze

All the functionality of the node-sass executable is still in tact, the only difference being chokidar instead of Gaze for watching files.

Why? Because Gaze in docker and various virtual machines uses a lot of resources whereas chokidar does not.
I am able to reduce my CPU usage from %120 down to 6% when using node-sass-chokidar instead of node-sass for file watching.

## Usage

The exact same as the node-sass executable except:

 - the `--recursive` is non-configurable and always set to true.

example:

`node-sass-chokidar src/ -o src/ --watch --recursive`


## Contributing

Feel free.
