import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-lambda-python-poetryProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-lambda-python-poetry extends cdk.Stack {
  public readonly exportsOutputRefmyhandlerinlinepython37Bc8b334f06029f9c;
  public readonly exportsOutputRefmyhandlerinlinepython38Bca26446cbd4f87b;
  public readonly exportsOutputRefmyhandlerinlinepython3914E0d89daa53377b;
  public readonly exportsOutputRefmyhandlerinlinepython310Cceb365da798dc08;
  public readonly exportsOutputRefmyhandlerinlinepython31130A54f685779d70d;
  public readonly exportsOutputRefmyhandlerinlinewithhashespython37B3e12b2b2f3c297a;
  public readonly exportsOutputRefmyhandlerinlinewithhashespython38Fd5608984b9a39b3;
  public readonly exportsOutputRefmyhandlerinlinewithhashespython3964Cae28415366198;
  public readonly exportsOutputRefmyhandlerinlinewithhashespython310Bd04f877d52de581;
  public readonly exportsOutputRefmyhandlerinlinewithhashespython311819Ad79ba116b6b3;
  public readonly exportsOutputRefmyhandlerinlineexcludespython377F552f31ce103f4e;
  public readonly exportsOutputRefmyhandlerinlineexcludespython387A43ace766e3d5dd;
  public readonly exportsOutputRefmyhandlerinlineexcludespython39Abb3dfe9a0059a3d;
  public readonly exportsOutputRefmyhandlerinlineexcludespython310B7555d7a7ba49fc6;
  public readonly exportsOutputRefmyhandlerinlineexcludespython3113F187913b9a340d2;
  public readonly exportsOutputRefmyhandlerwithhashesexcludespython374A7f71a816929765;
  public readonly exportsOutputRefmyhandlerwithhashesexcludespython38788Ac0c672121ca3;
  public readonly exportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622eb;
  public readonly exportsOutputRefmyhandlerwithhashesexcludespython310E3eb25fb48aa64d9;
  public readonly exportsOutputRefmyhandlerwithhashesexcludespython3111047790925870Ede;
  public readonly exportsOutputRefmyhandlerinlinewithouturlspython3761Fa6bccade5f533;
  public readonly exportsOutputRefmyhandlerinlinewithouturlspython382Ce9570952ae2c3e;
  public readonly exportsOutputRefmyhandlerinlinewithouturlspython39B9799e297ce3b777;
  public readonly exportsOutputRefmyhandlerinlinewithouturlspython310D1d226e35105656c;
  public readonly exportsOutputRefmyhandlerinlinewithouturlspython31174A8d66561f57634;

  public constructor(scope: cdk.App, id: string, props: integ-lambda-python-poetryProps = {}) {
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
    const myhandlerinlineexcludespython310ServiceRoleDc036fc7 = new iam.CfnRole(this, 'myhandlerinlineexcludespython310ServiceRoleDC036FC7', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlineexcludespython311ServiceRole21E684e7 = new iam.CfnRole(this, 'myhandlerinlineexcludespython311ServiceRole21E684E7', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlineexcludespython37ServiceRole1Fec836e = new iam.CfnRole(this, 'myhandlerinlineexcludespython37ServiceRole1FEC836E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlineexcludespython38ServiceRoleE5f2da08 = new iam.CfnRole(this, 'myhandlerinlineexcludespython38ServiceRoleE5F2DA08', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlineexcludespython39ServiceRole9B90b7ff = new iam.CfnRole(this, 'myhandlerinlineexcludespython39ServiceRole9B90B7FF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinepython310ServiceRoleB4606ab1 = new iam.CfnRole(this, 'myhandlerinlinepython310ServiceRoleB4606AB1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinepython311ServiceRole4B8aba44 = new iam.CfnRole(this, 'myhandlerinlinepython311ServiceRole4B8ABA44', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinepython37ServiceRole27D3e37d = new iam.CfnRole(this, 'myhandlerinlinepython37ServiceRole27D3E37D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinepython38ServiceRole28Ded54e = new iam.CfnRole(this, 'myhandlerinlinepython38ServiceRole28DED54E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinepython39ServiceRoleEde997c5 = new iam.CfnRole(this, 'myhandlerinlinepython39ServiceRoleEDE997C5', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithhashespython310ServiceRole37B48c89 = new iam.CfnRole(this, 'myhandlerinlinewithhashespython310ServiceRole37B48C89', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithhashespython311ServiceRole9B42c343 = new iam.CfnRole(this, 'myhandlerinlinewithhashespython311ServiceRole9B42C343', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithhashespython37ServiceRole458E7358 = new iam.CfnRole(this, 'myhandlerinlinewithhashespython37ServiceRole458E7358', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithhashespython38ServiceRoleB1ce4654 = new iam.CfnRole(this, 'myhandlerinlinewithhashespython38ServiceRoleB1CE4654', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithhashespython39ServiceRole220659D2 = new iam.CfnRole(this, 'myhandlerinlinewithhashespython39ServiceRole220659D2', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithouturlspython310ServiceRoleD53ed266 = new iam.CfnRole(this, 'myhandlerinlinewithouturlspython310ServiceRoleD53ED266', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithouturlspython311ServiceRoleE7136845 = new iam.CfnRole(this, 'myhandlerinlinewithouturlspython311ServiceRoleE7136845', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithouturlspython37ServiceRoleC3f45b72 = new iam.CfnRole(this, 'myhandlerinlinewithouturlspython37ServiceRoleC3F45B72', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithouturlspython38ServiceRoleAa1036da = new iam.CfnRole(this, 'myhandlerinlinewithouturlspython38ServiceRoleAA1036DA', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerinlinewithouturlspython39ServiceRole99A4a7ce = new iam.CfnRole(this, 'myhandlerinlinewithouturlspython39ServiceRole99A4A7CE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerwithhashesexcludespython310ServiceRole96Eb96ad = new iam.CfnRole(this, 'myhandlerwithhashesexcludespython310ServiceRole96EB96AD', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerwithhashesexcludespython311ServiceRoleB81fa0c8 = new iam.CfnRole(this, 'myhandlerwithhashesexcludespython311ServiceRoleB81FA0C8', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerwithhashesexcludespython37ServiceRole3672Adeb = new iam.CfnRole(this, 'myhandlerwithhashesexcludespython37ServiceRole3672ADEB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerwithhashesexcludespython38ServiceRoleD62b2ac6 = new iam.CfnRole(this, 'myhandlerwithhashesexcludespython38ServiceRoleD62B2AC6', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myhandlerwithhashesexcludespython39ServiceRole29B2d833 = new iam.CfnRole(this, 'myhandlerwithhashesexcludespython39ServiceRole29B2D833', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (myhandlerinlineexcludespython310ServiceRoleDc036fc7 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludespython310ServiceRoleDc036fc7' to be undefined. Fixit.`); }
    const myhandlerinlineexcludespython310B7555d7a = new lambda.CfnFunction(this, 'myhandlerinlineexcludespython310B7555D7A', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b271a1a8d8b5114d5207ae10b70cf04f3ec3ac77ab60a8abe6e48736628de2f7.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlineexcludespython310ServiceRoleDc036fc7.attrArn,
      runtime: 'python3.10',
    });
    myhandlerinlineexcludespython310B7555d7a.addDependency(myhandlerinlineexcludespython310ServiceRoleDc036fc7);

    if (myhandlerinlineexcludespython311ServiceRole21E684e7 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludespython311ServiceRole21E684e7' to be undefined. Fixit.`); }
    const myhandlerinlineexcludespython3113F187913 = new lambda.CfnFunction(this, 'myhandlerinlineexcludespython3113F187913', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '4c729ea227175e29ac61182f2a8aafa1f7c1e246b0b180daf3e7af3d940a3e5d.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlineexcludespython311ServiceRole21E684e7.attrArn,
      runtime: 'python3.11',
    });
    myhandlerinlineexcludespython3113F187913.addDependency(myhandlerinlineexcludespython311ServiceRole21E684e7);

    if (myhandlerinlineexcludespython37ServiceRole1Fec836e == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludespython37ServiceRole1Fec836e' to be undefined. Fixit.`); }
    const myhandlerinlineexcludespython377F552f31 = new lambda.CfnFunction(this, 'myhandlerinlineexcludespython377F552F31', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '64fd4db7021f0d4f5fcb77c8ab0071480d94270ba0f4bd1a1981bc765c04e519.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlineexcludespython37ServiceRole1Fec836e.attrArn,
      runtime: 'python3.7',
    });
    myhandlerinlineexcludespython377F552f31.addDependency(myhandlerinlineexcludespython37ServiceRole1Fec836e);

    if (myhandlerinlineexcludespython38ServiceRoleE5f2da08 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludespython38ServiceRoleE5f2da08' to be undefined. Fixit.`); }
    const myhandlerinlineexcludespython387A43ace7 = new lambda.CfnFunction(this, 'myhandlerinlineexcludespython387A43ACE7', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5a5a360e66a52641c11525c9bba236d689497f5722ed0654a2de74df56b89706.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlineexcludespython38ServiceRoleE5f2da08.attrArn,
      runtime: 'python3.8',
    });
    myhandlerinlineexcludespython387A43ace7.addDependency(myhandlerinlineexcludespython38ServiceRoleE5f2da08);

    if (myhandlerinlineexcludespython39ServiceRole9B90b7ff == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludespython39ServiceRole9B90b7ff' to be undefined. Fixit.`); }
    const myhandlerinlineexcludespython39Abb3dfe9 = new lambda.CfnFunction(this, 'myhandlerinlineexcludespython39ABB3DFE9', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f4fb78ff27db1b13da1120a5f24f5b3ff27ba1b194bdc68689d022e163ac75f5.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlineexcludespython39ServiceRole9B90b7ff.attrArn,
      runtime: 'python3.9',
    });
    myhandlerinlineexcludespython39Abb3dfe9.addDependency(myhandlerinlineexcludespython39ServiceRole9B90b7ff);

    if (myhandlerinlinepython310ServiceRoleB4606ab1 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinepython310ServiceRoleB4606ab1' to be undefined. Fixit.`); }
    const myhandlerinlinepython310Cceb365d = new lambda.CfnFunction(this, 'myhandlerinlinepython310CCEB365D', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'be6c0b2dea29e6ed6e4be6bb7a39289b6d7ca3aa1ccb248d7b5f025b0b5774e7.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinepython310ServiceRoleB4606ab1.attrArn,
      runtime: 'python3.10',
    });
    myhandlerinlinepython310Cceb365d.addDependency(myhandlerinlinepython310ServiceRoleB4606ab1);

    if (myhandlerinlinepython311ServiceRole4B8aba44 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinepython311ServiceRole4B8aba44' to be undefined. Fixit.`); }
    const myhandlerinlinepython31130A54f68 = new lambda.CfnFunction(this, 'myhandlerinlinepython31130A54F68', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '94b852d98ff8374dd9054eb1fe7bf74141ee9716990da48b27f034a4dc859d70.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinepython311ServiceRole4B8aba44.attrArn,
      runtime: 'python3.11',
    });
    myhandlerinlinepython31130A54f68.addDependency(myhandlerinlinepython311ServiceRole4B8aba44);

    if (myhandlerinlinepython37ServiceRole27D3e37d == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinepython37ServiceRole27D3e37d' to be undefined. Fixit.`); }
    const myhandlerinlinepython37Bc8b334f = new lambda.CfnFunction(this, 'myhandlerinlinepython37BC8B334F', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '4961a9d645e019fecbc70b19ffa0272315b2b1a7c56c6a8c92ce23e5ed985118.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinepython37ServiceRole27D3e37d.attrArn,
      runtime: 'python3.7',
    });
    myhandlerinlinepython37Bc8b334f.addDependency(myhandlerinlinepython37ServiceRole27D3e37d);

    if (myhandlerinlinepython38ServiceRole28Ded54e == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinepython38ServiceRole28Ded54e' to be undefined. Fixit.`); }
    const myhandlerinlinepython38Bca26446 = new lambda.CfnFunction(this, 'myhandlerinlinepython38BCA26446', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '49df314cd6b3cfab9b999ec1bc8fe4471e78a95d1adc9db0150c32b652092676.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinepython38ServiceRole28Ded54e.attrArn,
      runtime: 'python3.8',
    });
    myhandlerinlinepython38Bca26446.addDependency(myhandlerinlinepython38ServiceRole28Ded54e);

    if (myhandlerinlinepython39ServiceRoleEde997c5 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinepython39ServiceRoleEde997c5' to be undefined. Fixit.`); }
    const myhandlerinlinepython3914E0d89d = new lambda.CfnFunction(this, 'myhandlerinlinepython3914E0D89D', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '78b6872b90ce311c3490484ff1911942dd738f6bc7c27a4a4da0256c110e96a6.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinepython39ServiceRoleEde997c5.attrArn,
      runtime: 'python3.9',
    });
    myhandlerinlinepython3914E0d89d.addDependency(myhandlerinlinepython39ServiceRoleEde997c5);

    if (myhandlerinlinewithhashespython310ServiceRole37B48c89 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithhashespython310ServiceRole37B48c89' to be undefined. Fixit.`); }
    const myhandlerinlinewithhashespython310Bd04f877 = new lambda.CfnFunction(this, 'myhandlerinlinewithhashespython310BD04F877', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'cf17060a6f560dc599a9bf1eaabe14c5240e068d473529cb110f78c5823ffa99.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithhashespython310ServiceRole37B48c89.attrArn,
      runtime: 'python3.10',
    });
    myhandlerinlinewithhashespython310Bd04f877.addDependency(myhandlerinlinewithhashespython310ServiceRole37B48c89);

    if (myhandlerinlinewithhashespython311ServiceRole9B42c343 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithhashespython311ServiceRole9B42c343' to be undefined. Fixit.`); }
    const myhandlerinlinewithhashespython311819Ad79b = new lambda.CfnFunction(this, 'myhandlerinlinewithhashespython311819AD79B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'fe5fab635abf310185672141df359f88f07980402e7cb812777001dcd69bfb4d.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithhashespython311ServiceRole9B42c343.attrArn,
      runtime: 'python3.11',
    });
    myhandlerinlinewithhashespython311819Ad79b.addDependency(myhandlerinlinewithhashespython311ServiceRole9B42c343);

    if (myhandlerinlinewithhashespython37ServiceRole458E7358 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithhashespython37ServiceRole458E7358' to be undefined. Fixit.`); }
    const myhandlerinlinewithhashespython37B3e12b2b = new lambda.CfnFunction(this, 'myhandlerinlinewithhashespython37B3E12B2B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3a27fa37add964799080013f1bd48239fe0f8ecdba1e8bd28b116402de174a85.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinewithhashespython37ServiceRole458E7358.attrArn,
      runtime: 'python3.7',
    });
    myhandlerinlinewithhashespython37B3e12b2b.addDependency(myhandlerinlinewithhashespython37ServiceRole458E7358);

    if (myhandlerinlinewithhashespython38ServiceRoleB1ce4654 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithhashespython38ServiceRoleB1ce4654' to be undefined. Fixit.`); }
    const myhandlerinlinewithhashespython38Fd560898 = new lambda.CfnFunction(this, 'myhandlerinlinewithhashespython38FD560898', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3b693989e77ff10ae3ef9d47d5227570b20ee9b84fb88d5a43d0801865317230.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinewithhashespython38ServiceRoleB1ce4654.attrArn,
      runtime: 'python3.8',
    });
    myhandlerinlinewithhashespython38Fd560898.addDependency(myhandlerinlinewithhashespython38ServiceRoleB1ce4654);

    if (myhandlerinlinewithhashespython39ServiceRole220659D2 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithhashespython39ServiceRole220659D2' to be undefined. Fixit.`); }
    const myhandlerinlinewithhashespython3964Cae284 = new lambda.CfnFunction(this, 'myhandlerinlinewithhashespython3964CAE284', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '50808d5bbdd0122e427bf90d07ad954db69389aa43e9a1d43273f454d2e25e52.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithhashespython39ServiceRole220659D2.attrArn,
      runtime: 'python3.9',
    });
    myhandlerinlinewithhashespython3964Cae284.addDependency(myhandlerinlinewithhashespython39ServiceRole220659D2);

    if (myhandlerinlinewithouturlspython310ServiceRoleD53ed266 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithouturlspython310ServiceRoleD53ed266' to be undefined. Fixit.`); }
    const myhandlerinlinewithouturlspython310D1d226e3 = new lambda.CfnFunction(this, 'myhandlerinlinewithouturlspython310D1D226E3', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '0409083638db5cf0117049e93c301f064f5b53a1cf761af948b3a16bcb7c542f.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithouturlspython310ServiceRoleD53ed266.attrArn,
      runtime: 'python3.10',
    });
    myhandlerinlinewithouturlspython310D1d226e3.addDependency(myhandlerinlinewithouturlspython310ServiceRoleD53ed266);

    if (myhandlerinlinewithouturlspython311ServiceRoleE7136845 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithouturlspython311ServiceRoleE7136845' to be undefined. Fixit.`); }
    const myhandlerinlinewithouturlspython31174A8d665 = new lambda.CfnFunction(this, 'myhandlerinlinewithouturlspython31174A8D665', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'fbc6857e9bba3a9733740ee2e93f191201fe0cbd1d83affb12c47d6cb86e9302.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithouturlspython311ServiceRoleE7136845.attrArn,
      runtime: 'python3.11',
    });
    myhandlerinlinewithouturlspython31174A8d665.addDependency(myhandlerinlinewithouturlspython311ServiceRoleE7136845);

    if (myhandlerinlinewithouturlspython37ServiceRoleC3f45b72 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithouturlspython37ServiceRoleC3f45b72' to be undefined. Fixit.`); }
    const myhandlerinlinewithouturlspython3761Fa6bcc = new lambda.CfnFunction(this, 'myhandlerinlinewithouturlspython3761FA6BCC', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'e65fb64d4bc1b88708385c5412334c1de02b16b4ea96113fe937bf8dd85e5ef2.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinewithouturlspython37ServiceRoleC3f45b72.attrArn,
      runtime: 'python3.7',
    });
    myhandlerinlinewithouturlspython3761Fa6bcc.addDependency(myhandlerinlinewithouturlspython37ServiceRoleC3f45b72);

    if (myhandlerinlinewithouturlspython38ServiceRoleAa1036da == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithouturlspython38ServiceRoleAa1036da' to be undefined. Fixit.`); }
    const myhandlerinlinewithouturlspython382Ce95709 = new lambda.CfnFunction(this, 'myhandlerinlinewithouturlspython382CE95709', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'ddb238af225a87ab35d0b9567454cf62d03b4ad79ffdd874b809004c0e232732.zip',
      },
      handler: 'basic.handler',
      role: myhandlerinlinewithouturlspython38ServiceRoleAa1036da.attrArn,
      runtime: 'python3.8',
    });
    myhandlerinlinewithouturlspython382Ce95709.addDependency(myhandlerinlinewithouturlspython38ServiceRoleAa1036da);

    if (myhandlerinlinewithouturlspython39ServiceRole99A4a7ce == null) { throw new Error(`A combination of conditions caused 'myhandlerinlinewithouturlspython39ServiceRole99A4a7ce' to be undefined. Fixit.`); }
    const myhandlerinlinewithouturlspython39B9799e29 = new lambda.CfnFunction(this, 'myhandlerinlinewithouturlspython39B9799E29', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '027a4455d653a4b518b9d935cca80df3d0b5e7e30fe56c35de33dfe690e97b0e.zip',
      },
      handler: 'index.handler',
      role: myhandlerinlinewithouturlspython39ServiceRole99A4a7ce.attrArn,
      runtime: 'python3.9',
    });
    myhandlerinlinewithouturlspython39B9799e29.addDependency(myhandlerinlinewithouturlspython39ServiceRole99A4a7ce);

    if (myhandlerwithhashesexcludespython310ServiceRole96Eb96ad == null) { throw new Error(`A combination of conditions caused 'myhandlerwithhashesexcludespython310ServiceRole96Eb96ad' to be undefined. Fixit.`); }
    const myhandlerwithhashesexcludespython310E3eb25fb = new lambda.CfnFunction(this, 'myhandlerwithhashesexcludespython310E3EB25FB', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '291e9f447a4ce659d4def51bee83277d4309f28f2af4fbbeb0af1f73fa7b0614.zip',
      },
      handler: 'index.handler',
      role: myhandlerwithhashesexcludespython310ServiceRole96Eb96ad.attrArn,
      runtime: 'python3.10',
    });
    myhandlerwithhashesexcludespython310E3eb25fb.addDependency(myhandlerwithhashesexcludespython310ServiceRole96Eb96ad);

    if (myhandlerwithhashesexcludespython311ServiceRoleB81fa0c8 == null) { throw new Error(`A combination of conditions caused 'myhandlerwithhashesexcludespython311ServiceRoleB81fa0c8' to be undefined. Fixit.`); }
    const myhandlerwithhashesexcludespython31110477909 = new lambda.CfnFunction(this, 'myhandlerwithhashesexcludespython31110477909', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '18c5930ce44910f285d3f9019c6183b8b7d1c3baaa60678ffd2d84b3b3b423bd.zip',
      },
      handler: 'index.handler',
      role: myhandlerwithhashesexcludespython311ServiceRoleB81fa0c8.attrArn,
      runtime: 'python3.11',
    });
    myhandlerwithhashesexcludespython31110477909.addDependency(myhandlerwithhashesexcludespython311ServiceRoleB81fa0c8);

    if (myhandlerwithhashesexcludespython37ServiceRole3672Adeb == null) { throw new Error(`A combination of conditions caused 'myhandlerwithhashesexcludespython37ServiceRole3672Adeb' to be undefined. Fixit.`); }
    const myhandlerwithhashesexcludespython374A7f71a8 = new lambda.CfnFunction(this, 'myhandlerwithhashesexcludespython374A7F71A8', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'efdbabc80a2ec6abdab94acdc9596c441ea4f3f97d20a1c3c33c6d40f9631f02.zip',
      },
      handler: 'basic.handler',
      role: myhandlerwithhashesexcludespython37ServiceRole3672Adeb.attrArn,
      runtime: 'python3.7',
    });
    myhandlerwithhashesexcludespython374A7f71a8.addDependency(myhandlerwithhashesexcludespython37ServiceRole3672Adeb);

    if (myhandlerwithhashesexcludespython38ServiceRoleD62b2ac6 == null) { throw new Error(`A combination of conditions caused 'myhandlerwithhashesexcludespython38ServiceRoleD62b2ac6' to be undefined. Fixit.`); }
    const myhandlerwithhashesexcludespython38788Ac0c6 = new lambda.CfnFunction(this, 'myhandlerwithhashesexcludespython38788AC0C6', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b50962322fe3112d64107344ae1dd60be91bf4fdef484fa4fb2f06deed696be1.zip',
      },
      handler: 'basic.handler',
      role: myhandlerwithhashesexcludespython38ServiceRoleD62b2ac6.attrArn,
      runtime: 'python3.8',
    });
    myhandlerwithhashesexcludespython38788Ac0c6.addDependency(myhandlerwithhashesexcludespython38ServiceRoleD62b2ac6);

    if (myhandlerwithhashesexcludespython39ServiceRole29B2d833 == null) { throw new Error(`A combination of conditions caused 'myhandlerwithhashesexcludespython39ServiceRole29B2d833' to be undefined. Fixit.`); }
    const myhandlerwithhashesexcludespython39134584D9 = new lambda.CfnFunction(this, 'myhandlerwithhashesexcludespython39134584D9', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '50e99b45e2fff9e0762661686d17252b2a82d705866d7e5fd218f24db4b1bf43.zip',
      },
      handler: 'index.handler',
      role: myhandlerwithhashesexcludespython39ServiceRole29B2d833.attrArn,
      runtime: 'python3.9',
    });
    myhandlerwithhashesexcludespython39134584D9.addDependency(myhandlerwithhashesexcludespython39ServiceRole29B2d833);

    // Outputs
    this.exportsOutputRefmyhandlerinlinepython37Bc8b334f06029f9c = myhandlerinlinepython37Bc8b334f.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinepython37BC8B334F06029F9C', {
      key: 'ExportsOutputRefmyhandlerinlinepython37BC8B334F06029F9C',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinepython37BC8B334F06029F9C',
      value: this.exportsOutputRefmyhandlerinlinepython37Bc8b334f06029f9c!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinepython38Bca26446cbd4f87b = myhandlerinlinepython38Bca26446.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinepython38BCA26446CBD4F87B', {
      key: 'ExportsOutputRefmyhandlerinlinepython38BCA26446CBD4F87B',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinepython38BCA26446CBD4F87B',
      value: this.exportsOutputRefmyhandlerinlinepython38Bca26446cbd4f87b!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinepython3914E0d89daa53377b = myhandlerinlinepython3914E0d89d.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinepython3914E0D89DAA53377B', {
      key: 'ExportsOutputRefmyhandlerinlinepython3914E0D89DAA53377B',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinepython3914E0D89DAA53377B',
      value: this.exportsOutputRefmyhandlerinlinepython3914E0d89daa53377b!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinepython310Cceb365da798dc08 = myhandlerinlinepython310Cceb365d.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinepython310CCEB365DA798DC08', {
      key: 'ExportsOutputRefmyhandlerinlinepython310CCEB365DA798DC08',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinepython310CCEB365DA798DC08',
      value: this.exportsOutputRefmyhandlerinlinepython310Cceb365da798dc08!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinepython31130A54f685779d70d = myhandlerinlinepython31130A54f68.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinepython31130A54F685779D70D', {
      key: 'ExportsOutputRefmyhandlerinlinepython31130A54F685779D70D',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinepython31130A54F685779D70D',
      value: this.exportsOutputRefmyhandlerinlinepython31130A54f685779d70d!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithhashespython37B3e12b2b2f3c297a = myhandlerinlinewithhashespython37B3e12b2b.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithhashespython37B3E12B2B2F3C297A', {
      key: 'ExportsOutputRefmyhandlerinlinewithhashespython37B3E12B2B2F3C297A',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithhashespython37B3E12B2B2F3C297A',
      value: this.exportsOutputRefmyhandlerinlinewithhashespython37B3e12b2b2f3c297a!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithhashespython38Fd5608984b9a39b3 = myhandlerinlinewithhashespython38Fd560898.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithhashespython38FD5608984B9A39B3', {
      key: 'ExportsOutputRefmyhandlerinlinewithhashespython38FD5608984B9A39B3',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithhashespython38FD5608984B9A39B3',
      value: this.exportsOutputRefmyhandlerinlinewithhashespython38Fd5608984b9a39b3!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithhashespython3964Cae28415366198 = myhandlerinlinewithhashespython3964Cae284.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithhashespython3964CAE28415366198', {
      key: 'ExportsOutputRefmyhandlerinlinewithhashespython3964CAE28415366198',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithhashespython3964CAE28415366198',
      value: this.exportsOutputRefmyhandlerinlinewithhashespython3964Cae28415366198!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithhashespython310Bd04f877d52de581 = myhandlerinlinewithhashespython310Bd04f877.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithhashespython310BD04F877D52DE581', {
      key: 'ExportsOutputRefmyhandlerinlinewithhashespython310BD04F877D52DE581',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithhashespython310BD04F877D52DE581',
      value: this.exportsOutputRefmyhandlerinlinewithhashespython310Bd04f877d52de581!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithhashespython311819Ad79ba116b6b3 = myhandlerinlinewithhashespython311819Ad79b.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithhashespython311819AD79BA116B6B3', {
      key: 'ExportsOutputRefmyhandlerinlinewithhashespython311819AD79BA116B6B3',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithhashespython311819AD79BA116B6B3',
      value: this.exportsOutputRefmyhandlerinlinewithhashespython311819Ad79ba116b6b3!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludespython377F552f31ce103f4e = myhandlerinlineexcludespython377F552f31.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludespython377F552F31CE103F4E', {
      key: 'ExportsOutputRefmyhandlerinlineexcludespython377F552F31CE103F4E',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlineexcludespython377F552F31CE103F4E',
      value: this.exportsOutputRefmyhandlerinlineexcludespython377F552f31ce103f4e!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludespython387A43ace766e3d5dd = myhandlerinlineexcludespython387A43ace7.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludespython387A43ACE766E3D5DD', {
      key: 'ExportsOutputRefmyhandlerinlineexcludespython387A43ACE766E3D5DD',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlineexcludespython387A43ACE766E3D5DD',
      value: this.exportsOutputRefmyhandlerinlineexcludespython387A43ace766e3d5dd!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludespython39Abb3dfe9a0059a3d = myhandlerinlineexcludespython39Abb3dfe9.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludespython39ABB3DFE9A0059A3D', {
      key: 'ExportsOutputRefmyhandlerinlineexcludespython39ABB3DFE9A0059A3D',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlineexcludespython39ABB3DFE9A0059A3D',
      value: this.exportsOutputRefmyhandlerinlineexcludespython39Abb3dfe9a0059a3d!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludespython310B7555d7a7ba49fc6 = myhandlerinlineexcludespython310B7555d7a.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludespython310B7555D7A7BA49FC6', {
      key: 'ExportsOutputRefmyhandlerinlineexcludespython310B7555D7A7BA49FC6',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlineexcludespython310B7555D7A7BA49FC6',
      value: this.exportsOutputRefmyhandlerinlineexcludespython310B7555d7a7ba49fc6!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludespython3113F187913b9a340d2 = myhandlerinlineexcludespython3113F187913.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludespython3113F187913B9A340D2', {
      key: 'ExportsOutputRefmyhandlerinlineexcludespython3113F187913B9A340D2',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlineexcludespython3113F187913B9A340D2',
      value: this.exportsOutputRefmyhandlerinlineexcludespython3113F187913b9a340d2!.toString(),
    });
    this.exportsOutputRefmyhandlerwithhashesexcludespython374A7f71a816929765 = myhandlerwithhashesexcludespython374A7f71a8.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerwithhashesexcludespython374A7F71A816929765', {
      key: 'ExportsOutputRefmyhandlerwithhashesexcludespython374A7F71A816929765',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerwithhashesexcludespython374A7F71A816929765',
      value: this.exportsOutputRefmyhandlerwithhashesexcludespython374A7f71a816929765!.toString(),
    });
    this.exportsOutputRefmyhandlerwithhashesexcludespython38788Ac0c672121ca3 = myhandlerwithhashesexcludespython38788Ac0c6.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerwithhashesexcludespython38788AC0C672121CA3', {
      key: 'ExportsOutputRefmyhandlerwithhashesexcludespython38788AC0C672121CA3',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerwithhashesexcludespython38788AC0C672121CA3',
      value: this.exportsOutputRefmyhandlerwithhashesexcludespython38788Ac0c672121ca3!.toString(),
    });
    this.exportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622eb = myhandlerwithhashesexcludespython39134584D9.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622EB', {
      key: 'ExportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622EB',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622EB',
      value: this.exportsOutputRefmyhandlerwithhashesexcludespython39134584D9944622eb!.toString(),
    });
    this.exportsOutputRefmyhandlerwithhashesexcludespython310E3eb25fb48aa64d9 = myhandlerwithhashesexcludespython310E3eb25fb.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerwithhashesexcludespython310E3EB25FB48AA64D9', {
      key: 'ExportsOutputRefmyhandlerwithhashesexcludespython310E3EB25FB48AA64D9',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerwithhashesexcludespython310E3EB25FB48AA64D9',
      value: this.exportsOutputRefmyhandlerwithhashesexcludespython310E3eb25fb48aa64d9!.toString(),
    });
    this.exportsOutputRefmyhandlerwithhashesexcludespython3111047790925870Ede = myhandlerwithhashesexcludespython31110477909.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerwithhashesexcludespython3111047790925870EDE', {
      key: 'ExportsOutputRefmyhandlerwithhashesexcludespython3111047790925870EDE',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerwithhashesexcludespython3111047790925870EDE',
      value: this.exportsOutputRefmyhandlerwithhashesexcludespython3111047790925870Ede!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithouturlspython3761Fa6bccade5f533 = myhandlerinlinewithouturlspython3761Fa6bcc.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithouturlspython3761FA6BCCADE5F533', {
      key: 'ExportsOutputRefmyhandlerinlinewithouturlspython3761FA6BCCADE5F533',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithouturlspython3761FA6BCCADE5F533',
      value: this.exportsOutputRefmyhandlerinlinewithouturlspython3761Fa6bccade5f533!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithouturlspython382Ce9570952ae2c3e = myhandlerinlinewithouturlspython382Ce95709.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithouturlspython382CE9570952AE2C3E', {
      key: 'ExportsOutputRefmyhandlerinlinewithouturlspython382CE9570952AE2C3E',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithouturlspython382CE9570952AE2C3E',
      value: this.exportsOutputRefmyhandlerinlinewithouturlspython382Ce9570952ae2c3e!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithouturlspython39B9799e297ce3b777 = myhandlerinlinewithouturlspython39B9799e29.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithouturlspython39B9799E297CE3B777', {
      key: 'ExportsOutputRefmyhandlerinlinewithouturlspython39B9799E297CE3B777',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithouturlspython39B9799E297CE3B777',
      value: this.exportsOutputRefmyhandlerinlinewithouturlspython39B9799e297ce3b777!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithouturlspython310D1d226e35105656c = myhandlerinlinewithouturlspython310D1d226e3.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithouturlspython310D1D226E35105656C', {
      key: 'ExportsOutputRefmyhandlerinlinewithouturlspython310D1D226E35105656C',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithouturlspython310D1D226E35105656C',
      value: this.exportsOutputRefmyhandlerinlinewithouturlspython310D1d226e35105656c!.toString(),
    });
    this.exportsOutputRefmyhandlerinlinewithouturlspython31174A8d66561f57634 = myhandlerinlinewithouturlspython31174A8d665.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlinewithouturlspython31174A8D66561F57634', {
      key: 'ExportsOutputRefmyhandlerinlinewithouturlspython31174A8D66561F57634',
      exportName: 'integ-lambda-python-poetry:ExportsOutputRefmyhandlerinlinewithouturlspython31174A8D66561F57634',
      value: this.exportsOutputRefmyhandlerinlinewithouturlspython31174A8d66561f57634!.toString(),
    });
  }
}

