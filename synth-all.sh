#!/bin/bash
# Synthesize all high-level programs using CDK

for high_level in output/*/high_level.ts; do
  npx cdk -a "ts-node --transpile-only $high_level" --output "$high_level.cdk.out" synth
done
