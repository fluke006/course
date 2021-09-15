var elFrom = document.querySelector('.form');
elFrom.addEventListener('submit', (evt)=>{
   evt.preventDefault();
   var user_money = Number(document.querySelector(".form__user-input").value);
   var user_opition = document.querySelector('.form__money-select').value;
   var USD_TO_UZS = 	10650;
   var EURO_TO_UZS = 12100;
   var RU_TO_UZS = 110;


   if(user_opition === 'usd'){
      user_money *= USD_TO_UZS
   }else if(user_opition === 'euro'){
      user_money *= EURO_TO_UZS
   }else if(user_opition === 'ru'){
      user_money /= RU_TO_UZS
   }


   
   var answer = document.querySelector('.answer');

   answer.textContent = `${user_money} `;
})
