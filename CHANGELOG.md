# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Changed
- Ensure most up-to-date package version is in use.
- Make it easier to refresh datasync stores
- Set `exports` in package.json. This will break directly requiring files from within the package in environments that respect `exports`.
- Updated package dependencies.

### Fixed
- Expand the pending state to span multiple requests to help better reflect it in the UI.
- Fixed `pending` store in a SyncedStore

## 0.1.0 - 2023-04-06
### Added
- Added an error store to help track errors that happen during syncing. [#29302]

### Changed
- Updated package dependencies. [#29471]
- Updated to use Abort Controller to allow cancelling requests mid-stream. [#29122]

[0.2.0-alpha]: https://github.com/Automattic/jetpack-svelte-data-sync-client/compare/v0.1.0...v0.2.0-alpha
