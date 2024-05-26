function solve(radius,height) {
    let pi=Math.PI;
    let volume=(pi*radius*radius*height)/3;
    let totalSurfaceArea=pi*radius*radius+pi*radius*Math.sqrt(radius*radius+height*height);
    console.log(`volume = ${volume.toFixed(4)}`);  
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);  
}
solve(3,

    5);