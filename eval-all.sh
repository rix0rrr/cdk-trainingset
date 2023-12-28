#!/bin/bash
# Evaluate all templates using CFNgine
find output -name \*.template.json | while read template; do
    echo "=== $template ==="
    npx cfngine create $template
done