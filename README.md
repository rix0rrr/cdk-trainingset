CDK Training Set
================

Collecting a CDK programs training set.

This trainig set is based on the integ tests of the CDK repository.

The data set
------------

The data set has a number of high-level CDK programs, and the CloudFormation
templates that these high-level programs produce. A single high-level program
may produce more than one output template.

For every template, a reverse-engineered low-level CDK program is provided if
possible. These have been automatically converted using
[cdk-from-cfn](https://github.com/cdklabs/cdk-from-cfn). This tool doesn't
support all templates yet, some low-level CDK programs may be missing.

Preparation
------------

You must have Node. Run the following command to install all Node dependencies:

```shell
npm ci
```

Running the collector
---------------------

You must have Python as well, and a local checkout of the CDK repository. Run
the following command to refresh the samples taken from the CDK repo:

```shell
python3 collect-samples.py /path/to/aws-cdk
```

Synthesizing example programs
-----------------------------

The example programs are synthesized using `ts-node` and have been slightly rewritten
to work exactly with the `tsconfig.json` in this directory.

Synthesizing a single program to a `cdk.out` directory looks like this:

```shell
npx cdk -a "ts-node --transpile-only /path/to/program.ts" synth
```

To synthesize everything to its own `output/<test_name>/high_level.ts.cdk.out` directory, run:

```shell
./synth-all.sh
```

Not all examples are guaranteed to synth correctly, as some of them depend on
files that may not exist in the current repository.

Evaluating the CloudFormation template
--------------------------------------

Symbolically evaluating the CloudFormation can be done using [cfngine](https://github.com/rix0rrr/cfngine).
This will produce a JSON-lines formatted output stream picking a certain order to evaluate the resources in,
and will evaluate the expressions in the template to symbolic values that represent the inputs.

```shell
npx cfngine create /path/to/template.json
```

Or run `eval-all.sh` to do all of them:

```shell
./eval-all.sh
```
