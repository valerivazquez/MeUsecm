import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'

import base from 'componentes/base/base'

import portada from 'componentes/portada/portada'
import tarea from 'componentes/tarea/tarea'
import configuracion from 'componentes/configuracion/configuracion'
import navegacion from 'componentes/navegacion/navegacion'
import menuPost  from 'componentes/menu-post/menu-post'
import post from 'componentes/post/post'

const nombreApp = 'frontEdge'

angular.module(nombreApp, ['ngMaterial', 'ui.router', base, portada, menuPost, tarea, post, configuracion, navegacion])
  .config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

  
let documentoHTML = angular.element(document)

let iniciarApp = () => angular.bootstrap(documentoHTML, [nombreApp])

documentoHTML.ready(iniciarApp)