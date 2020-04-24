import Header from './components/Header'
// import User from './components/User'
import List from './components/List'

async function App() {
    const template = document.createElement('template')
    template.innerHTML = `
        <div class="container">
            ${Header()}
            <div id="card-list">
                ${await List()}
            </div>
        </div>
    `
    // Return a new node from template
    return template.content.cloneNode(true)
}

export default App;