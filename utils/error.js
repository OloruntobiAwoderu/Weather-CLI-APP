module.exports = (message, exit)  => {
    console.error(message);
    exit && Process.exit(1);
    
}