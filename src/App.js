function App() {

    const name = 'Brad'
    const x = true

    return (
        <div className ='App'>
            <h1>Hello From React !</h1>
            <h2>Hello {x ? 'Yes' : 'No' }</h2>
        </div>
    );
}

export default App