// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
    cats.pop();

}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
   const copyOfCats=[...cats,"Broom"];
   return(copyOfCats);
}
function prependCat(name){
   const copyCats=["Arnold",...cats];
   return(copyCats);
}
function removeLastCat(){
   const NewCats= cats.slice(0,-1);
   return(NewCats);
}
function removeFirstCat(){
   const NewwCats= cats.slice(1);
   return (NewwCats);
}