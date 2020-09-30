# Documentation

Currently available at [https://docs.projectalice.io](https://docs.projectalice.io)


# Building locally
This wiki is build using vuepress. If you want to test it locally you need to build it:

```
vuepress build docs
```

Serve the website locally e.g. with [`http-server`](https://www.npmjs.com/package/http-server) and **not** with the inbuilt server!


## Jetbrain's Webstorm

[Webstorm](https://www.jetbrains.com/webstorm/) integrates a run/debug configuration tool that comes very handy for this. This package uses [`http-server`](https://www.npmjs.com/package/http-server) as webserver.
- Make sure you have [`node.js`](https://nodejs.org/en/) installed
- Clone this repo in Webstorm
- Open the `package.json` file
   - Webstorm should automatically propose to install the non available dependencies
   - If now, click on the packages that should be highlighted and `alt+enter` them, choosing `install xxx` for each
- Open the `Run/Debug configuration` tool
- Create 2 new `npm` configurations:
   - Build
      - package.json: Pointing to the repo's `package.json` file
      - Command: `run`
      - Script: `build`
   - Serve
      - package.json: Pointing to the repo's `package.json` file
      - Command: `run`
      - Script: `serve`
      - Arguments: `-O`
- Now you can first `build` the sources and then `serve` them as a local http server, all in one click! The `serve`command will give you the url to use to browse your local documentation website!
