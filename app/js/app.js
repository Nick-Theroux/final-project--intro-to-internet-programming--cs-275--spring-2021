window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
        let size = window.prompt("Enter the size of the diamond: ")
        
        let object = document.querySelector('div')
        
        function generate(size){
            let text = "" 
            if (size %2==0){
                for (let i=0; i<size; i++){
                    for (let j=0; j<=i; j++){
                        text += "* "
                    }
                    text = text + "\n"
                    object.innerHTML = text
                    object.style.textAlign = "center";
                }
                for (let i=size; i>=0; i--){
                    for (let j=0; j<=i; j++){
                        text += "* "
                    }
                    text = text + "\n"
                    object.innerHTML = text
                    object.style.textAlign = "center";
                }
            }
            else{
                for (let i=0; i<size; i++){
                    for (let j=0; j<=i; j++){
                        text += "*"
                    }
                    text = text + "\n"
                    object.innerHTML = text
                    object.style.textAlign = "center";
                }
                for (let i=size; i>=0; i--){
                    for (let j=0; j<=i; j++){
                        text += "*"
                    }
                    text = text + "\n"
                    object.innerHTML = text
                    object.style.textAlign = "center";
                }
            }
        }
        generate(size)

};
