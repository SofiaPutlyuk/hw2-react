const Message = props => (
    <div>
    <h3>{props.text}</h3>
    <button onClick={() => SayWeather(props.newText)}>Click me</button>
    </div>
)
function SayWeather(text) {
    alert(text)
}

export default Message;