<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'llemonll1');

/** MySQL database username */
define('DB_USER', 'llemonll1');

/** MySQL database password */
define('DB_PASSWORD', 'P@ssw0rd1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yX# I5DZQm(zw7iR_H64ULz=w.$x{X$Jy=vpNBZzT{tVQ@;l%$B^TF{lBf.1ld7U');
define('SECURE_AUTH_KEY',  'Sz}E$5NkK8bNfoK@YI?VP{4qeR-0mI8bT>xh-Exa|Zy(xF[d-Q19o5mjUQ)ORhcH');
define('LOGGED_IN_KEY',    'L@2^Yo)^THr~0NyKj>K+*#62XZ+H}j+!k%q^=#9,1oX%#ut@5$o3kJUDhG&_%Ie^');
define('NONCE_KEY',        'xQ5$0|7LH1fDbjNU ,}fWmlR$LNd7f8y<IQ&z*M6(d4g~d~&2<+$]:}U76p3rk[z');
define('AUTH_SALT',        'lG1}]P+7;~Z.=Ds*g{Rc]MEkdH5NK/U$f?E~TUA`+4--zvd#5H1JS:#<&i1`lJi-');
define('SECURE_AUTH_SALT', '$/3MtGeO)?[4<S!/zczv:UEpR9F(<,8e8-[j&{Z(Yz 1FfoI0{7>dM^tW0A,8;^:');
define('LOGGED_IN_SALT',   'g74[xIX~q1*u.<UC:W 1DYk2fYMrs2ngkG9^ZpH)DIvT)3So9=c]6CU}3E=b}Z]<');
define('NONCE_SALT',       '>801;%b(|22_hUb#mZ!M~gmpS[tY!G[dO@>tM>):DZym9tJfX!T@!BJG.?%/P&kS');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
