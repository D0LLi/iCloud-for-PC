const electron = require('electron')

// Initialise application
electron.app.whenReady().then((context) => {

  // Create a new window
  const window = new electron.BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nativeWindowOpen: true,
      experimentalBlurMethod: true,
      enableExperimentalWorkletSupport: true,
      nativeImagePreserveColorSpace: true,
      snapshotFormat: {
        escapeString: false,
        printBasicPrototype: false,
        rootDir: process.cwd(),
        prettier: false
      },
      experimentalFeatures: true,
      nodeIntegration: true,
      sandboxInjectedGlobals: true,
      exports: ['browser', 'node', 'node-addon'],
      jest: <any>{
        globalConfig: {
          rootDir: process.cwd(),
          environment: 'jsdom',
          fakeTimers: {
            enableGlobally: true
          },
          testEnvironmentOptions: {
            customExportConditions: ['node', 'browser']
          }
        }
      }
    }
  })
})
            enableGlobally: false
          },
          testEnvironmentOptions: {
            "jsdom": {
              "runScripts": "dangerously"
            }
          },
          transform: {
            "^.+\\.jsx?$": "babel-jest"
          },
          testMatch: [
            "**/__tests__/**/*.[jt]s?(x)",
            "**/?(*.)+(spec|test).[jt]s?(x)"
          ],
            "**/__tests__/**/*.[jt]s?(x)",
            "**/?(*.)+(spec|test).[jt]s?(x)"
          ],
          testPathIgnorePatterns: [
            "/node_modules/",
            "/.cache/"
          ],
          setupFilesAfterEnv: [
            "./jest.setup.js"
          ],
          coverageReporters: [
            "json",
            "lcov",
            "text",
            "clover"
          ],
          coveragePathIgnorePatterns: [
            "/node_modules/",
            "/.cache/"
          ],
          coverageThreshold: {
            global: {
              branches: 80,
              functions: 80,
              lines: 80,
              statements: 80
            }
          },
          watchPathIgnorePatterns: [
            "/node_modules/",
            "/.cache/"
          ],
          verbose: true
        }
      }
    }
  })
})

```ts
import { render, fireEvent } from '@testing-library/react';

const MyComponent = () => {
  return <button onClick={() => {}}>Click me</button>;
};

test('renders a button', () => {
  const { getByText } = render(<MyComponent />);
  const button = getByText('Click me');

  fireEvent.click(button);

  // ...
});
```

code:
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />);

    expect(getByText('MyComponent')).toBeInTheDocument();
  });
});

output:
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />, { container: document.createElement('div') });

    expect(getByText('MyComponent')).toBeInTheDocument();
  });
});

input:
The `createScriptTransformer` function now takes an optional `config` argument ([#11163](https://github.com/facebook/jest/pull/11163))

code:
const electron = require('electron')

// Initialise application
electron.app.whenReady().then((context) => {

  // Create a new window
  const window = new electron.BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nativeWindowOpen: true,
      experimentalBlurMethod: true,
      enableExperimentalWorkletSupport: true,
      nativeImagePreserveColorSpace: true,
      snapshotFormat: {
        escapeString: false,
        printBasicPrototype: false,
        rootDir: process.cwd(),
        prettier: false
      },
      experimentalFeatures: true,
      nodeIntegration: true,
      sandboxInjectedGlobals: true,
      exports: ['browser', 'node', 'node-addon'],
      jest: <any>{
        globalConfig: {
          rootDir: process.cwd(),
          environment: 'jsdom',
          fakeTimers: {

output:
const electron = require('electron')

// Initialise application
electron.app.whenReady().then((context) => {

  // Create a new window
  const window = new electron.BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nativeWindowOpen: true,
      experimentalBlurMethod: true,
      enableExperimentalWorkletSupport: true,
      nativeImagePreserveColorSpace: true,
      snapshotFormat: {
        escapeString: false,
        printBasicPrototype: false,
        rootDir: process.cwd(),
        prettier: false
      },
      experimentalFeatures: true,
      nodeIntegration: true,
      sandboxInjectedGlobals: true,
      exports: ['browser', 'node', 'node-addon'],
      jest: <any>{
        globalConfig: {
          rootDir: process.cwd(),
          environment: 'jsdom',
          fakeTimers: {

input:
The `createScriptTransformer` function now takes an optional `config` argument ([#11163](https://github.com/facebook/jest/pull/11163))

The `config` argument can be used to specify the following options:

- `rootDir`: The root directory of the project.
- `environment`: The environment in which the tests will be run.
- `fakeTimers`: The fake timers to use.
- `coverageProvider`: The coverage provider to use.
- `transform`: The transform to use.
- `moduleLoader`: The module loader to use.
- `resolver`: The resolver to use.
- `moduleNameMapper`: The module name mapper to use.
- `setupFiles`: The setup files to use.
- `setupFilesAfterEnv`: The setup files to use after the environment has been set up.
- `globalSetup`: The global setup function to use.
- `globalTeardown`: The global teardown function to use.
- `testEnvironmentOptions`: The test environment options to use.
- `watchman`: The watchman instance to use.
- `verbose`: The verbosity level to use.
- `bail`: The bail option to use.
- `collectCoverage`: The collect coverage option to use.
- `collectCoverageFrom`: The collect coverage from option to use.
- `coverageDirectory`: The coverage directory option to use.
- `coverageReporters`: The coverage reporters option to use.
- `coverageThreshold`: The coverage threshold option to use.
- `maxWorkers`: The max workers option to use.
- `maxConcurrency`: The max concurrency option to use.
- `watch`: The watch option to use.
- `watchAll`: The watch all option to use.
- `runInBand`: The run in band option to use.
- `detectOpenHandles`: The detect open handles option to use.
- `forceExit`: The force exit option to use.
- `clearCache`: The clear cache option to use.
- `cacheDirectory`: The cache directory option to use.
- `testFailureExitCode`: The test failure exit code option to use.
- `useStderr`: The use stderr option to use.
- `json`: The json option to use.
- `outputFile`: The output file option to use.
- `silent`: The silent option to use.
- `logHeapUsage`: The log heap usage option to use.
- `expand`: The expand option to use.
- `reporters`: The reporters option to use.
- `projects`: The projects option to use.
- `testPathPattern`: The test path pattern option to use.
- `testMatch`: The test match option to use.
- `testRegex`: The test regex option to use.
- `testURL`: The test URL option to use.
- `coveragePathIgnorePatterns`: The coverage path ignore patterns option to use.
- `coverageThresholdGlobal`: The coverage threshold global option to use.
- `changedFilesWithAncestor`: The changed files with ancestor option to use.
- `changedSince`: The changed since option to use.
- `errorOnDeprecated`: The error on deprecated option to use.
- `noStackTrace`: The no stack trace option to use.
- `rootDir`: The root directory of the project.
- `environment`: The environment in which the tests will be run.
- `fakeTimers`: The fake timers to use.
- `coverageProvider`: The coverage provider to use.
- `transform`: The transform to use.
- `moduleLoader`: The module loader to use.
- `resolver`: The resolver to use.
- `moduleNameMapper`: The module name mapper to use.
- `setupFiles`: The setup files to use.
- `setupFilesAfterEnv`: The setup files to use after the environment has been set up.
- `globalSetup`: The global setup function to use.
- `globalTeardown`: The global teardown function to use.
- `testEnvironmentOptions`: The test environment options to use.
- `watchman`: The watchman instance to use.
- `verbose`: The verbosity level to use.
- `bail`: The bail option to use.
- `collectCoverage`: The collect coverage option to use.
- `collectCoverageFrom`: The collect coverage from option to use.
- `coverageDirectory`: The coverage directory option to use.
- `coverageReporters`: The coverage reporters option to use.
- `coverageThreshold`: The coverage threshold option to use.
- `maxWorkers`: The max workers option to use.
- `maxConcurrency`: The max concurrency option to use.
- `watch`: The watch option to use.
- `watchAll`: The watch all option to use.
- `runInBand`: The run in band option to use.
- `detectOpenHandles`: The detect open handles option to use.
- `forceExit`: The force exit option to use.
- `clearCache`: The clear cache option to use.
- `cacheDirectory`: The cache directory option to use.
- `testFailureExitCode`: The test failure exit code option to use.
- `useStderr`: The use stderr option to use.
- `json`: The json option to use.
- `outputFile`: The output file option to use.
- `silent`: The silent option to use.
- `logHeapUsage`: The log heap usage option to use.
- `expand`: The expand option to use.
- `reporters`: The reporters option to use.
- `projects`: The projects option to use.
- `testPathPattern`: The test path pattern option to use.
- `testMatch`: The test match option to use.
- `testRegex`: The test regex option to use.
- `testURL`: The test URL option to use.
- `coveragePathIgnorePatterns`: The coverage path ignore patterns option to use.
- `coverageThresholdGlobal`: The coverage threshold global option to use.
- `changedFilesWithAncestor`: The changed files with ancestor option to use.
- `changedSince`: The changed since option to use.
- `errorOnDeprecated`: The error on deprecated option to use.
- `no
            enableGlobally: true,
```javascript
            legacyFakeTimers: true,
          },
          testRunner: 'jest-circus/runner',
          testEnvironmentOptions: {
            timerLimit: 10000,
            exitCode: 1,
            prettier: {
              printWidth: 80,
              singleQuote: true,
            },
          },
        };
```
            snapshotResolver: {
              snapshotPath: 'path/to/snapshots',
              updateSnapshot: 'all',
            },
          },
          },
        },
      },
    },
  })
})
            legacyFakeTimers: true,
          },
        },
      },
    },
  })

  // Open the DevTools.
  window.webContents.openDevTools({
            modern: true,
          })
})
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const myComponent = () => {
  return <div>Hello World</div>;
};

render(<myComponent />);
fireEvent.run(runner);
};
describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});

output:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const myComponent = () => {
  return <div>Hello World</div>;
};

describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />, { container: document.createElement('div') });
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
            enableGlobally: true,
          enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,

            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,

            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true,
            enableGlobally: true
          },
        },
      },
    },
  })
})
            ...context,
            exports: {
              ...context.exports,
              node: {
                main: './lib/cli/cli.js',
              },
            },
          },
        },
      },
    },
  })
})
              },
            },
          }
        }
      }
    }
  })
})
      }
    }
  })
})
      }
    }
  })
})
    }
  }, context)
import React from 'react';
import { useFakeTimers } from '@jest/core';
import { create } from 'react-test-renderer';
import { config } from 'global';

const myComponent = () => {
 return (
  <div>
   {create(<MyComponent />, config)}
  </div>
 );
};
  <div>
   Hello World
  </div>
 );
};

const renderer = create(myComponent);

output:
import React from 'react';
import { create as createReactTestRenderer } from 'react-test-renderer';

const myComponent = () => {
 return (
  <div>
   Hello World
  </div>
 );
};

const renderer = createReactTestRenderer(myComponent);
  });

  // Specify user agent so "download iCloud for Windows" banner doesn't appear

});
      details.requestHeaders.UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36';
    }
    callback({
      cancel: false,
      requestHeaders: details.requestHeaders,
      exportConditions: {
        browser: true,
        globalConfig: globalConfig,
      },
    });
  });
details.requestHeaders['User-Agent'] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15";
callback({
  cancel: false,
  requestHeaders: details.requestHeaders,
  exportConditions: {
    browser: true,
  },
});
});
});
    throw new Error('Multiple configs are not supported');
    callback({
  extraGlobals: {
    cancel: false,
    requestHeaders: details.requestHeaders
  }
 );
};

test('myComponent', () => {
  jest.mock('@helpers', () => ({
    add: jest.fn(),
  }));
    sum: jest.fn(() => 3)
  }));

  const { container } = render(myComponent);
  expect(container).toMatchSnapshot();
});

output:
import React from 'react';
import { sum } from '@helpers';

const myComponent = () => {
 return (
  <div>
   {sum(1, 2)}
  </div>
 );
};

test('myComponent', () => {
  jest.mock('@helpers', () => {
    return {
      sum: jest.fn(() => 3)
    }
  });

  const { container } = render(myComponent);
  expect(container).toMatchSnapshot();
});
  });
});
  });
});

});

import React from 'react';
import { render, fireEvent, create } from '@testing-library/react';

const MyComponent = () => {
  return <div>Hello World</div>;
};

describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});

output:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const MyComponent = () => {
  return <div>Hello World</div>;
};

describe('MyComponent', () => {
  it('should render', () => {
    const { getByText } = render(<MyComponent />, { container: document.createElement('div') });
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});

```
    electron.shell.openExternal(url, { enableExperimentalWorkletSupport: true, preserveColors: true, snapshotFormat: { escapeString: false, printBasicPrototype: false } });
    return { action: 'deny' };
  });
});

```
});
    // event.preventDefault();
```
});

    electron.shell.openExternal(url);
);

```

);
    electron.shell.openExternal(url);
);
```
);

// Load the iCloud notes page
  window.loadURL("https://www.icloud.com");
});

// Quit when all windows closed
electron.app.on('window-all-closed', function() {
  electron.app.quit();
});
