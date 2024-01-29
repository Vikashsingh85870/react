function customRender(reactElement,maincontainer){
    const domElement =document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for (const key in reactElement.props) {
       if(key==='children') continue;
       domElement.setAttribute(key,reactElement.props[key]);
    }
    maincontainer.appendChild(domElement)
}
const reactElement= {
    type :'a',
    props:{
        href:'https://google.com',
        target :'_blank'
    },
    children :'click me to visit google'
}
const maincontainer= document.querySelector('.root');
customRender(reactElement,maincontainer);