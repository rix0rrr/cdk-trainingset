#!/bin/bash
# Evaluate all templates using CFNgine

find output -name \*.template.json | xargs -n1 npx cfngine create