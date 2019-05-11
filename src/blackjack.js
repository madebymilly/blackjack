import { draw } from './draw.js';

let test = console.log;

const $obj = $( '#bj' );
//test($obj);

function changeHandCards( hand, newRank ) {
	let cardValue = getCardValue( newRank );
	let changedHand = hand.map( card => ({ rank: newRank, suit: card.suit, cardVal: cardValue, hidden: card.hidden, colour: card.colour }) );
	return changedHand;
};

function quickStart( game ) {
	$( '#start' ).click();
	$( '.player1 button.bet#10' ).click();
  draw.init(game, $obj);
};

function findPos( array, obj ) {
  for(var i = 0; i < array.length; i++) {
      if(array[i] === obj) {
          return i;
      }
  }
  return -1;
};

function dealCard( game ) {
	return game.deck.pop();
};

function addCard(game, p, hidden) {
	let newC = dealCard( game );
	if (hidden) { newC.hidden = true; }
	p.hand.push(newC);
};

function nextPlayersTurn(game, p) {
	let nextPlayer = game.players[findPos(game.players, p) + 1] ? game.players[findPos(game.players, p) + 1] : false;
	p.done = true;
	p.active = false;
	test(p);
	if (nextPlayer) {
		nextPlayer.active = true;
	} else {
		test('no other player found, move to finish game');
		showBankCards( game.bank );
		finishHand(game);
	}
	draw.init(game, $obj);
};

function procesBet(p) {
	p.stackSize -= p.bet;
};

function checkHandValue(game, p, bj) {
	let hv = getHandVal( p['hand'] );
	if ( hv == 21 && bj ) {
		alert('blackjack!');
		p.done = true;
	} else if ( hv > 21 ) {
		p.busted = true;
		p.done = true;
		nextPlayersTurn(game, p);
	}
};

function showBankCards( bank ) {
	for (let c in bank.hand) {
		bank.hand[c].hidden = false;
	}
};

export function getHandVal( hand ) {
	let hv = 0;
	for (var c in hand) {
		hv += hand[c].cardVal;
	}
	return hv;
};

function addCardToDeck( deck, card ) {
	return deck.concat( card );
};

function getCardValue( rank ) {
	return (rank < 10) ? rank : 10;
};

function createDeck() {
	const suits = ["c","d","h","s"];
	const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]; // ace = 1
	let deck = [];
	// make 6(decks) x 4(suits) x 13(ranks) cards
  for (let d=0; d<6; d++) {
    for (let i=0; i<suits.length; i++) {
  		for (let j=0; j<ranks.length; j++) {
				let suit = suits[i],
					rank = ranks[j];
				deck = addCardToDeck( deck, {
					rank: rank,
					suit: suit,
					hidden: false,
					colour: (suit == "h" || suit == "d") ? "red" : "black",
					cardVal: getCardValue( rank ),
				} );
  		}
  	}
  }
	// shuffle
	deck.sort(function() {
		return 0.5 - Math.random();
	});
	return deck;
};

function addMove( moves, move ) {
	return moves.concat( move );
};

export function getMoves(p) {
	let moves = [ 'hit', 'stand' ];
	if ( getHandVal( p.hand ) > 8 && getHandVal( p.hand ) < 12 ) {
		moves = addMove( moves, 'double' );
	} else if ( p.hand[0].cardVal == p.hand[1].cardVal ) {
		moves = addMove( moves, 'split' );
		if ( getHandVal( p.hand ) == 10 ) {
			moves = addMove( moves, 'double' );
		}
	}
	return moves;
};

function addPlayer( players, player ) {
	return players.concat( player );
}

function createPlayer( id, name, stackSize, relatedTo, bet ) {
	let player = {
		id: id,
		name: name,
		stackSize: stackSize,
		relatedTo: relatedTo,
		hand: [],
		bet: (bet) ? bet : 0,
		pot: {
			hand: [],
			bet: [],
		},
		done: false,
		active: false,
		busted: false,
	};
	return player;
};

const play = function(game, p, move) {
	switch (move) {
		case 'hit':
			addCard(game, p);
			checkHandValue(game, p, false);
			draw.init(game, $obj);
			break;
		case 'stand':
			nextPlayersTurn(game, p);
			break;
		case 'double':
			addCard(game, p);
			procesBet(p);
			p.bet *= 2;
			nextPlayersTurn(game, p);
			draw.init(game, $obj);
			break;
		case 'split':
			let playerPlus = createPlayer(p.id + 1, p.name, p.stackSize, p.id, p.bet);
			// TODO: kan niet id + 1 zijn, want wat bij nog een keer splitsen?
			game.players.push(playerPlus);
			procesBet(p);
			// last card of p goes to playerPlus:
			let cardToMove = p.hand[1];
			playerPlus.hand.push(cardToMove);
			p.hand.splice(1, 1);
			addCard(game, p);
			addCard(game, playerPlus);
			checkHandValue(game, playerPlus, false); // no bj possible after split
			draw.drawPlayerMoves(game);
			draw.init(game, $obj);
			break;
	}
};

const finishHand = function(game) {
	var b = game.bank;
	// check if bank has blackjack
	if ( getHandVal(b.hand) == 21 ) {
		test('players lose');
	}
	// bank gets card if less than 17
	else if ( getHandVal(b.hand) < 17 ) {
		do {
			addCard(game, b);
			draw.init(game, $obj);
		} while ( getHandVal(b.hand) < 17 );
	}

	// check if bank is busted
	if ( getHandVal(b.hand) > 21 ) {
		test( 'bank is busted' );
		for (let p in game.players) {
			let notBustedPlayers = game.players.filter( player => player.busted == false );
			notBustedPlayers.forEach( function( player ,index ) {
   			player.stackSize += player.bet * 2;
			} );
			draw.init(game, $obj);
		}
	} else { // if bank is not busted
		game.players.forEach( function( player, index ) {
			if ( getHandVal( b.hand ) == getHandVal( player.hand ) ) {
				test('gelijkspel!');
				player.stackSize += player.bet;
			} else if ( getHandVal( b.hand ) < getHandVal( player.hand )) {
				test('player wins!');
				player.stackSize += player.bet * 2;
			} else {
				test('player loses!');
			}
		} );
	}

};

const dealHands = function(game) {

		var b = game.bank;

		// deal 1st card
		game.players.forEach( function( player, index ) {
			addCard( game, player, false );
		} );
		addCard( game, b, true );

		// deal 2nd card
		game.players.forEach( function( player, index ) {
			addCard( game, player, false );
		} );
		addCard( game, b, false );

		// if not-hidden card from bank is ace:
		// TODO: offer insurance

		// Give players moves based on hand value
		game.players.forEach( function( player, index ) {
			checkHandValue(game, player, true);
	  	getMoves(player);
		} );
		draw.drawPlayerMoves(game);

		// activate first player:
		game.players[0].active = true;

  	// draw the game
		draw.init(game, $obj);

		// player plays:
		$('body').on('click', 'button.move', function(e) {
			e.preventDefault();

			let i = $(this).parents('.player').attr('id'),
				move = $(this).attr('id');
			for (let p in game.players) {
				var player = (game.players[p]);
				if (player.id == i) {
					console.log(player);
					play(game, player, move);
				}
			}
		});
}

const startRound = function( game ) {

	// place bets
	draw.drawBets( game );

	$('body').on('click', 'button.bet', function(e) {
		e.preventDefault();
		var i = $(this).parents('.player').attr('id');
		for (p in game.players) {
			var p = (game.players[p]);
			if (p.id == i) {
				p.bet = parseInt($(this).attr('id'));
				procesBet(p);
				draw.removeBets($(this));
				draw.drawPlayer(p);
			}
		}

		// check if all players have bet:
		var allBet = true;
		for (p in game.players) {
			if (game.players[p].bet == 0) {
				allBet = false;
			}
		}
		if (allBet) {
			dealHands(game);
		}

	});
}

const start = function( game ) {

	draw.drawBoard(game, $obj);
	draw.drawPlayers(game, $obj);

	startRound( game );
	test(game);
};

const createGame = function() {

	// var playerName = window.prompt('Wat is uw naam?');
	// var stackSize = window.prompt('Hoeveel chips wilt u?');

	const playerList = [];
	const players = addPlayer( playerList, createPlayer( 1, "Milly", 200, false, false ) );

	// create Bank:
	const bank = { hand: [], };

	// create Deck:
	const deck = createDeck();

	return { players, bank, deck };

};

const blackjack = {
	init: function() {
		var game = createGame();
		$( '#start' ).on( 'click', function( e ) {
			e.preventDefault();
			start( game );
		} );

		// Testing
		//quickStart( game );
	},
};

export { blackjack };
