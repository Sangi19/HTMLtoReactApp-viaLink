function DisplayFunction(){
    return(
        <h1>HelloWorld</h1>
        )
}

const demoContainer=document.getElementById('demoContainer')
const root=ReactDOM.createRoot(demoContainer)
root.render(<DisplayFunction />)