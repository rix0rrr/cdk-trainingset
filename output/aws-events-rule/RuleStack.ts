import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface RulestackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Rulestack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: RulestackProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const myRuleA44ab831 = new events.CfnRule(this, 'MyRuleA44AB831', {
      eventPattern: {
        account: [
          'account1',
          'account2',
        ],
        detail: {
          foo: [
            1,
            2,
          ],
          strings: [
            'foo',
            'bar',
          ],
          rangeMatcher: [
            {
              numeric: [
                '>=',
                -1,
                '<=',
                1,
              ],
            },
          ],
          stringMatcher: [
            'I am just a string',
          ],
          prefixMatcher: [
            {
              prefix: 'aws.',
            },
          ],
          ipAddress: [
            {
              cidr: '192.0.2.0/24',
            },
          ],
          shouldExist: [
            {
              exists: true,
            },
          ],
          shouldNotExist: [
            {
              exists: false,
            },
          ],
          numbers: [
            {
              numeric: [
                '>',
                0,
                '<',
                5,
              ],
            },
          ],
          topLevel: {
            deeper: [
              {
                numeric: [
                  '=',
                  42,
                ],
              },
            ],
            oneMoreLevel: {
              deepest: [
                {
                  numeric: [
                    '<=',
                    -1,
                  ],
                },
                {
                  numeric: [
                    '>=',
                    1,
                  ],
                },
              ],
            },
          },
          state: [
            {
              'anything-but': [
                'initializing',
              ],
            },
          ],
          limit: [
            {
              'anything-but': [
                100,
                200,
                300,
              ],
            },
          ],
          notPrefixedBy: [
            {
              'anything-but': {
                prefix: 'sensitive-',
              },
            },
          ],
          suffix: [
            {
              suffix: '.com',
            },
          ],
          equalsIgnoreCase: [
            {
              'equals-ignore-case': 'ignore case',
            },
          ],
        },
        'detail-type': [
          'detailType1',
        ],
        id: [
          'id1',
          'id2',
        ],
        region: [
          'region1',
          'region2',
          'region3',
        ],
        resources: [
          'r1',
        ],
        source: [
          'src1',
          'src2',
        ],
        time: [
          't1',
        ],
        version: [
          '0',
        ],
      },
      state: 'ENABLED',
    });
  }
}

