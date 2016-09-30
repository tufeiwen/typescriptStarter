import {Hero} from "./hero";

export default function printHero(){
    let hero=new Hero();
    hero.id=1;
    hero.name="Serena"
    console.log(hero.id+" : "+hero.name);
}