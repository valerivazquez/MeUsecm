class postCtrl {
  constructor(servicePosts, $stateParams, $state, $mdToast) {
    this.servicePosts= servicePosts
    this.$stateParams= $stateParams
    this.$state = $state
    this.$mdToast= $mdToast
    this.postId = $stateParams.postId
    this.post = servicePosts.obtenerPost(this.postId)
    this.guardar = () => {
      servicePosts.guardarPost(this.post)
      $mdToast.show($mdToast.simple().content("Post guadada").hideDelay(3000))
      $state.go('menu-post')
    }
  }

  borrar() {
    this.servicePosts.borrarPost(this.postId)
    this.$mdToast.show(this.$mdToast.simple().content("Post borrada").hideDelay(3000))
    this.$state.go('menu-post')
  }
}

export default postCtrl