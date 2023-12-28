import * as cdk from 'aws-cdk-lib';
import * as ses from 'aws-cdk-lib/aws-ses';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface cdk-ses-configuration-set-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-ses-configuration-set-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-ses-configuration-set-integProps = {}) {
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
    const configurationSet3Dd38186 = new ses.CfnConfigurationSet(this, 'ConfigurationSet3DD38186', {
    });

    const topicBfc7af6e = new sns.CfnTopic(this, 'TopicBFC7AF6E', {
    });

    if (configurationSet3Dd38186 == null) { throw new Error(`A combination of conditions caused 'configurationSet3Dd38186' to be undefined. Fixit.`); }
    const configurationSetCloudWatch85E06ffb = new ses.CfnConfigurationSetEventDestination(this, 'ConfigurationSetCloudWatch85E06FFB', {
      configurationSetName: configurationSet3Dd38186.ref,
      eventDestination: {
        cloudWatchDestination: {
          dimensionConfigurations: [
            {
              defaultDimensionValue: 'no_domain',
              dimensionName: 'ses:from-domain',
              dimensionValueSource: 'messageTag',
            },
          ],
        },
        enabled: true,
        matchingEventTypes: [
          'send',
          'reject',
          'bounce',
          'complaint',
          'delivery',
          'open',
          'click',
          'renderingFailure',
          'deliveryDelay',
          'subscription',
        ],
      },
    });

    if (configurationSet3Dd38186 == null) { throw new Error(`A combination of conditions caused 'configurationSet3Dd38186' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const topicPolicyA1747468 = new sns.CfnTopicPolicy(this, 'TopicPolicyA1747468', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Condition: {
              StringEquals: {
                'AWS:SourceAccount': this.account,
                'AWS:SourceArn': [
                  'arn:',
                  this.partition,
                  ':ses:',
                  this.region,
                  ':',
                  this.account,
                  ':configuration-set/',
                  configurationSet3Dd38186.ref,
                ].join(''),
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'ses.amazonaws.com',
            },
            Resource: topicBfc7af6e.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        topicBfc7af6e.ref,
      ],
    });

    if (configurationSet3Dd38186 == null) { throw new Error(`A combination of conditions caused 'configurationSet3Dd38186' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    if (topicPolicyA1747468 == null) { throw new Error(`A combination of conditions caused 'topicPolicyA1747468' to be undefined. Fixit.`); }
    const configurationSetSns63B38980 = new ses.CfnConfigurationSetEventDestination(this, 'ConfigurationSetSns63B38980', {
      configurationSetName: configurationSet3Dd38186.ref,
      eventDestination: {
        enabled: true,
        matchingEventTypes: [
          'send',
          'reject',
          'bounce',
          'complaint',
          'delivery',
          'open',
          'click',
          'renderingFailure',
          'deliveryDelay',
          'subscription',
        ],
        snsDestination: {
          topicArn: topicBfc7af6e.ref,
        },
      },
    });
    configurationSetSns63B38980.addDependency(topicPolicyA1747468);
  }
}

