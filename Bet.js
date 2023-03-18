
export class Bet {
  constructor(game_id, purchaser) {
    this.price = 0.00;
    this.odds = 0.00;
    this.game_id = game_id;
    this.home_team = true;
    this.eventDate = '';
    this.purchaser = purchaser;
  }
}