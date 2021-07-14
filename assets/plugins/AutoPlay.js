function AutoPlay() {
}

AutoPlay.prototype.run = function(player){
  player.mute();
  setTimeout(player.play(),300);
};

export default AutoPlay