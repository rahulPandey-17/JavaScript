            // keep adding numbers to the array until zero is added

            const prompt = require("prompt-sync")({sigint:true});

            const arr = [];
            let num;

            do {
                num = prompt("Enter the number : ");
                num = Number.parseInt(num);
                
                arr.push(num);

            }while(num != 0);

            console.log(arr);   