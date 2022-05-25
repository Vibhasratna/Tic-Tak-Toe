let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)


let currentPlayer = "X"


let winning = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

function winner(){

    winning.forEach(function(combination){

        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)

        if(check){

           highLightCells(combination)
        }
    })

}

function highLightCells(combination){

    combination.forEach(function(idx){

        cells[idx].classList.add("high")
    })
}

cells.forEach(function(cell){

    cell.addEventListener('click', function(){


        if( cell.innerText.trim() != "")return

        cell.innerText = currentPlayer
        winner()
        currentPlayer = currentPlayer == "X"? "O" : "X"
    })
})
