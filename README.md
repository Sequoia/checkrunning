# Usage

I put this in `npm scripts` to check if e.g. mongod is running before I start my
application. Example package.json:
```
{
  ...
  "scripts" : {
    "start"      : "npm run checkmongo && npm server/server-that-requires-mongo.js",
    "checkmongo" : "checkrunning mongod",
    "test"       : "checkrunning mysqld && mocha test" // <-- alternately
  }
  ...
}
```

If `mongod` (or whatever process) isn't running, it will print a big 'ol message
to let you know, then `exit(1)` so further scripts won't run.

```
 __________________________
< mongod is not running!!! >
 --------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

# Notes
Relies on machine having `pgrep` installed (most mac & linux machines should)
