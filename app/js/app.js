window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
        
        let size = window.prompt("Enter the size of the diamond: ")
        
        let object = document.querySelector('div')
        
        let left = 0
        let right = 0
        
        function generate(size){
            let text = ""
            let space = ""
            for(let x=0; x<size; x++)
                space = space + " "
            if (size %2==0){
                for (let i=0; i<size; i++){
                    for (let j=0; j<i; j++){
                        text += "*" + space
                    }
                    text = text + "<br>"
                    object.innerHTML = text
                    object.style.textAlign = "center"
                }
                for (let i=size; i>=0; i--){
                    for (let j=0; j<i; j++){
                        text += "*" + space
                    }
                    text = text + "<br>"
                    object.innerHTML = text
                    object.style.textAlign = "center"
                }
            }
            else{
                for (let i=0; i<size; i++){
                    for (let j=0; j<=i; j++){
                            text += "*" + space
                    }
                    text = text + "<br>"
                    object.innerHTML = text
                    object.style.textAlign = "center"
                }
                for (let i=size; i>=0; i--){
                    for (let j=0; j<=i; j++){
                        text += "*" + space
                    }
                    text = text + "<br>"
                    object.innerHTML = text
                    object.style.textAlign = "center"
                }
            }
        }
        let moveDiamond = () =>{
            if (left < (window.innerWidth - object.clientWidth + 6) && right == 0){
                object.style.left = left + 'px'
                left += 1
            }
            else if(left != 0){
                right = 1
                object.style.left = left + 'px'
                left -= 1
                if (left == 0)
                    right = 0
            }
        }
        
        generate(size)
        //setInterval(moveDiamond, 5)

};
