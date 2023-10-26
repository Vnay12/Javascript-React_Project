
// We created custom object called reactElemet
// Note : This is how react ( bable a react transcripter which  reads the function as html component when we pass) It creates a branch of that tag and read like this under the hood 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
}

// we have to make a custom render in place of 
// ReactDOM.createRoot(document.getElementById('root')).render() 

function customRender(reactElement, custom) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    custom.appendChild(domElement)
}

// we created a customRender function where have to put all the attribute manually. now we will create a function where we will loop for all the props 

function customRender2(reactElement, custom) {
    const domElement2 = document.createElement(reactElement.type)
    domElement2.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement2.setAttribute(prop, reactElement.props[prop])
    }
    custom.appendChild(domElement2)
}



// we created a custom variable which will fetch root 
const custom = document.querySelector('#root')


// now we have to render the function into the root

customRender(reactElement, custom)
customRender2(reactElement, custom)