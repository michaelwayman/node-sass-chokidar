# node-sass-chokidar

A thin wrapper around node-sass executable to replicate `node-sass --watch --recursive` using chokidar instead of Gaze


## Usage

The exact same as the node-sass executable except:

 - the `--recursive` is non-configurable and always set to true.

example:

