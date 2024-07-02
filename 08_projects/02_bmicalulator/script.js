   const form = document.querySelector('form');
//    this usecase will give u empty
//    const height = parseInt(document.querySelector('#height').value)


   form.addEventListener('submit',function(e){
       e.preventDefault();
       const height = parseInt(document.querySelector('#height').value);
       const Weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === ''|| isNaN(height) || height < 0){
        results.innerHTML = `Please enter right value ${height}`;
    }else if(Weight === ''|| isNaN(Weight) || Weight<0){
        results.innerHTML = `Please enter right value ${Weight}`;
    }else{
        
            const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
            //show the result
            results.innerHTML = `<span>${bmi}</span>`;
          
    }

   })


