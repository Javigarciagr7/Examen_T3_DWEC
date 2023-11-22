import {ctx, width, height} from './canvas_setup.js';
import {Ball, random, randomRGB, balls} from './ballclass.js';

// 3º POSIBLE ERROR, aumentar el número de bolas
while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB,
        size
    );

    balls.push(ball);
}

//4º ERROR, En la función loop, modificar los valores rgba para modificar el color verde que venía por defecto
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball == otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}

loop();