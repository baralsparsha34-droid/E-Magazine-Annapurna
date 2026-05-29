let FileOutput={};

function ToggleByEventAndSelector(TargetQuerySelector,Event,EventElementQuerySelector,Toggler){

    document.querySelector(EventElementQuerySelector).addEventListener(Event,
        ()=>document.querySelector(TargetQuerySelector).classList.toggle(Toggler)
    );

};

function PreLoaderBySecondsAndSelector(LoadingElementSelector,LoadedElementSelector,ActionSelector,Time){

    document.querySelector(LoadedElementSelector).classList.add(ActionSelector);
    setTimeout(()=>{
        document.querySelector(LoadedElementSelector).classList.remove(ActionSelector);
        document.querySelector(LoadingElementSelector).classList.add(ActionSelector);
    },Time*1000);

};

function ChangeElementByHeightAndSelector(targetElementSelector,ActionSelector,TargetHeight){
    window.addEventListener(
        'scroll',()=>{
            if(window.scrollY>=TargetHeight){
                document.querySelector(targetElementSelector).classList.add(ActionSelector);
            }else{
                document.querySelector(targetElementSelector).classList.remove(ActionSelector);
            }
        }
    );
};

async function LoadFromBackend(FileAddress){
    return fetch(`/Backend/${FileAddress}`).then(
        (FileJSON)=>FileJSON.json()
        ).then(FileData=>FileOutput=FileData);
};

export class MyUtils{
    StartToggle=()=>new ToggleByEventAndSelector('.nav_list','click','.hamburger_icon','shown');
    StartChange=()=>{
        new ChangeElementByHeightAndSelector('.main_header','scrolled',window.innerHeight);
        new ChangeElementByHeightAndSelector('#bottom-to-top','scrolled',window.innerHeight);
        document.getElementById('bottom-to-top').addEventListener('click',()=> window.scrollTo(0,0));
        if (document.getElementById('top-to-next_vh')){document.getElementById('top-to-next_vh').addEventListener('click',()=> window.scrollTo(0,window.innerHeight))};
    };
    StartPreLoader=()=>new PreLoaderBySecondsAndSelector('.main_loader','.Main_Content_div','hidden',1.7);
    LoadBackend=async(FileAddress)=>{
        await LoadFromBackend(FileAddress);
        return FileOutput;
    };
};