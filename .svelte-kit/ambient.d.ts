
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const OSLogRateLimit: string;
	export const INFOPATH: string;
	export const npm_config_user_agent: string;
	export const npm_config_ignore_scripts: string;
	export const BUN_INSTALL: string;
	export const GOPATH: string;
	export const PROGRAMMING: string;
	export const npm_lifecycle_script: string;
	export const ATUIN_SHLVL: string;
	export const ATUIN_SESSION: string;
	export const HOMEBREW_CELLAR: string;
	export const SDKMAN_DIR: string;
	export const LOGNAME: string;
	export const ZSH_CACHE_DIR: string;
	export const VP_TOOL_RECURSION: string;
	export const SHLVL: string;
	export const _ZSH_PATINA_PATH: string;
	export const ATUIN_HISTORY_ID: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const XDG_DATA_DIRS: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const COLORTERM: string;
	export const ATUIN_TMUX_POPUP: string;
	export const TMUX_PANE: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const JAVA_HOME: string;
	export const DOCKERHOST: string;
	export const USER: string;
	export const __CFBundleIdentifier: string;
	export const GHOSTTY_BIN_DIR: string;
	export const PYENV_ROOT: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const GHOSTTY_SHELL_FEATURES: string;
	export const STARSHIP_SHELL: string;
	export const npm_config_verify_deps_before_run: string;
	export const LaunchInstanceID: string;
	export const PATH: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_config_engine_strict: string;
	export const PKG_CONFIG_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMUX: string;
	export const CARGO_EMAIL: string;
	export const npm_config_node_gyp: string;
	export const npm_config__jsr_registry: string;
	export const PWD: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const CARGO_NAME: string;
	export const SECURITYSESSIONID: string;
	export const XDG_CONFIG_HOME: string;
	export const SDKROOT: string;
	export const SSH_AUTH_SOCK: string;
	export const EDITOR: string;
	export const HOMEBREW_NO_ANALYTICS: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const SVELTEKIT_FORK: string;
	export const npm_node_execpath: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const DOTFILES: string;
	export const npm_config_registry: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const COMMAND_MODE: string;
	export const npm_execpath: string;
	export const PMSPEC: string;
	export const ZPFX: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const SDKMAN_PLATFORM: string;
	export const NODE: string;
	export const CPPFLAGS: string;
	export const INIT_CWD: string;
	export const PHP_INI_SCAN_DIR: string;
	export const FPATH: string;
	export const LDFLAGS: string;
	export const HOME: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_json: string;
	export const npm_lifecycle_event: string;
	export const COREPACK_ROOT: string;
	export const TERMINFO: string;
	export const XPC_FLAGS: string;
	export const npm_command: string;
	export const SDKMAN_BROKER_API: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const MANPATH: string;
	export const PNPM_HOME: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const SHELL: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		OSLogRateLimit: string;
		INFOPATH: string;
		npm_config_user_agent: string;
		npm_config_ignore_scripts: string;
		BUN_INSTALL: string;
		GOPATH: string;
		PROGRAMMING: string;
		npm_lifecycle_script: string;
		ATUIN_SHLVL: string;
		ATUIN_SESSION: string;
		HOMEBREW_CELLAR: string;
		SDKMAN_DIR: string;
		LOGNAME: string;
		ZSH_CACHE_DIR: string;
		VP_TOOL_RECURSION: string;
		SHLVL: string;
		_ZSH_PATINA_PATH: string;
		ATUIN_HISTORY_ID: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		XDG_DATA_DIRS: string;
		pnpm_config_verify_deps_before_run: string;
		COLORTERM: string;
		ATUIN_TMUX_POPUP: string;
		TMUX_PANE: string;
		npm_package_name: string;
		LANG: string;
		JAVA_HOME: string;
		DOCKERHOST: string;
		USER: string;
		__CFBundleIdentifier: string;
		GHOSTTY_BIN_DIR: string;
		PYENV_ROOT: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		GHOSTTY_SHELL_FEATURES: string;
		STARSHIP_SHELL: string;
		npm_config_verify_deps_before_run: string;
		LaunchInstanceID: string;
		PATH: string;
		npm_config_frozen_lockfile: string;
		npm_config_engine_strict: string;
		PKG_CONFIG_PATH: string;
		TERM_PROGRAM_VERSION: string;
		TMUX: string;
		CARGO_EMAIL: string;
		npm_config_node_gyp: string;
		npm_config__jsr_registry: string;
		PWD: string;
		__CF_USER_TEXT_ENCODING: string;
		CARGO_NAME: string;
		SECURITYSESSIONID: string;
		XDG_CONFIG_HOME: string;
		SDKROOT: string;
		SSH_AUTH_SOCK: string;
		EDITOR: string;
		HOMEBREW_NO_ANALYTICS: string;
		SDKMAN_CANDIDATES_API: string;
		SVELTEKIT_FORK: string;
		npm_node_execpath: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		DOTFILES: string;
		npm_config_registry: string;
		PNPM_SCRIPT_SRC_DIR: string;
		COMMAND_MODE: string;
		npm_execpath: string;
		PMSPEC: string;
		ZPFX: string;
		TERM: string;
		TMPDIR: string;
		SDKMAN_PLATFORM: string;
		NODE: string;
		CPPFLAGS: string;
		INIT_CWD: string;
		PHP_INI_SCAN_DIR: string;
		FPATH: string;
		LDFLAGS: string;
		HOME: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		GHOSTTY_RESOURCES_DIR: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_json: string;
		npm_lifecycle_event: string;
		COREPACK_ROOT: string;
		TERMINFO: string;
		XPC_FLAGS: string;
		npm_command: string;
		SDKMAN_BROKER_API: string;
		SDKMAN_CANDIDATES_DIR: string;
		MANPATH: string;
		PNPM_HOME: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		SHELL: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
