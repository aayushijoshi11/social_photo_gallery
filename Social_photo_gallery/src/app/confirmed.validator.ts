import { ReturnStatement } from "@angular/compiler";
import { FormControlName,FormGroup, Validators} from "@angular/forms";
import { getMatFormFieldMissingControlError } from "@angular/material/form-field";
export function Confirmvalidator(controlNAme:string,matchingcontrolName:string)
{
    return (FormGroup:FormGroup)=>{
        const control=FormGroup.controls[controlNAme];
        const matchingcontrol= FormGroup.controls[matchingcontrolName];
        if(matchingcontrol.errors &&! matchingcontrol.errors['Confirmvalidator'])
{
    return

}
if (control.value!== matchingcontrol.value){
    matchingcontrol.setErrors({Confirmvalidator:true})

}
else
{
matchingcontrol.setErrors(null);


}
}
}
