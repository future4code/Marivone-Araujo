

let listaDePosts = []

function addPost(){
    let tituloPost = document.getElementById("titulo-post").value
    
    let autorPost = document.getElementById("autor-post").value
    
    let conteudoPost = document.getElementById("conteudo-post").value

    
const blogPost = {
    
    titulo: ``,
    
    autor: ``,
    
    conteudo: ``
}

blogPost.titulo = tituloPost
blogPost.autor = autorPost
blogPost.conteudo = conteudoPost

listaDePosts.push(blogPost) 

document.getElementById("titulo-post").value = ``
document.getElementById("autor-post").value = ``
document.getElementById("conteudo-post").value = ``

console.log(listaDePosts)

}

