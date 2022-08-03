interface Enemy {
  name: string;
}
interface HeroInfo {
  superPowers: string[];
}
export interface Hero {
  name: string;
  info: HeroInfo;
  enemies: Enemy[];
  id: string;
}
