import { MyUtils } from "./utils/module.js";

export class Memory{

    MemoryData;

    async ProcessMemory(){
    
        const CurrUtil= new MyUtils();
        CurrUtil.StartToggle();
        CurrUtil.StartChange();
        this.MemoryData=await CurrUtil.LoadBackend('/Captures.json');
        this.#Make_Memory();
    
    };

    #Make_Memory(){

        let MainMemory='';
        let TempMemory;

        this.MemoryData.forEach(
            (Memory) => {
                if(Memory.type==='vid'){
                    TempMemory=`

                        <div class="Memory Profile flex col fly_hover">

                            <p class="sub_text">${Memory.memory}</p>

                            <div class="Memory_content Profile_Photo">
                                    <video controls><source src="${Memory.content}">Sorry Your Browser Doesn't Support This Clip.</source></video>
                            </div>

                        </div>
                
                    `;
                }
                else if(Memory.type==='ph'){
                    TempMemory=`

                        <div class="Memory Profile flex col fly_hover">

                            <p class="sub_text">${Memory.memory}</p>

                            <div class="Memory_content Profile_Photo">
                                <img src="${Memory.content}">
                            </div>

                        </div>
                
                    `;
                }
                
                MainMemory+=TempMemory;
            }
        );

        document.querySelector('.Profile_div').innerHTML=MainMemory;
    };

};