import { HeroesComponent } from './hero.component';
import {HeroService} from './hero.service';
export function heroDriver(){
    let heroService=new HeroService();
    let heroComp= new HeroesComponent(heroService);
    heroComp.getHeroes();
  //  heroComp.printOut();//sync calling cause error since getHeroes hasn't done.
    heroComp.printOutAsync();
}
//test