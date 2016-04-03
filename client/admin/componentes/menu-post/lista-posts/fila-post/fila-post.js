import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz = "./client/admin/componentes/menu-post/lista-posts/"
const nombreComponente = 'filaPost'
const nombreFichero = 'fila-post'

angular.module(nombreComponente, ['ngMaterial'])
  .component(nombreComponente, {
    templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
    bindings: { post: '=' }
  })

export default nombreComponente