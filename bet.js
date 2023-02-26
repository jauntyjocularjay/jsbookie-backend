class Bet {
  constructor(game_id, purchaser){
    this.price = 0.00;
    this.odds = 0.00;
    this.game_id = game_id;
    this.team = '';
    this.eventDate = '';
    this.purchaser = purchaser;
  }
}

/*
Purchaser will be an object of 2 strings:
purchaser = {
      name: '',
      user_id: ''
    }
*/