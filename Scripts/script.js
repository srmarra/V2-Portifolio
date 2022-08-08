function inicio(){

for(var i = 0; i< document.getElementsByTagName("video").length;i++){
    if(screen.width > 500){
        document.getElementsByTagName("video")[i].width = 500
        console.log("Tamanho padrão")
    }else{
        document.getElementsByTagName("video")[i].width = screen.width
        console.log("Tamanho variavel")
    }
    
}

for(var i = 0; document.getElementsByTagName("img").length;i++){
    if(screen.width > 500){
        document.getElementsByTagName("img")[i].width = 500

    }else{
        document.getElementsByTagName("img")[i].width = screen.width
    }
}

}