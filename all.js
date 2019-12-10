var aaa = new Vue({
el:'.app',
data:{
    newlist:'a',
    lists:[],
},
methods:{
    addlist:function(newlist){
        this.lists.push({content:newlist,complete:false});
    },
    del:function(newlist){
        this.lists.splice(this.lists.indexOf(newlist),1)
    }
}
})