import json
import os
from os import path
import sys
import glob
import re
import subprocess

def process_template():
    if len(sys.argv) < 2:
        print('Usage: collect-integ-tests <CDK_ROOT>')
        sys.exit(1)
    directory_path = sys.argv[1]

    # Find files ending with "template.json" in the directory and its subdirectories
    file_path = None
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.startswith('integ.') and file.endswith('.ts') and not file.endswith('.d.ts'):
                process_integtest(root, file)


def process_integtest(dir, ts_file_name):
    test_name = re.sub('^integ\.', '', re.sub('\.ts$', '', ts_file_name))
    simple_name = meaningful_dir_name(dir) + '-' + test_name

    ts_file_path = path.join(dir, ts_file_name)

    with open(ts_file_path) as f:
        ts_program = f.read()

    snapshot_dir = path.join(dir, re.sub('\.ts$', '.js.snapshot', ts_file_name))
    if not path.isdir(snapshot_dir):
        return

    template_files = [f for f in glob.glob(path.join(snapshot_dir, '*.template.json')) if 'DeployAssert' not in f]

    templates = {}
    for template_file in template_files:
        with open(template_file) as f:
            template = json.load(f)
        strip_cdk_meta(template)
        templates[path.basename(template_file)] = template

    upconverted_templates = {}
    for template_file in template_files:
        try:
            basename = re.sub('\.template\.json$', '', path.basename(template_file))
            upconverted_templates[f'{basename}.ts'] = subprocess.check_output(['node', 'cdk-from-cfn.js', template_file, basename], encoding='utf-8')
        except Exception:
            # cdk-from-cfn already printed an error to stderr
            pass


    dir = f'output/{simple_name}'
    os.makedirs(dir, exist_ok=True)
    with open(path.join(dir, 'high_level.ts'), 'w') as f:
        f.write(ts_program)
    for name, template in templates.items():
        with open(path.join(dir, name), 'w') as f:
            json.dump(template, f, indent=2)
    for name, template in upconverted_templates.items():
        with open(path.join(dir, name), 'w') as f:
            f.write(template)


def meaningful_dir_name(dir):
    for part in reversed(dir.split('/')):
        if part == 'test':
            continue
        return part
    return ''


def strip_cdk_meta(template):
    resources = template.get('Resources', {})
    if 'CDKMetadata' in resources:
        del resources['CDKMetadata']

    conditions = template.get('Conditions', {})
    # Delete 'CDKMetadataAvailable' key if exists under 'conditions'
    if 'CDKMetadataAvailable' in conditions:
        del conditions['CDKMetadataAvailable']

    return template


if __name__ == '__main__':
    # Call the function
    process_template()
