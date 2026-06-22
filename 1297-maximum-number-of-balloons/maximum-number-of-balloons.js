const maxNumberOfBalloons = (t, f = _.countBy(t)) => Math.min(
    f.b | 0, f.a | 0, f.l >> 1, f.o >> 1, f.n | 0
);