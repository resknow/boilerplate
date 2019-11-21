<?php

/**
 * @package Boilerplate
 * @version 4.0.5
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

// Start a Session
session_start();

// Define Root Directory
define('ROOT_DIR', __DIR__);

$vendor_dir = ROOT_DIR . '/_includes/vendor';

// Load Dependencies
require_once $vendor_dir . '/autoload.php';
require_once $vendor_dir . '/resknow/boilerplate-core/bootstrap.php';