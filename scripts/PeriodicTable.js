fetch("elements.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
console.log(jsonData);
class PeriodicTable {
    constructor() {
        this.elements = [];
    }
}

new PeriodicTable();