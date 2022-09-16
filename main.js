const BASE_URL =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=`

const form=document.querySelector('form')
const loc=document.querySelector('#location')
const image=document.querySelector('#image')
const personal=document.querySelector('#personal')
const bio= document.querySelector('#bio')
const main=document.querySelector('#main')
const error =document.querySelector('.error')
const initial=document.querySelector('.initial')
const wrapper2=document.querySelector('.wrapper2')
const container=document.querySelector('#container')
const hidden2=document.querySelector('.hidden2')
const hidden4=document.querySelector('#footerr')




// // 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck'
// // https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p={player's(first)_(last name} seperated by _ or %20

// star player jersey number
    // if(resJson.player[0].strNumber !== null){
    //     console.log(resJson.player[0].strNumber)
    // }



form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const value =loc.value.split(' ').join('%20')

    if(loc.value===""){
        bio.innerHTML=""
        initial.classList.add('hidden')
        error.classList.remove('hidden')
       error.innerHTML= `Please enter a valid input`
       bio.append(error)
       

    }
    else if(loc.value===" "){
        // bio.innerHTML=""
        
        initial.classList.add('hidden')
        error.classList.remove('hidden')
       error.innerHTML= `Please enter a valid input`
    //    bio.append(error)
    }
    else{
        error.classList.add(`hidden`)
        wrapper2.classList.remove('wrapper2')
        container.classList.add('wrapper')
        hidden2.classList.remove('hidden2')
        hidden4.classList.remove('hidden4')


    

fetch(`${BASE_URL}${value}`)
.then((res)=>res.json())
.then((resJsn)=>{
  
    
    let personInfo = {}
    let profInfo={}
    let socialInfo={}
    let player=resJsn.player[0]

    initial.classList.add('hidden')

    image.innerHTML=""

    if(player.strThumb !== null){
        if(player.strThumb !== ""){
            let img1 = document.createElement("img")
            img1.setAttribute("src",`${player.strThumb}`)
            img1.setAttribute("alt","player")
            img1.classList.add("athlete")
            image.prepend(img1)
        }}

    if(player.strRender !== null){
        if(player.strRender !== ""){
            let img2= document.createElement("img")
            img2.setAttribute("src",`${player.strRender}`)
            img2.setAttribute("alt","player")
            img2.classList.add("athlete")
            // img2.classList.add("wrapper")
            image.append(img2)
        }}

    if(player.strFanart4 !== null){
        if(player.strFanart4 !== ""){
            let img3= document.createElement("img")
            img3.setAttribute("src",`${player.strFanart4}`)
            img3.setAttribute("alt","player")
            img3.classList.add("athlete")
            // img3.classList.add("wrapper")
            image.append(img3)
        }}
    
    




    personInfo['Name'] =player.strPlayer 
    
    personInfo['Hieght']=player.strHeight
    personInfo['Weight']=player.strWeight
    personInfo['Date of Birth']=player.dateBorn
    personInfo['Place of Birth']=player.strBirthLocation
    personInfo['Nationality'] = player.strNationality
    personObj(personInfo)

    // professional info 
    profInfo['Gender'] = player.strGender
    profInfo['Jersey Number'] = player.strNumber
    profInfo['Position']=player.strPosition
    profInfo['Sport Type']=player.strSport
    if(player.strTeam.includes('_')){
        x=player.strTeam
        profInfo['Current Status']=x.slice(1) 
    }
    else if(player.strTeam !==player.strTeam.includes('_')){
        profInfo['Current Status']=player.strTeam

    }
    // profInfo['Current Status']=player.strTeam
    proObj(profInfo)

        // social medeia info
    let a1 = document.createElement("a")   
    const social=document.querySelector('#social')
    social.innerHTML=''  
    
    
    // var a = document.createElement('a');
    //   var linkText = document.createTextNode("my title text");
    //   a.appendChild(linkText);
    //   a.title = "my title text";
    //   a.href = `https:${player.strInstagram}`;
    //   a.target="_blank"
    //   social.append(a);

    if (player.strInstagram !== ""){
        
        a1.innerHTML=`${player.strPlayer}'s Instagram`
        a1.href=`https:${player.strInstagram}`
        a1.target=`_self`

        const li3=document.createElement('li')
        li3.append(a1)
        social.append(li3)
        social.append(a1)
        // socialInfo['Instagram']= a1
    }
    if (player.strTwitter !== ""){
        
        let a2 = document.createElement("a")
        
        a2.innerHTML=`${player.strPlayer}'s Twitter`
        a2.href=`https:${player.strTwitter}`
        a2.target=`_self`
        const li2=document.createElement('li')
        li2.append(a2)
        social.append(li2)
        // socialInfo['Twitter']=player.strTwitter
    }
    if (player.strFacebook !== ""){
        let a3 = document.createElement("a")
        
        a3.innerHTML=`${player.strPlayer}'s Facebook`
        a3.href=`https:${player.strFacebook}`
        a3.target=`_self`
        const x=`Twitter: ${a3}`
        const li3=document.createElement('li')
        li3.append(a3)
        social.append(li3)


        // socialInfo['Facebook']=player.strFacebook
    }
    for(const [key,value] of Object.entries(socialInfo))
            if(value !== null ){
                if(value !== ''){
                    const socialtitle=document.querySelector('#socialtitle')
                    socialtitle.classList.add('hidden3')
                    
                    
        }}
    

    // bio
    if(player.strDescriptionEN !==null){
    bio.innerHTML=""
    const title=document.createElement('h3')
    title.innerHTML=`${player.strPlayer}`
    const p=document.createElement('p')
    p.innerHTML=`${player.strDescriptionEN}`
    bio.append(p)
    bio.prepend(title)
    }




    

    
    
     
    
//   resJsn.player.forEach(e => {
//     let x =[]
//     x.push(e.strPlayer)
//    });

})
.catch(err=>console.log(err))

}

})


function personObj(personInfo){
    personal.innerHTML=''
    const head1=document.createElement('h3')
    head1.innerHTML='Background Info'

    for(const [key, value] of Object.entries(personInfo)){
        if(value !== null ){
            if(value !== ''){
                if(value!== "0"){
        
        const p1=document.createElement('p')
        p1.innerHTML=`<strong>${key}</strong>: ${value}`
        personal.append(p1)}}}}
        personal.prepend(head1)   

}

function proObj(profInfo){
    const professional=document.querySelector('#professional')
    professional.innerHTML=''
    const head2=document.createElement('h3')
    head2.innerHTML='Professional Info'

    for(const [key, value] of Object.entries(profInfo)){
        if(value !== null ){
            if(value !== ''){
        const p2=document.createElement('p')
        p2.innerHTML=`<strong>${key}</strong>: ${value}`
        professional.append(p2)}}}
        professional.prepend(head2)   

}

