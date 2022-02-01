class Element {
    constructor(data) {
        console.log(data[atomic]);
        this.atomic = data[atomic];
        this.symbol = data[symbol];
        this.weight = data[weight];
        this.electronstring = data[electronstring];
        this.series = data[series];
        this.melt = data[melt];
        this.boil = data[boil];
        this.electroneg = data[electroneg];
        this.valence = data[valence];
        this.oxidation = data[oxidation];
        this.radius = data[radius];
        this.discover = data[discover];
        this.density = data[density];
        this.affinity = data[affinity];
        this.conductivity = data[conductivity];
        this.abundance = data[abundance];
        this.heat = data[heat];
        this.ionize = data[ionize];
        this.expanded = data[expanded];
        this.electrons = data[electrons];
        this.quantum = data[quantum];
        this.isotopes = data[isotopes];
    }
}

$(document).ready(function () {
    var json = $.getJSON({'url': "js/elements.json", 'async': false});  
    

    //The next line of code will filter out all the unwanted data from the object.
    json = JSON.parse(json.responseText); 

    //You can now access the json variable's object data like this json.a and json.c
    //document.write(json.a);
    console.log(json);
});