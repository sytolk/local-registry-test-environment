const NodeEnvironment = require('jest-environment-node');

class TestEnvironmentWeb extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.process.env.NODE_JEST = 'test_web';
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = TestEnvironmentWeb;