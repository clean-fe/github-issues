export const mutationObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutaion => {
    console.log(mutaion)
  })
})
