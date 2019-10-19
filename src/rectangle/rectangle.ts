export interface Coordinates {
    x: number,
    y: number
}

/**
 * Given a point with coordinates(x,y) determine if the point lies in the rectangle.
 * @param bottomLeft {x, y}
 * @param topRight {x, y}
 * @param position {x, y}
 */
export function isPointInRectangle(bottomLeft: Coordinates, topRight: Coordinates, position: Coordinates): boolean {
    if(position.x > bottomLeft.x && position.x < topRight.x && position.y > bottomLeft.y 
        && position.y < topRight.y ){
            return true;
    }
    return false;
}