
class Bet {
  constructor(game_id, user, on_home_team) {
    this.price = 0.00;
    this.odds = 0.00;
    this.game_id = game_id;
    this.home_team = on_home_team;
    this.eventDate = '';
    this.purchaser = user;
  }
}

export { Bet as default };


