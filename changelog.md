# Y7K Scripts Changelog


## Version 2.0.* - 2019-01-15
* Disable barba.js booting by default
* Add backend LOCALE to frontend config constants
* Refactor vue-i18n booting and disable it by default
* Add URL util

## Version 1.1.*
* Remove lazysizes (its now a component)
* Add CustomEvent Polyfill

## Version 1.0.*
* Updated Versioning to include major releases
* Completely refactor barba.js transitions
* Move barba initialization code to "boot"
* Use namespaced Vuex stores
* Remove outdated "/util" helpers
* Remove "boot/tools" (not needed anymore)
* Update eslint
* Refactor frontend constants (now "window.backendConfig" instead of "window.App.constants")
* Remove unnecessary, outdated configs including bugsnag
* Add and streamline backend->frontend constants
* Simplify and refactor various

## Version 0.4.*
* Call it just components, not modules, in vue setup
* Refactored the transition folder
* Renamed `source` folder to `src`

## Version 0.3.*
* Add new Eslint Rules (based in AirBnb)
* Refactor plate code according to eslint rules
* Remove lodash dependency on barba history

## Version 0.2.3
* Updated Packages

## Version 0.2.*
* Add possibility to mount nested vue components while keeping their twig templates
* Use semicolons
* Remove vue-router. SPA will need a different setup (this plate is too focused on normal websites)
* Refactor and improve barba.js transitions
* Add pjax History class to barba that allows us to know if we going back or forth (and restore scroll position etc.)
* Utility to disable/enable body scroll (without jumping to top)
* Utility to show custom "outline" focus when focused with keyboard, while removing ugly browser default :focus { outline: ... }
* Refactor vuex store with useful defaults
* Add eslint.yml to plate (For plate development)

## Version 0.1.*
* First Version, based on the Y7K plate.
