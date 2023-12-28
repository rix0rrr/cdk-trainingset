import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const eksJobDefn6E91457d = new batch.CfnJobDefinition(this, 'EksJobDefn6E91457D', {
      eksProperties: {
        podProperties: {
          containers: [
            {
              args: [
                'foo',
              ],
              command: [
                'echo foo',
              ],
              env: [
                {
                  name: 'foo',
                  value: 'bar',
                },
              ],
              image: 'amazon/amazon-ecs-sample',
              imagePullPolicy: 'Always',
              name: 'myBigCoolVolume',
              resources: {
                limits: {
                  cpu: 8,
                  memory: '8192Mi',
                  'nvidia.com/gpu': 12,
                },
                requests: {
                  cpu: 4,
                  memory: '8192Mi',
                  'nvidia.com/gpu': 12,
                },
              },
              securityContext: {
                privileged: true,
                readOnlyRootFilesystem: false,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 20,
              },
              volumeMounts: [
                {
                  mountPath: '/mount/path',
                  name: 'woah',
                  readOnly: true,
                },
                {
                  mountPath: '/secret/path',
                  name: 'secretVolumeName',
                },
                {
                  mountPath: '/secret/path2',
                  name: 'defaultOptionalSettingSecretVolume',
                },
                {
                  mountPath: '/fooasdfadfs',
                  name: 'hostPath',
                },
              ],
            },
          ],
          volumes: [
            {
              emptyDir: {
                medium: 'Memory',
                sizeLimit: '2048Mi',
              },
              name: 'woah',
            },
            {
              name: 'secretVolumeName',
              secret: {
                optional: false,
                secretName: 'secretName',
              },
            },
            {
              name: 'defaultOptionalSettingSecretVolume',
              secret: {
                optional: true,
                secretName: 'NewSecretName',
              },
            },
            {
              hostPath: {
                path: '/foo/bar',
              },
              name: 'hostPath',
            },
          ],
        },
      },
      retryStrategy: {
      },
      timeout: {
      },
      type: 'container',
    });
  }
}

