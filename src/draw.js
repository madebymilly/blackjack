import { getHandVal, getMoves } from './blackjack.js';

const draw = {

	drawBoard: function(game, $obj) {

		// remove start game button:
		$('#start').remove();

		// draw players & bank:
		const $playersDiv = $('<div class="players"></div>');
		const $bankDiv = $('<div class="bank"><h3>Bank</h3></div>');
		const $handDiv = $('<div class="hand"></div>');

		$('.bank').remove();
		$bankDiv.append($handDiv);
		$obj.append($bankDiv);

		$('.players').remove();
		$obj.append($playersDiv);

	},

	drawEmpty: function(game, $obj) {
		$obj.empty();
	},

	drawPlayers: function(game) {
		$('.players').empty();
		for (let p in game.players) {
			const pl = game.players[p],
					active = (pl.active) ? 'active' : '',
					win = (pl.done) ? ((pl.win) ? 'win' : '') : '',
					busted = (pl.busted) ? 'busted' : '';
			if (!pl.relatedTo) {
				$('.players').append($('<div class="player player' + pl.id + ' ' + active +' '+ win +' '+ busted +'" id="'+ pl.id +'"><h3><span>'+ pl.name +' </span><em>('+ pl.stackSize +')</em></h3><div class="hand"></div><div class="buttons"></div></div>'));
			} else {
				$('.players').append($('<div class="player player' + pl.id + ' ' + active +' '+ win +' '+ busted +'" id="'+ pl.id +'"><h3><span>'+ pl.name +' </span></h3><div class="hand"></div></div>'));
			}
		}
	},

	drawPlayer: function(p) {
		$('.player'+ p.id +' h3 span, .player'+ p.id +' h3 em').empty();
		$('.player'+ p.id +' h3 span').text(p.name);
		$('.player'+ p.id +' h3 em').text(' (' + p.stackSize + ') ');
	},

	drawPlayerHand: function(game) {
		for (let p in game.players) {
			var pl = game.players[p];
			$('.player' + pl.id + ' .hand').empty();
			for (let c in pl.hand) {
				const card = pl.hand[c];
				$('.player' + pl.id + ' .hand').append($('<div class="card">'+ card.rank + card.suit+' ('+ card.cardVal +')</div>'));
			}
			$('.player'+ pl.id +' .hand').append($('<strong>'+ getHandVal( pl.hand ) +'</strong>'));
		}
	},

	drawBankHand: function(game) {
		for (let c in game.bank.hand) {
			const card = game.bank.hand[c],
					hidden = (card.hidden) ? 'hidden' : '';
				$('.bank .hand').append(
					$('<div class="card ' + hidden + '">' + card.rank + card.suit+' ('+ card.cardVal +')</div>')
				);
		}
		$('.bank .hand').append($('<strong>'+ getHandVal( game.bank.hand ) +'</strong>'));
	},

	drawPlayerMoves: function(game) {
		for (let p in game.players) {
			const pl = game.players[p];
			if (pl.active) {
				const moves = getMoves(pl);
				for ( let m in moves ) {
					$('.player' + pl.id).append(
						$('<button class="move" id="'+ moves[m] +'">'+ moves[m] +'</button>')
					);
				}
			}
		}
	},

	drawBets: function(game) {
		for (let p in game.players) {
			const stack = game.players[p].stackSize,
				buttonsDiv = $('#'+game.players[p].id+'.player .buttons');
			buttonsDiv.append('<button class="bet" id="5">5</button>');
			if (stack >= 10) {
				buttonsDiv.append('<button class="bet" id="10">10</button>');
			}
			if (stack >= 25) {
				buttonsDiv.append('<button class="bet" id="25">25</button>');
			}
			if (stack >= 50) {
				buttonsDiv.append('<button class="bet" id="50">50</button>');
			}
			if (stack >= 100) {
				buttonsDiv.append('<button class="bet" id="100">100</button>');
			}
		}
	},

	removeBets: function($btn) {
		$btn.parents('.buttons').remove();
	},

	drawBet: function(game) {
		for (let p in game.players) {
			const pl = game.players[p];
			$('.player'+ pl.id +' .played-bet').remove();
			$('.player'+ pl.id).append('<div class="played-bet">Uw inzet: '+pl.bet+'</div>');
		}
	},

	init: function(game, $obj) {

		draw.drawBoard(game, $obj);
		draw.drawPlayers(game);
		draw.drawBankHand(game);
		draw.drawPlayerHand(game);
		draw.drawBet(game);
		draw.drawPlayerMoves(game);
	},
};

export { draw };
