import {Schema,model,Document} from "mongoose"
export interface phlebo extends Document{
    pname:String,
    pid:String,
    shift:"morning | afternoon | Evening",
    avalaible:boolean,
    samplecreated:Date
    sampleupdated:Date

}
const PhleboSchema=new Schema<phlebo>({
    pname:{type:String,required:true},
    pid:{type:String,required:true},
    shift:{type:String,enum:["morning","afternoon","shift"],required:true},
})