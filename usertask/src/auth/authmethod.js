const totalVipColoumn= 5;
const seats =  []
for(let i=1; i<=totalVipColoumn; i++){
  const row = []
    for(let j = 1; j <= totalVipColoumn; j++){
      row.push(j)
    }
    seats.push(row)
}
for(let row of seats){
  console.log(row.join(' '))
}
