import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface awscdknestedstackinproductstackSampleProductStack3B6BAAB4.productProps extends cdk.StackProps {
}

export class awscdknestedstackinproductstackSampleProductStack3B6BAAB4.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: awscdknestedstackinproductstackSampleProductStack3B6BAAB4.productProps = {}) {
    super(scope, id, props);

    // Resources
    const sampleNestedStackNestedStackSampleNestedStackNestedStackResource97Ffae0a = new cloudformation.CfnStack(this, 'SampleNestedStackNestedStackSampleNestedStackNestedStackResource97FFAE0A', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/asset-bucket-12345678-test-region/75d608df75f61dac3fdadd6450401e430ffcdcc3face2dbe3c656ebf102bb8c1.json',
      ].join(''),
    });
    sampleNestedStackNestedStackSampleNestedStackNestedStackResource97Ffae0a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

