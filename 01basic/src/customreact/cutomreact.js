function cutomrender(reatcelement,Container) //  kisko karrha hu  or  kaha kar rha hu
 {
  const domElement = document.createElement(reatcelement.type)
  domElement.innerHTML = reatcelement.children
  domElement.set
}
const reatcelement = {
  type: 'a',
  props: { 
    href: 'https://www.google.com/',
    target: '_blank'
  },
  children: 'click me to  visit '
}
const mainContainer = document.querySelector('#root')
customrender(reatcelement,mainContainer)