let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


let animalsLeftIcon = document.querySelector(".animals_left_icon");
let animalsRightIcon = document.querySelector(".animals_right_icon");
let sliderInnerContainer = document.querySelector(".slider_inner_container");
let newTrendContainer = document.querySelector(".new_trend_container");
let btns = document.querySelectorAll(".trend_btns button");
let btnsParent = document.querySelector(".trend_btns")
let trendPr = document.querySelector(".trend_products_container")
let aptekList = document.querySelector(".aptek_list")
let aptekChildList = document.querySelector(".aptek_child_list")
let aptekIcon=document.querySelector(".aptek_list svg")
let closeIcon=document.querySelector(".close_icon")



let barsIcon=document.querySelector(".bars_icon");
let navList=document.querySelector(".nav_list");

closeIcon.addEventListener("click",()=>{
  navList.classList.remove("nav_list_active")
})

barsIcon.addEventListener("click",()=>{
  navList.classList.add("nav_list_active")
})

let count = 0;


function sliderAnimals() {
  for (let i = 0; i < sliderInnerContainer.children.length; i++) {
    sliderInnerContainer.children[i].style.transform = `translateX(-${count * 175}px)`
    sliderInnerContainer.children[i].classList.remove("slider_first_active")
  }
  sliderInnerContainer.children[count + 1].classList.add("slider_first_active")
}


setInterval(() => {
  if (count < sliderInnerContainer.children.length - 3) {
    count++
    sliderAnimals()
  } else {
    count = 0
    sliderAnimals()
  }
}, 4000);



animalsRightIcon.addEventListener("click", () => {
  if (count < sliderInnerContainer.children.length - 3) {
    count++
    sliderAnimals()
  } else {
    count = 0
    sliderAnimals()
  }
})


animalsLeftIcon.addEventListener("click", () => {
  if (count > 0) {
    count--
    sliderAnimals()
  } else {
    count = 0
    sliderAnimals()
  }
})



products.forEach(data => {
  newTrendContainer.innerHTML += `
          <div class="new_trend_card">
                    <div class="new_trend_card_img">
                        <img src="${data.img}"
                            alt="">
                        <button class="heart_btn"><svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                                    fill="black" />
                            </svg>
                        </button>
                        <button onclick="addToCart(${data.id})" class="basket_btn">İndi al <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                                    fill="#1D1D1B" />
                            </svg>
                        </button>
                    </div>
                    <p>${data.name} <span>${data.price}</span> <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                                fill="black" />
                        </svg>
                    </p>
                </div>
  
  `
})



function addToCart(x) {
  // x=data.id

  let checkBasket = basket.find(data => data.id === x)

  if (checkBasket) {
    checkBasket.count += 1
  } else {
    let checkPr = products.find(data => data.id === x)
    checkPr.count = 1
    basket.push(checkPr)
  }

  console.log(basket);

  localStorage.setItem("sebet", JSON.stringify(basket))


}




products2.forEach(data => {
  trendPr.innerHTML += `
  <div data-name="${data.x}" class="trend_product_card">
                    <img src="${data.img}" alt="">
                    <h4>${data.name}</h4>
                    <p>${data.price} <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                                fill="black" />
                        </svg>
                    </p>
                    <div class="trend_basket_heart_btns">
                        <button><svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                                    fill="black" />
                            </svg>
                        </button>
                        <button onclick="addToCart2(${data.id})">İndi al <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                                    fill="#1D1D1B" />
                            </svg>
                        </button>
                    </div>
                </div>
  
  `
})
let trendProductCard=document.querySelectorAll(".trend_product_card")

// console.log(trendProductCard);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    btnsParent.querySelector(".trend_active_btn").classList.remove("trend_active_btn")
    btns[i].classList.add("trend_active_btn")
    let getBtnsData=btns[i].getAttribute("data-name")
    console.log(getBtnsData);
    for(let i=0;i<trendProductCard.length;i++){
      let getCardData=trendProductCard[i].getAttribute("data-name")
      if(getBtnsData===getCardData || getBtnsData==="butunMehsullar"){
        trendProductCard[i].classList.add("show")
        trendProductCard[i].classList.remove("hide")
      }else{
        trendProductCard[i].classList.add("hide")
        trendProductCard[i].classList.remove("show")
      }
    }
  })
}



function addToCart2(x){
  console.log(x);
  let checkBasket=basket.find(data=>data.id===x)
  if(checkBasket){
    checkBasket.count+=1
  }else{
    let checkPr=products2.find(data=>data.id===x)
    checkPr.count=1
    basket.push(checkPr)
  }
  console.log(basket);

  localStorage.setItem("sebet", JSON.stringify(basket))
}



aptekList.addEventListener("click",()=>{
  aptekChildList.classList.toggle("aptek_list_active")
  aptekIcon.classList.toggle("aptek_icon_list_active")
})

