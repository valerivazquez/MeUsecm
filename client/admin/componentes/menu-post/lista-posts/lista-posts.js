import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import filaPost from 'componentes/menu-post/lista-posts/fila-post/fila-post'
import fabPost from 'componentes/menu-post/fab-post/fab-post'
import listaPostCtrl from 'componentes/menu-post/lista-posts/lista-posts-ctrl'

import moduloServicePosts from 'services/servicePosts.js'

const raiz ="./client/admin/componentes/menu-post/"
const nombreComponente = 'listaPosts'
const nombreFichero = 'lista-posts'


angular.module(nombreComponente, ['ngMaterial', filaPost, fabPost, moduloServicePosts])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
        /*controller : function(servicioTareas){
            this.posts = servicioTareas.posts
        },*/
        controller : listaPostCtrl
    })


export default nombreComponente