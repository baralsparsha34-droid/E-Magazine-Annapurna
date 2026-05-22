import { MyUtils } from "./utils/module.js";

export class Magazine_Loader{

    async ProcessMagazine(){

        const CurrUtil= new MyUtils();
        CurrUtil.StartToggle();
        CurrUtil.StartChange();
        this.MagazineData=await CurrUtil.LoadBackend('/Magazine.json')
        this.#Make_Magzine();

    };

    #Make_Magzine(MagazineSelector=false){

        let MainMagazine='';
        let tempMagazine='';

        this.MagazineData.forEach(
            (Color) => {

                if(MagazineSelector===Color.color){

                    tempMagazine=`

                    <div class="Magazine_Content Profile flex col selected" id="${Color.color}">
                        <p class="Magazine_text main_text">${Color.color}-Wall Magazine</p>
                        <div class="Profile_Photo Magazine_Photo flex">
                            <div class="Color_Magazine_Photo">
                                <img src="${Color.Photo}" alt="${Color.color}-Wall Magazine Photo">
                            </div>
                            <div class="Color_Captain_Photo">
                                <img src="${Color.Captain.Photo}" alt="${Color.Captain.name} Photo">
                            </div>
                        </div>
                        <p class="sub_text">${Color.Captain.name}</p>
                    </div>`;
                    MainMagazine+=tempMagazine;
                    return;

                }
                else if(MagazineSelector===false || MagazineSelector==='All'){

                    tempMagazine=`

                    <div class="Profile flex col fly_hover" id="${Color.color}">
                        <p class="Magazine_text main_text">${Color.color}-Wall Magazine</p>
                        <div class="Profile_Photo Magazine_Photo flex">
                            <div class="Color_Magazine_Photo">
                                <img src="${Color.Photo}" alt="${Color.color}-Wall Magazine Photo">
                            </div>
                            <div class="Color_Captain_Photo">
                                <img src="${Color.Captain.Photo}" alt="${Color.Captain.name} Photo">
                            </div>
                        </div>
                        <p class="sub_text">${Color.Captain.name}</p>
                    </div>`;
                    MainMagazine+=tempMagazine;

                };
            }
        );

        document.querySelector('.Magazine_Content_div').innerHTML=MainMagazine;
        
        document.querySelectorAll('.Magazine_selector').forEach(
            (Selector)=>{
                Selector.addEventListener('click',()=>{
                    {
                        this.#Make_Magzine(Selector.name);
                    }
                })
            }
        );
        
    };

};