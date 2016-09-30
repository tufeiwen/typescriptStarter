import { Hero } from './hero';
import { HeroService } from './hero.service';

export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;
 // heroService: HeroService;
  constructor(
    //private router: Router,
   private heroService: HeroService) {
    //this.heroService = heroService;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(
      heroes => this.heroes = heroes);
    // this.heroes=this.heroService.getHeroesSync();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  printOut(): void {
    for (let hero of this.heroes)
      console.log(hero.id + " " + hero.name)
  }
  printOutAsync(): void {
    this.heroService.getHeroes()
      .then(
      heroes => this.heroes = heroes)
      .then(
      result => {
        for (let hero of this.heroes)
          console.log(hero.id + " " + hero.name);
      }
      );

  }
  /*
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
    */
}