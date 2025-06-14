//generics repository
class DataStore<T extends {id:number}>{
    private  item:T | null=null;
    add(obj:T):void{
        this.item={...obj};
    }
    
}