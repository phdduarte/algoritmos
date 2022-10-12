var value = 0
var valueRound = 0

function delay(){
  value = (Math.random() * 4)
  valueRound = Math.round(value)
  return new Promise(function(resolve){
    setTimeout(resolve,valueRound*1000)
  });
}

async function seguirStart(){
  for (var i = 21; i < 100; i++) {
    const button = document.querySelectorAll("button")[i]
    button.click()
    console.log(i)
    console.log(button)
    await delay();
  }
}

seguirStart()
