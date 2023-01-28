console.log("Hello");


const getbtn = document.getElementById("genbtn")
// const getbtn = document.querySelector("#btn");
const imgclass = document.querySelector(".img-class");
console.log(getbtn);
const charname = document.getElementById("charname")

getbtn.addEventListener('click', async function (){

    try {
        let rickcharid = Math.floor(Math.random() * 100);
        const response = await fetch("https://rickandmortyapi.com/api/character/"+rickcharid)
        console.log(response);
        console.log(typeof(response));
        const data = await response.json();
        // console.log("Data JSON "+ data);
        // console.log("Image URL "+ data.message);
        imgclass.src = data.image;
        charname.innerHTML = data.name;
        
        console.log(rickcharid);
        
    } catch (error) {
        
    }

    


})
