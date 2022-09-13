const BASE_URL =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=`

const form=document.querySelector('form')
const loc=document.querySelector('#location')
const image=document.querySelector('#image')
const personal=document.querySelector('#personal')
const bio= document.querySelector('#bio')
const main=document.querySelector('.main')



// // 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck'
// // https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p={player's(first)_(last name} seperated by _ or %20

// star player jersey number
    // if(resJson.player[0].strNumber !== null){
    //     console.log(resJson.player[0].strNumber)
    // }

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const value =loc.value.split(' ').join('%20')

fetch(`${BASE_URL}${value}`)
.then((res)=>res.json())
.then((resJsn)=>{
  
    
    let personInfo = {}
    let profInfo={}
    let socialInfo={}
    let player=resJsn.player[0]

    image.innerHTML=""
    let img1 = document.createElement("img")
    img1.setAttribute("src",`${player.strThumb}`)
    img1.setAttribute("alt","player")
    img1.classList.add("athlete")
    image.prepend(img1)

    if(player.strRender !== null){
    let img2= document.createElement("img")
    img2.setAttribute("src",`${player.strRender}`)
    img2.setAttribute("alt","player")
    img2.classList.add("athlete2")
    image.append(img2)}

    if(player.strFanart4 !== null){
        let img3= document.createElement("img")
        img3.setAttribute("src",`${player.strFanart4}`)
        img3.setAttribute("alt","player")
        img3.classList.add("athlete2")
        image.append(img3)}
    
    




    personInfo['Name'] =player.strPlayer 
    
    personInfo['Hieght']=player.strHeight
    personInfo['Weight']=player.strWeight
    personInfo['Date of Birth']=player.dateBorn
    personInfo['Place of Birth']=player.strBirthLocation
    personInfo['Nationality'] = player.strNationality
    personObj(personInfo)

    // professional info 
    profInfo['Gender'] = player.strGender
    if(player.strNumber === null){
        // profInfo['Jersey Number'] = player.strNumber
        }
    else if(player.strNumber === ""){}
    else if(player.strNumber === player.strNumber){
        profInfo['Jersey Number'] = player.strNumber
    }

    
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
    if (player.strInstagram !== ""){
        
        a1.innerHTML=`${player.strPlayer}'s Instagram`
        a1.href=`${player.strInstagram}`
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
        a2.href=`${player.strTwitter}`
        a2.target=`_self`
        const li2=document.createElement('li')
        li2.append(a2)
        social.append(li2)
        // socialInfo['Twitter']=player.strTwitter
    }
    if (player.strFacebook !== ""){
        let a3 = document.createElement("a")
        
        a3.innerHTML=`${player.strPlayer}'s Twitter`
        a3.href=`${player.strTwitter}`
        a3.target=`_self`
        const x=`Twitter: ${a3}`
        const li3=document.createElement('li')
        li3.append(a3)
        social.append(li3)


        // socialInfo['Facebook']=player.strFacebook
    }
    

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



})


function personObj(personInfo){
    personal.innerHTML=''
    const head1=document.createElement('h3')
    head1.innerHTML='Background Info'

    for(const [key, value] of Object.entries(personInfo)){
        const p1=document.createElement('p')
        p1.innerHTML=`<strong>${key}</strong>: ${value}`
        personal.append(p1)}
        personal.prepend(head1)   

}

function proObj(profInfo){
    const professional=document.querySelector('#professional')
    professional.innerHTML=''
    const head2=document.createElement('h3')
    head2.innerHTML='Professional Info'

    for(const [key, value] of Object.entries(profInfo)){
        const p2=document.createElement('p')
        p2.innerHTML=`<strong>${key}</strong>: ${value}`
        professional.append(p2)}
        professional.prepend(head2)   

}



// function socialObj(socialInfo){
//     const social=document.querySelector('#social')
//     social.innerHTML=''
//     const head3=document.createElement('h3')
//     head3.innerHTML='Social Media Info'

//     for(const [key, value] of Object.entries(socialInfo)){
//         const p3=document.createElement('p')
//         p3.innerHTML=`<strong>${key}</strong>: ${value}`
//         social.append(p3)}
//         if(socialInfo!==""){social.prepend(head3)}   

// }