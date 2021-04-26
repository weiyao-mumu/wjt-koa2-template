

function mongoose(flag) {
    //如果flag是true,证明允许进行mongoose的连接(开启数据库);
    if(flag=== true){
        require('./init/init');
    }else {
        return;
    }
}

module.exports = mongoose;