import { isPointInRectangle, Coordinates } from './rectangle';

test(('shouldReturnTrue'), () => {
    const bottomLeft: Coordinates  = { x:0, y:0}
    const topRight: Coordinates = {x:10, y:8}
    const inputPosition = {x:5,y:5}

    const result:boolean = isPointInRectangle(bottomLeft, topRight, inputPosition)
    expect(result).toBe(true);
})

test(('shouldReturnFalse'), () => {
    const bottomLeft: Coordinates  = { x:0, y:0}
    const topRight: Coordinates = {x:10, y:8}
    const inputPosition = {x:-1,y:5}

    const result:boolean = isPointInRectangle(bottomLeft, topRight, inputPosition)
    expect(result).toBe(false);
})