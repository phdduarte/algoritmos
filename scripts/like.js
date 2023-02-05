var value = 0
var valueRound = 0

function delay(){
  value = (Math.random() * 4)
  valueRound = Math.round(value)
  return new Promise(function(resolve){
    setTimeout(resolve,valueRound*1000)
  });
}

async function myAsyncFunction(){
  for (var i = 0; i < 1000; i++) {
    const button = document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a')[0]
    button.click()
    console.log(i)
    await delay();
  }
}

myAsyncFunction()

