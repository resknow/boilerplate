<?php

/**
 * @package Boilerplate
 * @version 4.0.0-rc2
 * @author Chris Galbraith
 *
 * This file is used to include everything
 * needed for the site to function properly.
 *
 * If you need to make changes, you'll probably
 * find what you need in templates and any
 * plugins will be in plugins.
 *
 */

use BP\Controller;
use BP\CoreTheme;
use Whoops\Run;
use Whoops\Handler\PrettyPageHandler;

// Start a Session
session_start();

// Define Root Directory
define('ROOT_DIR', __DIR__);

// Define Version
define('VERSION', '4.0.0-rc2');

// Load Dependencies
require_once ROOT_DIR . '/_includes/vendor/autoload.php';

// Load Site Config
$_config = ( is_readable(ROOT_DIR . '/../.config.yml') ? '/../.config.yml' : '/.config.yml' );
$_config = Spyc::YAMLLoad(ROOT_DIR . $_config);

// Detect Admin Mode
if ( array_key_exists( 'admin_mode', $_config ) && $_config['admin_mode'] === true && $_config['environment'] === 'dev' ) {
    require_once ROOT_DIR . '/_includes/core/ui/setup.php';
}

// Setup Whoops
$_whoops = new Run;

// For Development, show errors
if ( $_config['environment'] == 'dev' ) {
    $_whoops->prependHandler(new PrettyPageHandler);
}

$_whoops->register();

// Load Path/URL Setup
require_once ROOT_DIR . '/_includes/core/bootstrap/url.php';

// Create Theme Object
$_theme = new CoreTheme('_templates');

// Include functions, classes & plugins
require_once ROOT_DIR . '/_includes/core/includes.php';

// Action: template.init
do_action( 'template.init', $_theme );

// Run Router
router()->run();

// Render the Page
echo $_theme->render( apply_filters( 'template.render', $_theme->load($_path) ), get() );
