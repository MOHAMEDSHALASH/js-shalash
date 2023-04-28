// LOADING 
let loading=document.getElementById('loading');
window.onload=()=>{
    loading.style.display="none"
}
// =====================================================================
// search show => search
document.querySelector('.icon-search').addEventListener('click',()=>{
    document.querySelector('.searchInput').classList.toggle('searchInput-show')
    document.querySelector('.searchInput').focus();
})
// search
function search(){
    let searchbar=document.querySelector('.searchInput').value.toUpperCase();
    let product=document.querySelectorAll('main .container');
    let productName=document.querySelectorAll('main .container .title h4');
    for(i=0; i<productName.length;i++){
        if(productName[i].innerHTML.toUpperCase().indexOf(searchbar)>=0){
            product[i].style.display="block";
        }
        else{
            product[i].style.display="none";
        }
    }
}
search()
// =====================================================================
let lang="en"
// btn copy
let btnCopy=document.querySelectorAll('.btnCopy');
btnCopy.forEach(btn =>{
    btn.addEventListener('click',(eo)=>{
        let textValue=eo.target.parentElement.querySelector('textarea');
        textValue.select();
        navigator.clipboard.writeText(textValue.value)
        if(lang=="en"){
            btn.innerHTML="copied"
            setTimeout(()=>{
                btn.innerHTML="copy";
            },5000)
        }
        else{
            btn.innerHTML="تم النسخ"
            setTimeout(()=>{
                btn.innerHTML="نسخ";
            },5000)
        }
    })
})
// ====================================================================================
// btn informatio
let btnInformation=document.querySelectorAll('.more-info');
let closeInformation=document.querySelectorAll('.close');
console.log(closeInformation)
btnInformation.forEach(btn=>{
    btn.addEventListener('click',(eo)=>{
        let more=eo.target.parentElement.parentElement.parentElement.querySelector('.more');
        more.classList.add('more-show')
    })
})
closeInformation.forEach(btn=>{
    btn.addEventListener('click',(eo)=>{
        let more=eo.target.parentElement;
        let moreAudio=eo.target.parentElement.querySelector('audio');
        more.classList.remove('more-show')
        moreAudio.pause();
    })
})

// ====================================================================================
let langBtn=document.getElementById('lang');
let body=document.querySelector('body')
let searchInput=document.querySelector('header input');
let logo=document.querySelector('header h3');
let title=document.querySelectorAll('.title');
let t1=document.querySelector('.t1 h4');
let t2=document.querySelector('.t2 h4');
let t3=document.querySelector('.t3 h4');
let t4=document.querySelector('.t4 h4');
let t5=document.querySelector('.t5 h4');
let t6=document.querySelector('.t6 h4');
let t7=document.querySelector('.t7 h4');
let footer=document.querySelector('footer p');
langBtn.onclick=()=>{
    if(lang=="en"){
        lang="ar"
        langBtn.innerHTML="AR"
        loading.style.display="flex";
        setTimeout(()=>{
            loading.style.display="none";
        },1500)
        body.style.direction="rtl"
        title.forEach((e)=>{
            e.classList.add("title-ar")
        })
        btnCopy.forEach((e)=>{
            e.classList.add("btnCopy-lang");
            e.innerHTML="نسخ";
        })
        btnInformation.forEach((btn)=>{
            btn.classList.add("more-info-lang");
        })
        // ---- translete to arabic
        searchInput.placeholder="انقر للبحث";
        logo.innerHTML="أكواد اسكربت";
        t1.innerHTML="عندما تريد اخفاء أو اظهار شيئا ما : ";
        t2.innerHTML="جعل الكتابه تلقائيه ( يكتب لوحدو ) :";
        t3.innerHTML="عند النزول والطلوع في الشاشه ( الاسكرول ) :";
        t4.innerHTML=" اضافه أو ازاله اتربيوت : ";
        t5.innerHTML="استخدامات العنصر on :";
        t6.innerHTML="البحث في الموقع : ";
        t7.innerHTML="استخدام المايك - الميكرفون - التسجيل الصوتي : ";
        footer.innerHTML=`صنع بواسطه <span>محمد</span> شلش ...`
    }
    else{
        lang="en"
        langBtn.innerHTML="EN"
        loading.style.display="flex";
        setTimeout(()=>{
            loading.style.display="none";
        },1500)
        body.style.direction="ltr"
        title.forEach((e)=>{
            e.classList.remove("title-ar");
        })
        btnCopy.forEach((e)=>{
            e.classList.remove("btnCopy-lang");
            e.innerHTML="copy";
        })
        btnInformation.forEach((btn)=>{
            btn.classList.remove("more-info-lang");
        })
        // ---- translete to english
        searchInput.placeholder="click to search";
        logo.innerHTML="JS Coding";
        t1.innerHTML='When need click in any item to show OR hide something :';
        t2.innerHTML="When need to make document auto write in page :";
        t3.innerHTML="When scroll in page :";
        t4.innerHTML="TO set OR remove attribute :";
        t5.innerHTML="Element “ on ” that I use :";
        t6.innerHTML="Search in your web site :";
        t7.innerHTML="Use MIC : the record ! -";
        footer.innerHTML="Made with <span>MOHAMED</span> SHALASH ..."
    }
}
