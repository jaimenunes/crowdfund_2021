
//Abre o Modal ===================================================
const modal_container = document.getElementById("firstModal");
const modal_containerTwo = document.getElementById("secondModal")

function openModal(){
    modal_container.classList.add('show')
}

function checkModal(){
    modal_containerTwo.classList.add('show')
    modal_container.classList.remove('show')
}

//Fecha o Modal ===================================================

const closeModal = document.getElementById('closeModal');
const closeModalTwo = document.getElementById('closeModalTwo');

closeModal.addEventListener('click',()=>{
    modal_container.classList.remove('show');
})

function closeCheckModal(){
    modal_containerTwo.classList.remove('show')
}

//Alteração do estilo bookmark ========================================

const bookmark = document.getElementById('btn-bookmarked')

bookmark.addEventListener('click', (e)=>{
    e.preventDefault()
    bookmark.innerHTML="<button class='buttonBookmarked ps-0 pe-4'><svg class='me-3' width='56' height='56' xmlns='http://www.w3.org/2000/svg'> <g fill='none' fill-rule='evenodd'><circle fill='#3cb4ac' cx='28' cy='28' r='28' /> <path fill='#fff' d='M23 19v18l5-5.058L33 37V19z' /> </g></svg>Bookmarked</button>";
})

//mostar opção ao selecionar o produto =======================
function showPrice(id){
    let checkPrice= document.querySelector(`[id^=${id}Price]`)
    let noRewardPrice = document.getElementById('noRewardPrice')
    let bambooStandPrice = document.getElementById('bambooStandPrice')
    let blackEditionStandPrice = document.getElementById('blackEditionStandPrice')
    console.log(checkPrice)
    if(id==='noReward'){
        checkPrice.classList.add('show')
        bambooStandPrice.classList.remove('show')
        blackEditionStandPrice.classList.remove('show')
    }if(id==='bambooStand'){
        
        checkPrice.classList.add('show')
        noRewardPrice.classList.remove('show')
        blackEditionStandPrice.classList.remove('show')
    }
    if(id==='blackEditionStand'){
        checkPrice.classList.add('show')
        noRewardPrice.classList.remove('show')
        bambooStandPrice.classList.remove('show')
    }
    if((id != 'noReward') && (id!='bambooStand') && (id!='blackEditionStand')){
        noRewardPrice.classList.remove('show')
        bambooStandPrice.classList.remove('show')
        blackEditionStandPrice.classList.remove('show')
    }
}

//Altera a bordar do item selecionado

function lightContainer(id){
    let noRewardContainer = document.getElementById('noRewardContainer')
    let bambooStandContainer = document.getElementById('bambooStandContainer')
    let blackEditionStandContainer = document.getElementById('blackEditionStandContainer')
    let mahoganySpecialContainer = document.getElementById('mahoganySpecialContainer')
    
    if(id==='noReward'){
        noRewardContainer.classList.add('light')
        bambooStandContainer.classList.remove('light')
        blackEditionStandContainer.classList.remove('light')
        mahoganySpecialContainer.classList.remove('light')
    }if(id==='bambooStand'){
        bambooStandContainer.classList.add('light')
        noRewardContainer.classList.remove('light')
        blackEditionStandContainer.classList.remove('light')
        mahoganySpecialContainer.classList.remove('light')
    }
    if(id==='blackEditionStand'){
        noRewardContainer.classList.remove('light')
        bambooStandContainer.classList.remove('light')
        blackEditionStandContainer.classList.add('light')
        mahoganySpecialContainer.classList.remove('light')    }
    if(id === 'mahoganySpecial'){
        noRewardContainer.classList.remove('light')
        bambooStandContainer.classList.remove('light')
        blackEditionStandContainer.classList.remove('light')
        mahoganySpecialContainer.classList.add('light')    }
}

//Aumentar o número de pessoas que contribuiram ============================

function countBackers(){
    let countBackers= document.getElementById("countBackers")   
    let count = parseFloat(countBackers.innerText)
    count += 0.001
    countBackers.innerText=`${count.toFixed(3)}`
}

//Aumentar a barra de progresso de contribuição e atualizar os valores

function widthBar(id){
    let price = document.getElementById(id).querySelector('input')
    let number = Number( price.value)
    
    if(id === 'bambooStandPrice'){
        if(number < 25){
            alert("The value must be $25 or more!");

        }else{
            if(number < 100){
                number = `000.0${number}`
                number = parseFloat(number)
            }else{
                number = `000.${number}`
                number = parseFloat(number)
            }
            console.log(price)
            countBackers();
            checkModal();   
        }     
    }else{
        if(number < 75){
            alert("The value must be $75 or more!");
        }else{
            if(number < 100){
                number = `000.0${number}`
                number = parseFloat(number)
            }else{
                number = `000.${number}`
                number = parseFloat(number)
            }
            countBackers();
            checkModal();
        }
            
    }
    
    let money = document.getElementById('money')
    let actMoney=money.innerText
    let bar = document.querySelector('#bar')

    actMoney = Number(actMoney)
    if(actMoney >= 100.000){
        alert("Thank you, but we aren't getting more pledge!")
    }else{
        if((actMoney+= number) >= 100.000){
            money.innerText="100.000"
            bar.style.width ="100%"
        }else{
            money.innerText = actMoney.toFixed(3)
            actMoney = parseInt(actMoney)
            bar.style.width = `${actMoney}%`;
        }
    }
    
}

