export default class atlasClass {
    constructor(_parent, _item,  countryNeighber, doApi) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = Object.keys(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital;
        this.map = _item.latlng;
        this.borders = _item.borders;
        this.doApi = doApi;
        this.countryNeighber = countryNeighber;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-md-8 mx-auto p-4  border shadow overflow-hidden";
        div.style = "background: rgba(200, 200, 200, 0.500); border-radius:1em ;}"
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img  src="${this.flag}" alt="${this.name}" class="w-25 float-end ms-4">

        <h2>${this.name}</h2>
        <div><strong>Population:</strong> ${this.pop} </div>
        <div><strong>Region:</strong> ${this.region}</div>
        <div><strong>Languages:</strong> ${this.languages}</div>
        <div><strong>Coin:</strong>  ${this.coin}, ${this.coinDescription}</div>
        <div><strong>Capital:</strong> ${this.capital}</div>
        <div class="mt-3 "><strong>Nearby Countries:</strong><br>
        <div class="borders_div"></div>
        </div>
        
        <iframe style="border-radius:1em ;" class="mt-4 col-12" height="400" src="https://maps.google.com/maps/place?q=${this.map[0]},${this.map[1]}&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" ></iframe>
       `

        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item) => {
            let a = document.createElement("a");
            a.innerHTML = await this.countryNeighber(item) + " ";
            a.style = "color: rgba(103, 97, 97, 0.900); cursor: pointer; "
            borders_div.append(a,",");
            a.addEventListener("click", () => {
                this.doApi(a.innerHTML);
            })
        })


        
    }
}