const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
socket.onmessage = function(event) {
    var messageObject = JSON.parse(event.data);
    var tradeDiv = document.getElementById("trades")
    tradeDiv.append(messageObject.p + '\n')
}