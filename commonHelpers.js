import"./assets/styles-d2033c0a.js";import{f as m,i as y}from"./assets/vendor-77e16229.js";const d=document.querySelector("input"),n=document.querySelector("button");n.disabled=!0;let a;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){S(e)}};let f=m(d,h);function S(e){e[0]>new Date?n.disabled=!1:(n.disabled=!0,y.error({timeout:3e3,message:"Please choose a date in the future"}))}function o(e){return String(e).padStart(2,"0")}function q(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:i,seconds:l}}n.addEventListener("click",()=>{const e=f.selectedDates[0];n.disabled=!0,d.disabled=!0,clearInterval(a),a=setInterval(()=>{const r=e-new Date;if(r<=0){clearInterval(a),document.querySelector("[data-days]").textContent="00",document.querySelector("[data-hours]").textContent="00",document.querySelector("[data-minutes]").textContent="00",document.querySelector("[data-seconds]").textContent="00";return}const t=q(r);document.querySelector("[data-days]").textContent=o(t.days),document.querySelector("[data-hours]").textContent=o(t.hours),document.querySelector("[data-minutes]").textContent=o(t.minutes),document.querySelector("[data-seconds]").textContent=o(t.seconds)},1e3)});
//# sourceMappingURL=commonHelpers.js.map