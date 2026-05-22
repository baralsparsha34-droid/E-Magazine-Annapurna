import { MyUtils } from "./utils/module.js";

export class Welcome{

    #AddWelcomListener=()=>document.querySelectorAll('.Info_Content').forEach(
            (Info,_)=>Info.addEventListener(
                'click',()=>window.location=Info.id
            )
        );
    
    ProcessWelcome(){
        const CurrUtil= new MyUtils();
        CurrUtil.StartPreLoader();
        CurrUtil.StartToggle();
        CurrUtil.StartChange();
        this.#AddWelcomListener();
        
    };

};