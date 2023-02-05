let value = 0
let valueRound = 0

function delay(){
  value = (Math.random() * 4)
  valueRound = Math.round(value)
  return new Promise(function(resolve){
    setTimeout(resolve,valueRound*1000)
  });
}

function delayHour(){
  return new Promise(function(resolve){
    setTimeout(resolve,1000 * 60 * 60)
  });
}

let xpath = "/html/body/div[2]/div/div/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[3]/button[1]";

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

async function seguirStart(){
  for (let i = 1; i < 100; i++) {
    console.log('i', i)
    for (let j = ( i * 10 ) + 5; j <= ( i * 10 ) + 10; j++) {
      console.log('j', j)
      const button = document.querySelectorAll("button")[j]
      button.click()
      console.log(j)
      console.log(button)
      await delay();
      let element = getElementByXpath(xpath);
      if (!element) {
        throw new Error("Error: cannot find an element with XPath(" + xpath + ")");
      }
      element.click();
      await delay();
    }
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)
    await delayHour();
  }
}

seguirStart()
