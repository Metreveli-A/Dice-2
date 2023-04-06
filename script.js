function sleep(){

    return  new Promise(resolve=>setTimeout(resolve,1000))
   
  }
  console.log('ფუნქცია იწყება')
  async function rollDice(){
  for(let i = 1; i <= 6; i++){
    let x = Math.floor(Math.random()*6 + 1)
    let y = Math.floor(Math.random()*6 + 1)
  
    let kamateli1 = document.getElementsByClassName('box1')
    let kamateli2 = document.getElementsByClassName('box2')
  
    kamateli1[0].innerHTML = '<div><p>'+x+'</p></div>'
    kamateli2[0].innerHTML =  '<div><p>'+y+'</p></div>'
    await sleep()
     console.log(x,y)
    //  console.log('შესრულდა ბიჯი')     
  }
  console.log('ფუნქცია დასრულდა')
  }
  console.log('ფუნქცია არ არის დასრულებული!!!!')
  // rollDice()