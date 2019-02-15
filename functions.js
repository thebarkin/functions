const man = {
    name: "Socrates",
    morality: true,
}

function mortality(name){
    if (name === man.name){
        return true;
    }else{
        return false;
    }
}

console.log(mortality("Socrates"));
console.log(mortality("Smith"));
console.log(mortality(2));

//EXTRA CREDIT

const cakes = ['chocolate', 'vanilla', 'strawberry'];

function cake(cakesArray, chocolateCake = true){
    if ( chocolateCake ) {
        const cakeFlavor = cakes.filter((cake)=>{
            return cake === "chocolate";
        });
        return cakeFlavor.join('');
    }
}

console.log(cake(cakes));
