#!/bin/sh

set -o errexit
set -o nounset

if [ ! -z "$(git status --porcelain)" ];
then
    echo "uncommited changes, please commit or stash"
    exit 1
fi

for f in $(grep -xL '"use strict";' $(git ls-files | grep "\.js$"))
do
    echo -e '"use strict";\n' | cat - ${f} > ${f}.strict
    rm ${f}
    mv ${f}{.strict,}
done
