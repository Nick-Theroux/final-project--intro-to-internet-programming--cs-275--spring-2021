window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
        let size = window.prompt("Enter the size of the diamond: ")
        function generate(size){
            if (size %2==0){
                for (let i=0; i<size; i++){
                    for (let j=0; j<i; j++){
                        let mid = "* " 
                    }
                }
            }
            else{
                for (let i=0; i<size; i++){
                    for (let j=0; j<i; j++){
                        let mid = "* " 

                    }
                }
            }
        }
        generate(size)
};
