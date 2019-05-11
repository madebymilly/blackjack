import { getHandVal, getMoves } from './blackjack.js';

var draw = {

	drawBoard: function(game, $obj) {

		// remove start game button:
		$('#start').remove();

		// draw players & bank:
		var $playersDiv = $('<div class="players"></div>');
		var $bankDiv = $('<div class="bank"><h3>Bank</h3></div>');
		var $handDiv = $('<div class="hand"></div>');

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
		for (p in game.players) {
			var p = game.players[p],
					active = (p.active) ? 'active' : '',
					win = (p.done) ? ((p.win) ? 'win' : '') : '',
					busted = (p.busted) ? 'busted' : '';
			if (!p.relatedTo) {
				$('.players').append($('<div class="player player' + p.id + ' ' + active +' '+ win +' '+ busted +'" id="'+ p.id +'"><h3><span>'+ p.name +' </span><em>('+ p.stackSize +')</em></h3><div class="hand"></div><div class="buttons"></div></div>'));
			} else {
				$('.players').append($('<div class="player player' + p.id + ' ' + active +' '+ win +' '+ busted +'" id="'+ p.id +'"><h3><span>'+ p.name +' </span></h3><div class="hand"></div></div>'));
			}
		}
	},

	drawPlayer: function(p) {
		$('.player'+ p.id +' h3 span, .player'+ p.id +' h3 em').empty();
		$('.player'+ p.id +' h3 span').text(p.name);
		$('.player'+ p.id +' h3 em').text(' (' + p.stackSize + ') ');
	},

	drawPlayerHand: function(game) {
		for (p in game.players) {
			var p = game.players[p];
			$('.player' + p.id + ' .hand').empty();
			for (c in p.hand) {
				var c = p.hand[c];
				$('.player' + p.id + ' .hand').append($('<div class="card">'+ c.rank + c.suit+' ('+ c.cardVal +')</div>'));
			}
			$('.player'+ p.id +' .hand').append($('<strong>'+ getHandVal( p.hand ) +'</strong>'));
		}
	},

	drawBankHand: function(game) {
		for (c in game.bank.hand) {
			var c = game.bank.hand[c],
					hidden = (c.hidden) ? 'hidden' : '';
				$('.bank .hand').append(
					$('<div class="card ' + hidden + '">' + c.rank + c.suit+' ('+ c.cardVal +')</div>')
				);
		}
		$('.bank .hand').append($('<strong>'+ getHandVal( game.bank.hand ) +'</strong>'));
	},

	drawPlayerMoves: function(game) {
		for (p in game.players) {
			var p = game.players[p];
			if (p.active) {
				var moves = getMoves(p);
				for ( var m in moves ) {
					$('.player' + p.id).append(
						$('<button class="move" id="'+ moves[m] +'">'+ moves[m] +'</button>')
					);
				}
			}
		}
	},

	drawBets: function(game) {
		for (var p in game.players) {
			var stack = game.players[p].stackSize,
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
		for (p in game.players) {
			var p = game.players[p];
			$('.player'+ p.id +' .played-bet').remove();
			$('.player'+ p.id).append('<div class="played-bet">Uw inzet: '+p.bet+'</div>');
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
