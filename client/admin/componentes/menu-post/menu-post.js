import * as angular from 'angular'
import * as angularUiRouter from 'angular-ui-router'

import listaPosts from 'componentes/menu-post/lista-posts/lista-posts'
const nombreComponente = 'menu-post'


let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: `/${nombreComponente}`,
            template: '<lista-posts></lista-posts>'
        });
}

angular.module(nombreComponente, ['ui.router',listaPosts])
  .config(configurarEstado)

    
export default nombreComponente