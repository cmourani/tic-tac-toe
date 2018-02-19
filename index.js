
const spots = {
	'1': [0, 0],
	'2': [0, 1],
	'3': [0, 2], 
	'4': [1, 0], 
	'5': [1, 1],
	'6': [1, 2],
	'7': [2, 0],
	'8': [2, 1],
	'9': [2, 2]
}

const pieces = {
	'1': 'X', 
	'2': 'O'
}


const pick = function(letter){
	let spot = prompt('Where would you like to place your piece?')
	if (typeof boardArr[spots[spot][0]][spots[spot][1]] === 'number'){
		boardArr[spots[spot][0]][spots[spot][1]] = letter
		let halves = board.split(spot)
		let board = halves[0] + letter + halves[1]	
	} else {
		console.log('This spot is claimed! Pick a different one')
		pick(letter)
	}
}

const turn = function(player){
	console.log('Player ' + player + ' is up and is playing with "' + pieces[player] + '"s')
  pick(pieces[player])
  currentPlayer = player === '1' ? '2' : '1'
  turns++
  console.log('Your piece has been placed. Here is the new board:\n' + board)
}

const checkBoard = function(current, board){
	let winner
	board.forEach(row => {
		if(row[0] === pieces[current] && row[1] === pieces[current] && row[2] === pieces[current]){
			winner = current
		}
	})

	let columns = [0, 1, 2]
  columns.forEach(column =>{
    if (board[0][column] === pieces[current] && board[1][column] === pieces[current] && board[2][column] === pieces[current]){
    	winner = current
    }
  })

  if (board[0][0] ===  pieces[current] && board[1, 1] === pieces[current] && board[2, 2] === pieces[current]){
  	winner = current
  }

  if (board[0][2] ===  pieces[current] && board[1, 1] === pieces[current] && board[0, 2] === pieces[current]){
  	winner = current
  }

  if (winner){
  	return true
  }
  return false
}

const play = function(){

	var board = '[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]'
	var boardArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	var currentPlayer = '1'
	var turns = 0
	var winner 


	console.log('Let\'s play tic-tac-toe! Here is the board:\n' + board)
	console.log('Numbers 1-9 on the board represent unclaimed spaces. Once a space is claimed it will replaced with an "X" or an "O". You can claim a space by typing in the correspopnding number.')


	while(turns <= 9 || !winner){
		turn(currentPlayer)
		if (turns >= 5){
			let win = checkBoard(currentPlayer, boardArr)
			if (win){
				winner = currentPlayer
			}
		}
	}

	let again = prompt('Player ' + winner + ' won! Type "again" to play again or "bye" to end the game')
	if (again === 'again'){
		play()
	} else {
		console.log('Bye!')
	}

}

play()