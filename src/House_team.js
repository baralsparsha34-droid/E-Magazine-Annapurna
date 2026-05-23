import { MyUtils } from "./utils/module.js";
export class House_Team{
    HouseTeamData;
    async ProcessHouseTeam(){
        const CurrUtil= new MyUtils();
        CurrUtil.StartToggle();
        CurrUtil.StartChange();
        this.HouseTeamData=await CurrUtil.LoadBackend('/Team.json')
        this.#MakeHouseTeam();
    };

    #MakeHouseTeam(){

        let MainHouseTeam='';

        this.HouseTeamData.forEach(
            (Team) => {
                const TempHouseTeam=`
                    <div class="Profile flex col fly_hover">
                        <p class="main_text">${Team.title}</p>
                        <div class="Profile_Photo">
                            <img src="${Team.image}" alt="${Team.name} Photo"loading="lazy"/>
                        </div>
                        <p class="sub_text">${Team.name}</p>
                    </div>
                
                `;
                MainHouseTeam+=TempHouseTeam;
            }
        );

        document.querySelector('.Profile_div').innerHTML=MainHouseTeam;


    };
};