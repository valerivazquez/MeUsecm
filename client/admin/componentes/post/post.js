import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'
import postCtrl from 'componentes/post/post-ctrl'

const raiz = "./client/admin/componentes/"
const nombreComponente = 'post'

let configurarEstado = ($stateProvider) => {
  $stateProvider
    .state(nombreComponente, {
      url: `/${nombreComponente}/:postId`,
      template: `<${nombreComponente}></${nombreComponente}>`
    });
}

angular.module(nombreComponente, ['ngMaterial', 'ui.router'])
  .component(nombreComponente, {
    templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`,
    controller: postCtrl
  })
  .config(configurarEstado)

export default nombreComponente