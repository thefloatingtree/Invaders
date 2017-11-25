function scoreManager () {
    this.multiplier = 100;

    this.update = function() {
        this.interval = 10;
    }

    this.addScore = function(mult) {
        gM.totalScore += 1 * this.multiplier * mult;
    }
}