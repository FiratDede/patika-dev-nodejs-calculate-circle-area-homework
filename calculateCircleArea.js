if(process.argv.length<3){
    return
}
let circleRadius=(process.argv[2])*1;
let area=Math.PI*circleRadius*circleRadius;
console.log("Yarıçapı "+circleRadius+" olan dairenin alanı: "+area);
