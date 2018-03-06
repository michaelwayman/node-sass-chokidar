# node-sass-chokidar

[![Build Status](https://travis-ci.org/michaelwayman/node-sass-chokidar.svg?branch=master)](https://travis-ci.org/michaelwayman/node-sass-chokidar)

A thin wrapper around node-sass executable to use chokidar instead of Gaze when watching files.

All the functionality of the node-sass executable is still intact, the only difference being chokidar instead of Gaze for watching files.

Why? Because Gaze in docker and various virtual machines uses a lot of resources whereas chokidar does not.
Read about the advantages of [chokidar](https://github.com/paulmillr/chokidar)

When using `node-sass --watch` in docker for mac you will get really high CPU usage with com.docker.hyperkit and com.docker.osxfs (I've seen reports of up to 300%).
The cause of this is the node-sass dependency on [Gaze](https://github.com/shama/gaze). This package fixes this issue by using chokidar with node-sass instead of Gaze.

## Usage

```
  node-sass-chokidar [options] <input.scss>
  cat <input.scss> | node-sass-chokidar [options] > output.css

Example: Compile foobar.scss to foobar.css
  node-sass-chokidar --output-style compressed foobar.scss > foobar.css
  cat foobar.scss | node-sass-chokidar --output-style compressed > foobar.css

Example: Watch the sass directory for changes, compile with sourcemaps to the css directory
  node-sass-chokidar --watch --output css
    --source-map true --source-map-contents sass

Options
  -w, --watch                Watch a directory or file
  -m, --match-regex          Only watches files that match the regular expression
  -o, --output               Output directory
  -x, --omit-source-map-url  Omit source map URL comment from output
  -i, --indented-syntax      Treat data from stdin as sass code (versus scss)
  -q, --quiet                Suppress log output except on error
  -v, --version              Prints version info
  --output-style             CSS output style (nested | expanded | compact | compressed)
  --indent-type              Indent type for output CSS (space | tab)
  --indent-width             Indent width; number of spaces or tabs (maximum value: 10)
  --linefeed                 Linefeed style (cr | crlf | lf | lfcr)
  --source-comments          Include debug info in output
  --source-map               Emit source map
  --source-map-contents      Embed include contents in map
  --source-map-embed         Embed sourceMappingUrl as data URI
  --source-map-root          Base path, will be emitted in source-map as is
  --include-path             Path to look for imported files
  --follow                   Follow symlinked directories
  --precision                The amount of precision allowed in decimal numbers
  --error-bell               Output a bell character on errors
  --importer                 Path to .js file containing custom importer
  --functions                Path to .js file containing custom functions
  --help                     Print usage info'
```


example:

`node-sass-chokidar src/ -o src/ --watch`


## Contributing

Feel free.
