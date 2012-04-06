# Google App Engine Go Boilerplate

## About

This project aims to give developers an easy to use boilerplate project that can
easily jumpstart projects utilizing App Engine's Go runtime and the Closure
compiler.

## Features

* Preliminary backend boilerplate taken care of!
* Directory structure supports applications with backend/frontend architecture,
  using RPC calls to go between.
* Built in support for Closure.
* Incorporates plovr to dynamically recompile JS during development

## Usage

### Backend Changes

Do nothing; App Engine should pick up your edits and recompile automatically

### Frontend Changes

* Run build.sh, which runs plovr in server mode.  Our default index.html calls
  out to the plovr daemon to recompile the JS as defined in config.js.

## Deploying to App Engine

* Not finished.

## TODO

* Develop push-to-production system.
* Incorporate basic User model for backend.
* Build example RPCs.
* Include a more advanced directory structure for the frontend JS.
* See about incorporating html5bp?
