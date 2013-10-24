#!/bin/sh
#adding support for css sourcemaps
sass --watch --sourcemap --load-path="css/scss" --style="compressed" css:css

exit 0
