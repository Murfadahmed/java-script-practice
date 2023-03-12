// const brothers = ["shani","shabbir","muzzammil","muddassir","Ali","mursaleen","talha","yasir","murfad","fazal","huzaifa","sualeh","hassan"]

const houses = [];
houses[0]="murfad";
houses[1]="fazal";
houses[2]="huzaifa";
houses[3]="marayam";
houses[4]="hifazah";
console.log(houses[0])
console.log(houses)
houses.pop([])
console.log(houses)
houses.push("hafsa shezadi")
console.log(houses)
houses.shift()
console.log(houses)
houses.unshift("malik")
console.log(houses)
houses.splice(4,4,"murfad","malik","ahemd","mustafa ","kamran")
console.log(houses) 
const num = [1,2,3,4,5,6,7,8,9,0]
console.log(num)
num.splice(6,0,"malik","murfad")
console.log(num)
num.splice(3,5)
console.log(num)
const hourse = num.slice(2,3)

console.log(hourse)
const mila =houses.slice(3,6,5)
console.log(mila)
