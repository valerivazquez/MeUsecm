import * as angular from 'angular'
const nombreServicio = 'servicePosts'

function funcionPosts() {
  this.posts = []
  this.postsId = 0
  
  this.postsIniciales = () => {
    this.posts = [
      { id: 1, titulo: 'post inicial', estado: 'inbox' },
      { id: 2, titulo: 'post programada', estado: 'scheduled', fecha: new Date() },
      { id: 3, titulo: 'post ya hecha', estado: 'done' }]
    this.postsId = 3
  }
  
  this.obtenerPost = postId => {
    return postId == 0 ? { id:0, estado: 'add' } : this.posts.find(post => post.id == postId)
  }
  this.guardarPost = post => {
    if (post.id == 0) {
      this.postsId++
      post.id = this.postsId
      post.estado = 'inbox'
      this.posts.push(post)
    }
    else{
      this.cambiarPost(post)
    }
  }
  this.borrarPost = postId => {
    let postIndex = this.posts.findIndex(post => post.id == postId)
    this.posts.splice(postIndex, 1)
  }

  this.cambiarPost = (postCambiada) => {
    let postActual = this.posts.find(post => post.id == postCambiada.id)
    postActual = postCambiada
  }

  this.postsIniciales()
}

angular.module(nombreServicio, [])
  .service(nombreServicio, funcionPosts)

export default nombreServicio