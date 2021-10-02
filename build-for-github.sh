#!/bin/bash

PRJ_NAME=`echo ${PWD##*/}`

echo "Project: ${PRJ_NAME}"

if [[ $1 == "--prod" ]]; then
  build_opt="--prod"
fi

# ng build "${build_opt}" --output-path docs --deploy-url "${PRJ_NAME}/"
ng build "${build_opt}" --output-path docs --base-href "${PRJ_NAME}/"

# -----------------------------------------------------------------------
INDEX_FN=docs/index.html
TEMP_FN="${INDEX_FN}.temp"
sed -i "s/base href=\"${PRJ_NAME}\/\"/base href=\"\/${PRJ_NAME}\/\"/g" "${INDEX_FN}"


if [[ ! -f "docs/404.html" ]]; then
  cp -p "docs/index.html" "docs/404.html"
fi

