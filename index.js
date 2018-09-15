function ellipseCurve(a, b) {
    return function y(x) {
        return Math.sqrt(x * x * x + a * x + b)
    }
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const [xOffset, yOffset] = [canvas.width / 2, canvas.height / 2]
const zoom = 100

function drawDot(ctx, x, y) {
    if (isNaN(y)) return
    ctx.fillRect((x * zoom) + xOffset, (y * zoom) + yOffset, 2, 2)
    ctx.fillRect((x * zoom) + xOffset, -(y * zoom) + yOffset, 2, 2)
}

const curve1 = ellipseCurve(-1, 0)


for (let x = -2; x < 2; x += 0.01) {
    const y = curve1(x)
    drawDot(ctx, x, y)
}
