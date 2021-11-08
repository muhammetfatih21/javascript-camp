/*--------------------------------1.soru=asal sayı bulma-----------------------------*/ 
// function asalHesapla(...asal){
//     let kontrol=0;
//     let sayac=0;
//     for(let i=0;i<asal.length;i++)
//     {
//         sayac=asal[i];
//         for(let j=2;j<sayac;j++)
//         {
//             if(sayac%j==0)
//             {
//                 kontrol++;
//                 break;
//             }
//         }

//         if(kontrol!=0)
//         {
//             console.log(sayac+" Sayısı Asal Değildir ");
//         }
//         else
//         {
//             console.log(sayac+" Sayısı Asaldır");
//         }
//         kontrol=0;
//     }
// }

// asalHesapla(3,4,5,6,7,8);

/*Soru-2) Arkadaş Sayı Hesaplama*/
// function arkSayiHesaplama(number1,number2)
// {   
//     let toplam1=0;
//     let toplam2=0;
    
//     for(let i=0;i<1000;i++)
//     {
//         if(number1%i==0)
//         {
//             if(number1==i)
//             {
//                 break;
//             }
//             else
//             {
//                 toplam1+=i;
//             }
//         }
    
//         if(number2%i==0)
//         {
//             if(number2==i)
//             {
//                 break;
//             }
//             else
//             {
//                 toplam2+=i;
//             }
//         }
//     }
    
//     if(toplam1==number2 && toplam2==number1)
//     {
//         console.log(toplam1);
//         console.log(toplam2);
//     }
// }

// arkSayiHesaplama(1184,1210);

/*3.soru-) 1000'e kadar olan mükemmel sayılar*/

// let mukoSayiToplam=0;

// for(let i=2;i<1000;i++)
// {

//     for(let j=0;j<i;j++)
//     {
//         if(i%j==0)
//         {
//             mukoSayiToplam+=j;
//         }
//     }

//     if(mukoSayiToplam===i)
//     {
//         console.log(mukoSayiToplam," Sayısı Mükemmel Sayıdır")
//     }
//     mukoSayiToplam=0;
// }


/*4.soru=1000'e kadar olan sayıları listeleyen program*/
// let kontrol=false;
// console.log(kontrol!=false);
// for(let i = 2;i<1000;i++)
// {
//     kontrol=false;
    
//     for (let j = 2; j<i;j++)
//     {
//         if(i%j==0)
//         {
//             kontrol=true;
//             break;
//         }
//     }

//     if(kontrol != false)
//     {
//         continue;
//     }
//     else
//     {
//         console.log(i);
//     }
// }


