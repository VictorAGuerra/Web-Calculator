var curmode = ''

var total = 0

function clearInput() {
    document.getElementById('result').value = 0
}

function typeKey(key) {
    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = key
    }
    else if (key == '.' && document.getElementById('result').value.endsWith('.')){}
    else{
        document.getElementById('result').value += key
    }
}

function equals(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}