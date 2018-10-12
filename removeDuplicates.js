// 数组去重
function delMore(arr){
    console.log(arr.sort(function (a,b) {return a-b}))
    var a = [];
    for(var i=0;i<arr.length;i++){
        var isExit = 0;
        if(a.length==0){
            a.push(arr[i]);
        }
        for(var j=0;j<a.length;j++){
            if(arr[i] == a[j]){
                isExit = 1;
            }
        }
        if(!isExit)a.push(arr[i]);
    }
    return(a.sort(function (a,b) {return a-b}));
}
var s = ["dsasfds","s","fsdfsd","s","dsasfds"];
console.log(delMore(s));
