const styleSwitcherToggale = document.querySelector(".style-switcher-toggaler");
    styleSwitcherToggale.addEventListener("click",() =>{
        document.querySelector(".style-switcher").classList.toggle("open")

    })

    window.addEventListener("scroll", ()=>{
        if(  document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open")
        }

    })

    //  ---------------color theme -----------

    let altranateStyle = document.querySelectorAll(".alternate-style")
      function setActiveStyle(color){

        altranateStyle.forEach((item) =>{
            if(color === item.getAttribute("title")){
                item.removeAttribute("disabled")

            
            }
            else{
                item.setAttribute("disabled","true")
        }

        } )
    }


    // == theme light ans dark mode ===
  
  let daynight = document.querySelector(".day-night")

  daynight.addEventListener('click',function(){
    daynight.querySelector('i').classList.toggle("fa-sun")
    daynight.querySelector('i').classList.toggle("fa-moon")
    document.body.classList.toggle('dark')

  })
  

  window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark'))
    daynight.querySelector("i").classList.add('fa-sun')
else{
    daynight.querySelector("i").classList.add('fa-moon')
}
  })


  let form = document.querySelector("#form")
  let input = document.querySelector("#name")
  let email = document.querySelector("#email")
  let phone = document.querySelector("#phone")
  let msg = document.querySelector("#msg")

  form.addEventListener("submit", function(e){
           e.preventDefault()

           task = []

           let userdata = [{input:input.value}, {email:email.value},{phone:phone.value},{message:msg.value}]
           userdata = JSON.stringify(userdata)
           task.push(userdata)
           localStorage.setItem("data",task)

           input.value=''
           email.value=''
           phone.value=''
           msg.value=''


  })
    let number = 95934
    console.log(number)