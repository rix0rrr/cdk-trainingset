import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface nestedstacksmultiNestedStack08DBC739.nestedProps extends cdk.StackProps {
}

export class nestedstacksmultiNestedStack08DBC739.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksmultiNestedStack08DBC739.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const myResource6073B41f = new sns.CfnTopic(this, 'MyResource6073B41F', {
    });

    const nestedChildNestedStackNestedChildNestedStackResourceF60c4886 = new cloudformation.CfnStack(this, 'NestedChildNestedStackNestedChildNestedStackResourceF60C4886', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/e3410ccec04414535f1c8035ce0ea42f59eedf66d0e6d0eec8bc435c4a4e809d.json',
      ].join(''),
    });
    nestedChildNestedStackNestedChildNestedStackResourceF60c4886.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

