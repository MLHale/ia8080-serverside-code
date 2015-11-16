define('livecoding-demo/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('livecoding-demo/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('livecoding-demo/tests/components/forum-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/forum-post.js should pass jshint', function (assert) {
    assert.ok(false, 'components/forum-post.js should pass jshint.\ncomponents/forum-post.js: line 10, col 55, Missing semicolon.\n\n1 error');
  });
});
define('livecoding-demo/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/nav-bar.js should pass jshint', function (assert) {
    assert.ok(false, 'components/nav-bar.js should pass jshint.\ncomponents/nav-bar.js: line 7, col 55, Missing semicolon.\ncomponents/nav-bar.js: line 8, col 43, Missing semicolon.\n\n2 errors');
  });
});
define('livecoding-demo/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('livecoding-demo/tests/controllers/auth.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/auth.js should pass jshint', function (assert) {
    assert.ok(false, 'controllers/auth.js should pass jshint.\ncontrollers/auth.js: line 14, col 22, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});
define('livecoding-demo/tests/controllers/forum.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/forum.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/forum.js should pass jshint.');
  });
});
define('livecoding-demo/tests/helpers/resolver', ['exports', 'ember/resolver', 'livecoding-demo/config/environment'], function (exports, _emberResolver, _livecodingDemoConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _livecodingDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _livecodingDemoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('livecoding-demo/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('livecoding-demo/tests/helpers/start-app', ['exports', 'ember', 'livecoding-demo/app', 'livecoding-demo/router', 'livecoding-demo/config/environment'], function (exports, _ember, _livecodingDemoApp, _livecodingDemoRouter, _livecodingDemoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application;

    var attributes = _ember['default'].merge({}, _livecodingDemoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _livecodingDemoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('livecoding-demo/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('livecoding-demo/tests/initializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/application.js should pass jshint', function (assert) {
    assert.ok(false, 'initializers/application.js should pass jshint.\ninitializers/application.js: line 8, col 48, Expected \'===\' and instead saw \'==\'.\ninitializers/application.js: line 13, col 24, Expected \'===\' and instead saw \'==\'.\ninitializers/application.js: line 15, col 31, Expected \'===\' and instead saw \'==\'.\ninitializers/application.js: line 27, col 48, Expected \'===\' and instead saw \'==\'.\ninitializers/application.js: line 32, col 24, Expected \'===\' and instead saw \'==\'.\ninitializers/application.js: line 34, col 31, Expected \'===\' and instead saw \'==\'.\n\n6 errors');
  });
});
define('livecoding-demo/tests/models/forumpost.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/forumpost.js should pass jshint', function (assert) {
    assert.ok(true, 'models/forumpost.js should pass jshint.');
  });
});
define('livecoding-demo/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('livecoding-demo/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 14, col 64, Missing semicolon.\nroutes/application.js: line 31, col 43, \'model\' is defined but never used.\n\n2 errors');
  });
});
define('livecoding-demo/tests/routes/auth.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/auth.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/auth.js should pass jshint.');
  });
});
define('livecoding-demo/tests/routes/forum/forumpost.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/forum');
  QUnit.test('routes/forum/forumpost.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/forum/forumpost.js should pass jshint.');
  });
});
define('livecoding-demo/tests/routes/forum.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/forum.js should pass jshint', function (assert) {
    assert.ok(false, 'routes/forum.js should pass jshint.\nroutes/forum.js: line 6, col 44, Missing semicolon.\n\n1 error');
  });
});
define('livecoding-demo/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/home.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('livecoding-demo/tests/test-helper', ['exports', 'livecoding-demo/tests/helpers/resolver', 'ember-qunit'], function (exports, _livecodingDemoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_livecodingDemoTestsHelpersResolver['default']);
});
define('livecoding-demo/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('livecoding-demo/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/components/forum-post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('forum-post', 'Unit | Component | forum post', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

  (0, _emberQunit.test)('upvote works', function (assert) {
    assert.expect(1);
    var component = this.subject({
      post: { id: 1, title: 'testtitle', upvotes: 0, author: 'testauthor', content: 'testcontent' }
    });
    this.render();
    this.$().find('button').click();
    assert.equal(post.upvotes, 1);
  });
});
define('livecoding-demo/tests/unit/components/forum-post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/forum-post-test.js should pass jshint', function (assert) {
    assert.ok(false, 'unit/components/forum-post-test.js should pass jshint.\nunit/components/forum-post-test.js: line 28, col 16, \'post\' is not defined.\n\n1 error');
  });
});
define('livecoding-demo/tests/unit/components/nav-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Unit | Component | nav bar', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('livecoding-demo/tests/unit/components/nav-bar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/nav-bar-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/components/nav-bar-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('livecoding-demo/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/controllers/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('livecoding-demo/tests/unit/controllers/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/auth-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/auth-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/controllers/forum-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:forum', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('livecoding-demo/tests/unit/controllers/forum-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/forum-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/forum-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/initializers/application-test', ['exports', 'ember', 'livecoding-demo/initializers/application', 'qunit'], function (exports, _ember, _livecodingDemoInitializersApplication, _qunit) {

  var registry, application;

  (0, _qunit.module)('Unit | Initializer | application', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _livecodingDemoInitializersApplication.initialize)(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('livecoding-demo/tests/unit/initializers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/initializers/application-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/models/forumpost-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('forumpost', 'Unit | Model | forumpost', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('livecoding-demo/tests/unit/models/forumpost-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/forumpost-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/forumpost-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('livecoding-demo/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/routes/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth', 'Unit | Route | auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('livecoding-demo/tests/unit/routes/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/auth-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/auth-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/routes/forum/forumpost-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:forum/forumpost', 'Unit | Route | forum/forumpost', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('livecoding-demo/tests/unit/routes/forum/forumpost-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/forum');
  QUnit.test('unit/routes/forum/forumpost-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/forum/forumpost-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/routes/forum-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:forum', 'Unit | Route | forum', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('livecoding-demo/tests/unit/routes/forum-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/forum-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/forum-test.js should pass jshint.');
  });
});
define('livecoding-demo/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('livecoding-demo/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/home-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('livecoding-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map