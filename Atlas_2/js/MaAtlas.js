import atlasClass from "./atlasClass.js";




 

export const doApi = async (search) => {
    let url = (`https://restcountries.com/v3.1/name/${search}`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        createAtlas(data);

    }
    catch(err){
        console.log(err);
        alert("There problem, come back later")
      }
}





const createAtlas = (ar) => {
    document.querySelector("#id_parent").innerHTML = "";
    let country = new atlasClass("#id_parent", ar[0],  countryNeighber, doApi);
    country.render();
}


const countryNeighber = async (codeCountry) => {
    let url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    let resp = await fetch(url);
    let data = await resp.json();
    let fullCountry = await (data[0].name.common);
    return fullCountry;
}

