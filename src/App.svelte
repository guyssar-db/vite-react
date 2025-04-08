<script>
  import html2canvas from "html2canvas";
  import { onMount, onDestroy } from "svelte";
  import BTNcontrol from "./lib/btncontrol.svelte";
  import CardSelect from "./lib/WSelect.svelte";
  import Setting from "./lib/setting.svelte";
  import Infocard from "./lib/Infocard.svelte";
  import KeyPage from "./lib/keywordPage.svelte";
  import { effect } from './store.js';
  
  let IDcardType = document.getElementById('cardType');
  let imageSrc = "";
  let selectedValue = "m";
  let selectedValueSpell = "s";
  let selectedValueDualSpell = "ds";
  let selectedValueImpact = "ip";
  let selectedValueImpactMonster = "im";
  let selectedWorldMain = "aw";
  let selectedWorldL = "awl";
  let selectedWorldR = "awr";
  let dpim;
  let imageContainer;
  let translateX = 0,
    translateY = 0;
  let scale = 1;
  let isDragging = false;
  let initialMouseX, initialMouseY;
  let startDistance = null;
  let isLocked = true;
  let power = "1000";
  let cri = "1";
  let def = "1000";
  let size = "0";
  let att = "คุณลักษณะ";
  let name = "ชื่อการ์ด";
  let set = "set01/0001";
  let illust = "illust";
  let flavor  = "flavor";
  let lineCount  = 0;
  let effcolor = "text-white";
  let effectX = "26";
  let effectY = "180";
  let effectText = "";
  
  let ischaos = false;
  let isHdemon = false;
  let isSetting = false;
  let isReB = false;  
  let iskeyUI = false;
  
  let NameScalex;
  let NameMove;
  let AttScalex;
  let AttMove;

  export let countE;

  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                   Update info position
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

  function monname(){
    if (selectedValue === "m"){
      // console.log(`names${selectedWorldMain}`);
      return `names${selectedWorldMain}`;
    }
    else if (selectedValue === "dm"){
      return `namesdual`;
    }
  }
  function monatt(){
    if (selectedValue === "m"){

      return `att${selectedWorldMain}`;
    }
    else if (selectedValue === "dm"){
      return `attdual`;

    }
    // console.log(`att${selectedWorldMain}`);
  }

  function monp(){
    if (selectedValue === "m"){
      return `${selectedWorldMain}p`;
    }
    else if (selectedValue === "dm"){
      return `${selectedWorldL}p`;
    }
    // console.log(`${selectedWorldMain}p`);
  }

  function monc(){
    if (selectedValue === "m"){
      return `${selectedWorldMain}c`;
    }
    else if (selectedValue === "dm"){
      return `${selectedWorldL}c`;
    }
  }
  function mond(){
    if (selectedValue === "m"){
      return `${selectedWorldMain}d`;
    }
    else if (selectedValue === "dm"){
      return `${selectedWorldL}d`;
    }
  }
  function mons(){
    if (selectedValue === "m"){
      return `size${selectedWorldMain}`;
    }
    else if (selectedValue === "dm"){
      return `size${selectedWorldL}`;
    }
  }


  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                          on/off
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

  function togglechaos() {
    ischaos = !ischaos;
  }
  function toggleHdemon() {
    isHdemon = !isHdemon;
  }
  function toggleSetting() {
    isSetting = !isSetting;
  }
  function toggleReB() {
    isReB = !isReB;
  }
  function keyUI() {
    iskeyUI = !iskeyUI;
  }

  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                     funtion upload :)
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          imageSrc = e.target.result;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                     move image import
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  function startDrag(event) {
  if (isLocked) return;
  event.preventDefault(); 
  isDragging = true;
  const evt = event.touches ? event.touches[0] : event;
  initialMouseX = evt.clientX;
  initialMouseY = evt.clientY;
  imageContainer.style.cursor = "grabbing";
}

  function drag(event) {
    if (!isDragging || isLocked) return;
    if(imageSrc){
    event.preventDefault(); 
    }

    const evt = event.touches ? event.touches[0] : event;
    const deltaX = evt.clientX - initialMouseX;
    const deltaY = evt.clientY - initialMouseY;

    translateX += deltaX;
    translateY += deltaY;

    if(imageSrc){
    dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
    initialMouseX = evt.clientX;
    initialMouseY = evt.clientY;
  }

  function endDrag() {
    isDragging = false;
    imageContainer.style.cursor = "grab";
  }


  function zoom(event) {
    if (isLocked) return;
    event.preventDefault();
    const scaleFactor = 1.1;

    if (event.deltaY) {
      scale = event.deltaY < 0 ? scale * scaleFactor : scale / scaleFactor;
    } else if (event.touches && event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (startDistance) {
        scale *= distance / startDistance;
      }
      startDistance = distance;
    }

    if(imageSrc){
      dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
  }
  function toggleLock() {
    isLocked = !isLocked;
  }

  onMount(() => {
    imageContainer.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", endDrag);

    imageContainer.addEventListener("touchstart", startDrag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", endDrag);

    imageContainer.addEventListener("wheel", zoom);

    imageContainer.addEventListener("touchmove", (event) => {
      if (event.touches.length === 2) {
        zoom(event);
      }
    });

    document.addEventListener("touchend", (event) => {
      if (event.touches.length < 2) {
        startDistance = null;
      }
    });
  });

  onDestroy(() => {
    imageContainer.removeEventListener("mousedown", startDrag);
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", endDrag);

    imageContainer.removeEventListener("touchstart", startDrag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", endDrag);

    imageContainer.removeEventListener("wheel", zoom);
  });

  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                  reset img position
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

  function resetPosition() {
    translateX = 0;
    translateY = 0;
    scale = 1;
    if (imageSrc){
      dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
  }

  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                      Function download
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  function handleDownload() {
    const textPV = document.getElementById("textPV");
  const textS = document.getElementById("sizenm");
  const textA = document.getElementById("atknm");
  const textD = document.getElementById("defnm");
  const textE = document.getElementById("nub_");
  const textN = document.getElementById("name");
  const textAt = document.getElementById("att");
  const SE = document.getElementById("se");
  const spankeys = document.querySelectorAll('#spankey');
  const atknm = document.getElementById("atknm");
  const crinm = document.getElementById("crinm");
  const defnm = document.getElementById("defnm");
  const custom2 = document.getElementById("custom2");

  
  // change
  if (textPV) textPV.style.transform = "translateX(-13px)";
  if (textA) textA.style.transform = "translateY(5px)";
  if (textD) textD.style.transform = "translateY(-5px)";
  if (textS) textS.style.transform = "translate(12px,-9px)";
  if (textE) textE.style.transform = "translate(12px,-1.5px)";
  if (textN) textN.style.transform = "translate(12px,-12.5px)";
  if (textAt) textAt.style.transform = "translate(12px,-10.5px)";
  if (SE) SE.style.transform = "translate(2px,-5.5px)";
  spankeys.forEach((spankey) => {
    if (spankey instanceof HTMLElement) {
      spankey.style.transform = "translate(0px, 8px)";
    }
  });
  custom2.style.transform = "translate(12px,-10.5px)";
  if (selectedWorldMain == 'du' || selectedWorldL == 'dul'){
    atknm.style.transform = "translate(-5px,0)";
    crinm.style.transform = "translate(-10px,0)";
    defnm.style.transform = "translate(-5px,0)";
  }
  if (selectedWorldMain == 'dg' || selectedWorldL == 'dgl'){
    atknm.style.transform = "translate(1px,-3px)";
    crinm.style.transform = "translate(-4px,-3px)";
    defnm.style.transform = "translate(1px,-2px)";
  }
  if (selectedWorldMain == 'dr' || selectedWorldL == 'drl'){
    atknm.style.transform = "translate(1px,-3px)";
    crinm.style.transform = "translate(-4px,-3px)";
    defnm.style.transform = "translate(1px,-2px)";
  }
  if (selectedWorldMain == 'kn' || selectedWorldL == 'knl'){
    atknm.style.transform = "translate(-4.5px,-3px)";
    crinm.style.transform = "translate(-15px,-3px)";
    defnm.style.transform = "translate(-4.5px,-2px)";
  }
  if (selectedWorldMain == 'lw' || selectedWorldL == 'lwl'){
    atknm.style.transform = "translate(-4.5px,-3px)";
    crinm.style.transform = "translate(-14px,-3px)";
    defnm.style.transform = "translate(-4.5px,-2px)";
  }
  if (selectedWorldMain == 'ls' || selectedWorldL == 'lsl'){
    atknm.style.transform = "translate(-5.5px,-0)";
    crinm.style.transform = "translate(-15px,-0)";
    defnm.style.transform = "translate(-5.5px,-0)";
  }
  if (selectedWorldMain == 'mw' || selectedWorldL == 'mwl'){
    atknm.style.transform = "translate(-5.5px,-0)";
    crinm.style.transform = "translate(-15px,-0)";
    defnm.style.transform = "translate(-5.5px,-0)";
  }
  if (selectedWorldMain == 'st_c' || selectedWorldL == 'st_cl'){
    atknm.style.transform = "translate(5.5px,-0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(5.5px,-0)";
  }
  if (selectedWorldMain == 'st' || selectedWorldL == 'stl'){
    atknm.style.transform = "translate(0px,-0)";
    crinm.style.transform = "translate(-2,-0)";
    defnm.style.transform = "translate(0px,-0)";
  }
  if (selectedWorldMain == 'gr_c'){
    atknm.style.transform = "translate(5.5px,-0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(5.5px,-0)";
  }
  if (selectedWorldMain == 'gr'){
    atknm.style.transform = "translate(1px,-0)";
    crinm.style.transform = "translate(-3px,-0)";
    defnm.style.transform = "translate(1px,-0)";
  }
  if (selectedWorldMain == 'hw' || selectedWorldL == 'hwl' ){
    atknm.style.transform = "translate(3px,-0)";
    crinm.style.transform = "translate(-3px,-0)";
    defnm.style.transform = "translate(3px,-0)";
  }

  html2canvas(document.getElementById("img"), {
    scale: 6,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
    backgroundColor: null,
    useCORS: true
  }).then((canvas) => {
    const fileName = prompt("File name:", "name");
    if (fileName) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = fileName + ".png";
      link.click();
    }
    if (textPV) textPV.style.transform = "translateX(0px)";
    if (textA) textA.style.transform = "translateX(0px)";
    if (textD) textD.style.transform = "translateY(0px)";
    if (textS) textS.style.transform = "translate(0px)";
    if (textE) textE.style.transform = "translate(0px)";
    if (textN) textN.style.transform = "translate(0px)";
    if (textAt) textAt.style.transform = "translate(0px)";
    if (SE) SE.style.transform = "translate(0px)";
    spankeys.forEach((spankey) => {
      if (spankey instanceof HTMLElement) {
        spankey.style.transform = "translate(0px, 0px)";
      }
    });
    if (selectedWorldMain == 'du' || selectedWorldL == 'dul'){
      atknm.style.transform = "translate(-0,0)";
      crinm.style.transform = "translate(-0,0)";
      defnm.style.transform = "translate(-0,0)";
    }
    custom2.style.transform = "translate(0px)";

    if (selectedWorldMain == 'dg' || selectedWorldL == 'dgl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'kn' || selectedWorldL == 'knl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'lw' || selectedWorldL == 'lwl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'ls' || selectedWorldL == 'lsl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'mw' || selectedWorldL == 'mwl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'st_c' || selectedWorldL == 'st_cl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'dr' || selectedWorldL == 'drl'){
    atknm.style.transform = "translate0)";
    crinm.style.transform = "translate(0)";
    defnm.style.transform = "translate(0)";
  }
  if (selectedWorldMain == 'gr_c'){
    atknm.style.transform = "translate(0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(0)";
  }
  if (selectedWorldMain == 'gr'){
    atknm.style.transform = "translate(0)";
    crinm.style.transform = "translate(0)";
    defnm.style.transform = "translate(0)";
  }
  });
  }



  
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                  funtion update worlds
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

  function getM() {
    return `/assets/worlds/${selectedValue}${selectedWorldMain}.png`;
  }
  function getDML() {
    return `/assets/worlds/${selectedValue}${selectedWorldL}.png`;
  }
  function getDMR() {
    return `./assets/worlds/${selectedValue}${selectedWorldR}.png`;
  }
  function getS() {
    return `/assets/worlds/${selectedValueSpell}${selectedWorldMain}.png`;
  }
  function getDSL(){
    return `/assets/worlds/${selectedValueDualSpell}${selectedWorldL}.png`;
  }
  function getDSR(){
    return `/assets/worlds/dm${selectedWorldR}.png`;
  }
  function getIP() {
    return `/assets/worlds/${selectedValueImpact}${selectedWorldMain}.png`;
  }
  function getIM() {
    return `/assets/worlds/${selectedValueImpactMonster}${selectedWorldMain}.png`;
  }


  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //                    Previwe Export
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
  //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

  function handlePreviewExport() {
  const textPV = document.getElementById("textPV");
  const textS = document.getElementById("sizenm");
  const textA = document.getElementById("atknm");
  const textD = document.getElementById("defnm");
  const textE = document.getElementById("nub_");
  const textN = document.getElementById("name");
  const textAt = document.getElementById("att");
  const SE = document.getElementById("se");
  const spankeys = document.querySelectorAll('#spankey');
  const atknm = document.getElementById("atknm");
  const crinm = document.getElementById("crinm");
  const defnm = document.getElementById("defnm");
  const custom2 = document.getElementById("custom2");

  
  // change
  if (textPV) textPV.style.transform = "translateX(-13px)";
  if (textA) textA.style.transform = "translateY(5px)";
  if (textD) textD.style.transform = "translateY(-5px)";
  if (textS) textS.style.transform = "translate(12px,-9px)";
  if (textE) textE.style.transform = "translate(12px,-1.5px)";
  if (textN) textN.style.transform = "translate(12px,-12.5px)";
  if (textAt) textAt.style.transform = "translate(12px,-10.5px)";
  if (SE) SE.style.transform = "translate(2px,-5.5px)";
  spankeys.forEach((spankey) => {
    if (spankey instanceof HTMLElement) {
      spankey.style.transform = "translate(0px, 8px)";
    }
  });
  custom2.style.transform = "translate(12px,-10.5px)";
  if (selectedWorldMain == 'aw' || selectedWorldL == 'awl'){
    atknm.style.transform = "translate(0px,4px)";
    crinm.style.transform = "translate(0px,0)";
    defnm.style.transform = "translate(0px,-4px)";
  }
  if (selectedWorldMain == 'du' || selectedWorldL == 'dul'){
    atknm.style.transform = "translate(-5px,0)";
    crinm.style.transform = "translate(-10px,0)";
    defnm.style.transform = "translate(-5px,0)";
  }
  if (selectedWorldMain == 'dg' || selectedWorldL == 'dgl'){
    atknm.style.transform = "translate(1px,-3px)";
    crinm.style.transform = "translate(-4px,-3px)";
    defnm.style.transform = "translate(1px,-2px)";
  }
  if (selectedWorldMain == 'dr' || selectedWorldL == 'drl'){
    atknm.style.transform = "translate(1px,-3px)";
    crinm.style.transform = "translate(-4px,-3px)";
    defnm.style.transform = "translate(1px,-2px)";
  }
  if (selectedWorldMain == 'kn' || selectedWorldL == 'knl'){
    atknm.style.transform = "translate(-4.5px,-3px)";
    crinm.style.transform = "translate(-15px,-3px)";
    defnm.style.transform = "translate(-4.5px,-2px)";
  }
  if (selectedWorldMain == 'lw' || selectedWorldL == 'lwl'){
    atknm.style.transform = "translate(-4.5px,-3px)";
    crinm.style.transform = "translate(-14px,-3px)";
    defnm.style.transform = "translate(-4.5px,-2px)";
  }
  if (selectedWorldMain == 'ls' || selectedWorldL == 'lsl'){
    atknm.style.transform = "translate(-5.5px,-0)";
    crinm.style.transform = "translate(-15px,-0)";
    defnm.style.transform = "translate(-5.5px,-0)";
  }
  if (selectedWorldMain == 'mw' || selectedWorldL == 'mwl'){
    atknm.style.transform = "translate(-5.5px,-0)";
    crinm.style.transform = "translate(-15px,-0)";
    defnm.style.transform = "translate(-5.5px,-0)";
  }
  if (selectedWorldMain == 'st_c' || selectedWorldL == 'st_cl'){
    atknm.style.transform = "translate(5.5px,-0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(5.5px,-0)";
  }
  if (selectedWorldMain == 'st' || selectedWorldL == 'stl'){
    atknm.style.transform = "translate(0px,-0)";
    crinm.style.transform = "translate(-2,-0)";
    defnm.style.transform = "translate(0px,-0)";
  }
  if (selectedWorldMain == 'gr_c'){
    atknm.style.transform = "translate(5.5px,-0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(5.5px,-0)";
  }
  if (selectedWorldMain == 'gr'){
    atknm.style.transform = "translate(1px,-0)";
    crinm.style.transform = "translate(-3px,-0)";
    defnm.style.transform = "translate(1px,-0)";
  }
  if (selectedWorldMain == 'hw' || selectedWorldL == 'hwl' ){
    atknm.style.transform = "translate(3px,-0)";
    crinm.style.transform = "translate(-3px,-0)";
    defnm.style.transform = "translate(3px,-0)";
  }
  
  
  html2canvas(document.getElementById("img"), {
    scale: 6,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
    backgroundColor: null,
    useCORS: true,
    ignoreElements: (el) => el.classList.contains('ignore')
  })
  .then((canvas) => {
    const previewContainer = document.getElementById("PV-Export");
    previewContainer.innerHTML = ""; 
    previewContainer.appendChild(canvas);

    // reset
    if (textPV) textPV.style.transform = "translateX(0px)";
    if (textA) textA.style.transform = "translateX(0px)";
    if (textD) textD.style.transform = "translateY(0px)";
    if (textS) textS.style.transform = "translate(0px)";
    if (textE) textE.style.transform = "translate(0px)";
    if (textN) textN.style.transform = "translate(0px)";
    if (textAt) textAt.style.transform = "translate(0px)";
    if (SE) SE.style.transform = "translate(0px)";
    spankeys.forEach((spankey) => {
      if (spankey instanceof HTMLElement) {
        spankey.style.transform = "translate(0px, 0px)";
      }
    });
    if (selectedWorldMain == 'du' || selectedWorldL == 'dul'){
      atknm.style.transform = "translate(-0,0)";
      crinm.style.transform = "translate(-0,0)";
      defnm.style.transform = "translate(-0,0)";
    }
    custom2.style.transform = "translate(0px)";

    if (selectedWorldMain == 'dg' || selectedWorldL == 'dgl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'kn' || selectedWorldL == 'knl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'lw' || selectedWorldL == 'lwl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'ls' || selectedWorldL == 'lsl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'mw' || selectedWorldL == 'mwl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'st_c' || selectedWorldL == 'st_cl'){
      atknm.style.transform = "translate(0)";
      crinm.style.transform = "translate(0)";
      defnm.style.transform = "translate(0)";
    }
    if (selectedWorldMain == 'dr' || selectedWorldL == 'drl'){
    atknm.style.transform = "translate0)";
    crinm.style.transform = "translate(0)";
    defnm.style.transform = "translate(0)";
  }
  if (selectedWorldMain == 'gr_c'){
    atknm.style.transform = "translate(0)";
    crinm.style.transform = "translate(0,-0)";
    defnm.style.transform = "translate(0)";
  }
  if (selectedWorldMain == 'gr'){
    atknm.style.transform = "translate(0)";
    crinm.style.transform = "translate(0)";
    defnm.style.transform = "translate(0)";
  }

  });

}







let hiddenonoff = "overflow-hidden";
// let hiddenonoff = "";


/////////////////////////////////////////


</script>





<div class="fixed top-0 left-0 w-full p-4 flex justify-center items-center h-screen z-50 {iskeyUI ? '' : 'hidden'}">
  <KeyPage {keyUI}/>
</div>




<main class="relative flex justify-center items-center w-full p-4 ">
  <div class="flex justify-center items-center gap-[1rem] flex-wrap w-full">
    <!-- Export DIV -->
      <div id="img" class="relative {hiddenonoff} {selectedValue === 'ip' || selectedValue === 'dip' || selectedValue === 'im' || selectedValue === 'dim' ? 'w-[629px] h-[450.5px]' : 'w-[450.5px] h-[629px]'} bg-gray-900 rounded-2xl  flex items-center justify-center">
        <!-- text info PV -->
        <div id="textPV" class="absolute left-0 h-full w-full top-0 z-30 select-none pointer-events-none">
          <div id="custom" class="relative hidden">
            <div id="custom2">
              <p class="absolute sizeB">This is a fanmade card by Cake-BF.com</p>
              <p class="absolute">This is a fanmade card by Cake-BF.com</p>
            </div>
          </div>
          <!-- Size -->
          <div id="sizenm" class="relative [0px] h-[0px] text-center">
            <div class="{mons()}">
              <p id="sbold" class="absolute inset-0 origin-top-right h-[1px] sizeB ">{size}</p>
              <p id="pbold" class="absolute inset-0 origin-top-right h-[1px] sizeshadow">{size}</p>
              <p id="pmain" class="absolute inset-0 origin-top-right h-[1px]">{size}</p>
            </div>
          </div>
          <!-- DEF -->
          <div id="defnm" class="relative [0px] h-[0px] text-start">
            <div class="{mond()}">
              <p id="dbold" class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px] textb">{def}</p>
              <p class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px]">{def}</p>
            </div>
          </div>
          <!-- CRI -->
          <div id="crinm" class="relative [0px] h-[0px] text-center">
            <div class="{monc()}">
              <p id="cbold" class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px] textb">{cri}</p>
              <p class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px]">{cri}</p>
            </div>
          </div>
          <!-- ATK -->
          <div id="atknm" class="relative [0px] h-[0px] {selectedWorldMain == 'dr' || selectedWorldL == 'drl' ? 'text-start' : 'text-end'}">
            <div class="{monp()}">
              <p id="pbold" class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px] textb">{power}</p>
              <p id="pshadows" class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px]">{power}</p>
              <p class="absolute inset-0 rotate-[-90deg] origin-top-right h-[1px]">{power}</p>
            </div>
          </div>
          
          
          <!-- Attibute -->
          <div id="att" class="relative [0px] h-[0px] att text-center">
            <div style="transform: translateX({AttMove}px) scale({AttScalex}%, 1);">
              <div class="{monatt()}">
                <p id="abold" class="absolute inset-0 origin-top-right h-[1px] ">{att}</p>
                <p id="ashadows" class="absolute inset-0 origin-top-right h-[1px] ">{att}</p>
                <p id="matt" class="absolute inset-0 origin-top-right h-[1px]">{att}</p>
              </div>
            </div>
          </div>
          
          <!-- Name -->
          <div id="name" class="relative h-[0px] name text-center">
            <div style="transform: translateX({NameMove}px) scale({NameScalex}%, 1);">
              <div class="{monname()}">
                <p id="nbold" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
                
                {#if selectedWorldMain == "st_c"}
                  <p id="nshadow" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
                  <p id="nshadow" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
                  <p id="nshadow" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
                {/if}
            
                <p id="nshadow" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
                <p id="mname" class="absolute inset-0 origin-top-right h-[1px]">{name}</p>
              </div>
            </div>
          </div>

          <!-- Effect -->
          <div id="nub" class="translate-y-[{countE}px]">
            <div id="nub_">
              <div id="se_" class="flex h-[300px] border-blue-400 scale-x-[0.9] translate-y-[{effectY}px] translate-x-[{effectX}px]">
                <!-- {#if selectedWorldMain == "ls"}
                <div id="se" class="absolute text-start self-end break-words whitespace-pre-wrap inline-block w-full textb {effcolor}">{@html $effect}</div>
                {/if} -->
                <div id="se" class="absolute text-start self-end break-words whitespace-pre-wrap inline-block w-full {effcolor}">{@html $effect}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chaos/100Demon -->
      <div class="relative w-full h-full left-0 top-0 z-20 select-none pointer-events-none">
        <img src="/assets/chaos.png" alt="" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 {ischaos ? '' : 'hidden'}">
        <img src="/assets/hundred.png" alt="" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 {isHdemon ? '' : 'hidden'}">
        <img src="/assets/ReB.png" alt="" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 {isReB ? '' : 'hidden'}">
        <img src="/assets/fm2.png" alt="" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0">
      </div>
      
        <!-- image Card Type -->
      <div id="world" class="absolute top-0 left-0 w-full h-full z-10 select-none pointer-events-none">
        {#if selectedValue === "m"}
        <div class="relative w-full h-full">
          {#if (lineCount != 0 && selectedWorldMain != "mw" && selectedWorldMain != "ls" && selectedWorldMain != "kn")}
            <img src="/assets/Textboxs/m{selectedWorldMain}e{lineCount}.png" alt="" class="w-full h-full object-cover rounded-2xl absolute {selectedWorldMain == 'cs' || selectedWorldMain == 'dn'  ? 'i-zm1':''}">
          {/if}
          <img src={getM()} alt="" class="w-full h-full object-cover rounded-2xl"/>
        </div>
        {:else if selectedValue === "dm"}
          <div class="relative w-full h-full">
            {#if (lineCount != 0)}
            <img src="/assets/Textboxs/mdle{lineCount}.png" alt="" class="w-full h-full object-cover rounded-2xl absolute i-zm1">
            {/if}
            <img src={getDML()} alt="Dual Monster" class="w-full h-full object-cover rounded-2xl"/>
            <img src={getDMR()} alt="Dual Monster" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 z-10"/>
          </div>
        {:else if selectedValue === "s"}
          <img src={getS()} alt="Spell" class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "ds"}
          <div class="relative w-full h-full">
            <img src={getDSL()} alt="Dual Spell"class="w-full h-full object-cover rounded-2xl"/>
            <img src={getDSR()} alt="Dual Spell"class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 z-10"/>
          </div>
        {:else if selectedValue === "i"}
          <img src="item.png"alt="Item"class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "di"}
          <img src="dual-item.png"alt="Dual Item"class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "ip"}
          <img  src={getIP()} alt="Impact"class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "dip"}
          <img src="dual-impact.png"alt="Dual Impact"class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "im"}
          <img src={getIM()} alt="Impact Monster"class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "dim"}
          <img src="dual-impact-monster.png"alt="Dual Impact Monster"class="w-full h-full object-cover rounded-2xl"/>
        {/if}
      </div>


      <!-- BG image -->
      <div id="img_bg" bind:this={imageContainer} class="absolute top-0 left-0 w-full h-full flex items-center justify-center i-z0">
        {#if imageSrc}
          <img bind:this={dpim} src={imageSrc} alt=""class="select-none pointer-events-none"/>
        {:else}
        <p>No image</p>
          <!-- <img bind:this={dpim} src="/bg.png" alt=""class="select-none pointer-events-none"/> -->
        {/if}
      </div>
    </div>










    

    <!-- cardinfo -->
    <div class="sd:block md:flex w-[600px] md:w-[781px] md:h-[629px] sd:h-[1000px] h-[1000px] bg-gray-900 rounded-2xl shadow-lg shadow-black">
      <div class=" mt-4 sd:mt-4 md:mt-2">
        <BTNcontrol {handleImageUpload}{toggleLock}{resetPosition}{handleDownload}{isLocked}{ischaos}{togglechaos}{isHdemon}{toggleHdemon}{isSetting}{toggleSetting}{isReB}{toggleReB}{keyUI}/>  
      </div>
      
      <div id="cardinfo" class="md:w-2/3 h-[629px] mt-4 md:mt-0 border-l-4 border-gray-800 {isSetting ? 'hidden' : ''}">
        <CardSelect bind:selectedValue bind:selectedWorldL bind:selectedWorldR bind:selectedWorldMain/>
        <div class="w-full border-t-4 border-gray-800 mt-5"></div>
        <Infocard bind:power bind:cri bind:def bind:size bind:att bind:name bind:set bind:illust bind:flavor bind:lineCount/>
      </div>

      <div class="md:w-2/3 h-[690px] sd:h-[690px] md:h-[629px] border-l-4 mt-4 md:mt-0 border-gray-800 {isSetting ? '' : 'hidden'}">
        <Setting bind:countE bind:effcolor bind:NameScalex bind:NameMove bind:AttScalex bind:AttMove/>
      </div>

    </div>
  </div>
</main>

<div class="">
  <button on:click={handlePreviewExport} class="my-10 btn-pv">Preview Export</button>
  <div id= "PV-Export" class="mb-10"></div>
</div>





<style>
  @font-face {
    font-family: 'ChamBold';
    src: url('/assets/Fonts/PSLxChamnarnBold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Cham';
      src: url('/assets/Fonts/PSLxChamnarn.ttf') format('truetype');
  }

  @font-face {
      font-family: 'legendpower';
      src: url('/assets/Fonts/legendpower.ttf') format('truetype');
  }

  @font-face {
      font-family: 'compacta';
      src: url('/assets/Fonts/compacta_mt_bold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'matura';
      src: url('/assets/Fonts/magic power.otf') format('opentype');
  }
  @font-face {
      font-family: 'chaos';
      src: url('/assets/Fonts/Chaospower.ttf') format('truetype');
  }
  @font-face {
      font-family: 'dark';
      src: url('/assets/Fonts/Darkness Power.ttf') format('truetype');
  }
  @font-face {
      font-family: 'hero';
      src: url('/assets/Fonts/Hero power.otf') format('opentype');
  }
  @font-face {
      font-family: 'lost';
      src: url('/assets/Fonts/Lostw_number-Regular.ttf') format('truetype');
  }


  
  .name{
    font-family: 'ChamBold';
    font-size: 18pt;
    white-space: nowrap;
    text-align: center;
    #name {
    display: inline-block; 
  }

    .namesdual{
      transform: translateY(572px);
    }
    .namesaw{
      transform: translate(4.3px,561px) skewX(-14deg);
      #nshadow{
        text-shadow: 0px 2px 4px rgba(0, 1, 1, 1);
      }
    }
    
    .namescs{
      transform: translate(4.3px,557.5px) skewX(-14deg);
    }
    .namesdr{
      transform: translate(67.3px,570.5px) skewX(-14deg);
      color: #F61721;

      #nbold{
        -webkit-text-stroke: 4px #000;
      }
      #nshadow{
        text-shadow: 0px 3px 2.5px rgba(0, 1, 1, 1);
      }
      
    }
    .namesdn{
      transform: translate(67.3px,567.5px) skewX(-14deg);
      color: #000;
      #nbold{
        -webkit-text-stroke: 4px #fff;
      }
    }
    .namesdu{
      transform: translate(9.3px,560.5px) skewX(-14deg);
      color: #382518;
      #nbold{
        -webkit-text-stroke: 2px #fff;
      }
    }
    .namesdg{
      transform: translate(67.3px,567.5px) skewX(-14deg);
      #nshadow{
        text-shadow: 0px 3px 2.5px rgba(0, 1, 1, 1);
      }
    }
    .namesgr_c{
      transform: translate(55.3px,567.5px);
      color: #000;
    }
    .namesgr{
      transform: translate(53.3px,563.5px);
      color: #000;
    }
    .nameshw{
      transform: translate(75.3px,569.5px) skewX(-14deg);
      color: #FCF504;
    }
    .nameskn{
      transform: translate(65.3px,560.5px) skewX(-14deg);
      color: #000;
    }
    .nameslw{
      transform: translate(18.3px,571px) skewX(-14deg);
      color: #000;
    }
    .namesls{
      transform: translate(6.3px,573px) skewX(-14deg);

      #nbold{
        -webkit-text-stroke: 4px #000;

      }
    }
    .namesmw{
      transform: translate(80.3px,573px) skewX(-14deg);

      #nbold{
        -webkit-text-stroke: 4px #000;
      }
    }
    .namesst_c{
      transform: translate(5.5px,573px) skewX(-14deg);
      #nshadow{
        text-shadow: 0px 0px 15px #3AA8BF;
      }
    }
    .namesst{
      transform: translate(5.5px,573px) skewX(-14deg);
      #nshadow{
        text-shadow: 0px 2px 8px #000;
      }
    }
    .namesgc{
      transform: translate(5.5px,564px) skewX(-14deg);
      color: #000;
      #nbold{
        -webkit-text-stroke: 4px #fff;
      }
    }
    .namesdrg{
      transform: translate(5.5px,564px) skewX(-14deg);
      color: #ffffff;
      #nbold{
        -webkit-text-stroke: 4px #000000;
      }
    }
  }


  
  .att{
    font-family: 'ChamBold';
    font-size:13pt;
    white-space: nowrap;
    text-align: center;

    .attdual{
      transform: translateY(550px);
    }

    .attaw{
      transform: translate(-92px,494.3px) skewX(-12deg);
      #abold{
        -webkit-text-stroke: 4px #000;
      }
      #ashadows{
        text-shadow: 0px 3px 2.5px rgba(0, 1, 1, 1);
      }
    }
    .attcs{
      transform: translate(-75px,519.3px) skewX(-12deg);
    }
    .attdr{
      transform: translate(-100px,524.3px) skewX(-12deg);
      color: #000;
    }
    .attdn{
      transform: translate(-103px,531.3px) skewX(-12deg);
      #ashadows{
        text-shadow: 0px 2px 2.5px rgba(0, 1, 1, 1);
      }
    }
    .attdu{
      transform: translate(-45px,515.3px) skewX(-12deg);
      color: #382518;
    }
    .attdg{
      transform: translate(-103px,530.3px) skewX(-12deg);
    }
    .attgr_c{
      transform: translate(-73px,533.3px);
      color: #000;
    }
    .attgr{
      transform: translate(-57px,530.3px);
      color: #000;
    }
    .atthw{
      transform: translate(-65px,528.3px) skewX(-12deg);
      color: #FCF504;
    }
    .attkn{
      transform: translate(-140px,553.3px) skewX(-12deg);
      color: #000;
    }
    .attlw{
      transform: translate(-117px,524.3px) skewX(-12deg);
      color: #000;
    }
    .attls{
      transform: translate(5px,524.3px) skewX(-12deg);

      #abold{
        -webkit-text-stroke: 4px #000;
      }
    }
    .attmw{
      transform: translate(-102px,537.3px) skewX(-12deg);
    }
    .attst_c{
      transform: translate(-90px,508.3px) skewX(-12deg);

      #ashadows{
        text-shadow: 0px 1px 5px rgba(0, 1, 1, 1);
      }
    }
    .attst{
      transform: translate(-100px,508.3px) skewX(-12deg);

      #ashadows{
        text-shadow: 0px 1px 5px #3AA8BF;
      }
    }
    .attgc{
      transform: translate(7px,535.3px) skewX(-12deg);
      color: #000;
    }
    .attdrg{
      transform: translate(-89px,518.3px) skewX(-12deg);

      #abold{
        -webkit-text-stroke: 4px #000;
      }
    }
  }



  .textb{
    -webkit-text-stroke: 5px #000;
  }
  .sizeB{
    -webkit-text-stroke: 3px #000;
  }
  .sizeshadow{
    text-shadow: 2px 2px 4px rgba(0, 1, 1, 1);
  }
  .nameshadow{
    text-shadow: 1.5px 1.5px 2.6px rgba(0, 1, 1, 1);
  }



  #atknm{
    color: #de2222;
    white-space: nowrap;
    letter-spacing: 1px;

    .awp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-452px,372px) skew(-18deg) rotate(-18deg);
    }
    .csp{
      font-family: 'chaos';
      font-size: 22pt;
      transform: translate(-445px,283px);
    }
    .drp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-445px,-120px) skew(10deg) rotate(10deg);
    }
    .dnp{
      font-family: 'dark';
      font-size: 22pt;
      transform: translate(-440px,253px) skew(10deg) rotate(10deg) scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }

    }
    .dup{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-425px,238px) skew(10deg) rotate(10deg) scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dgp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-442.5px,256px) skew(10deg) rotate(10deg);
    }
    .gr_cp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-435px,295px);
    }
    .grp{
      font-family: 'chaos';
      font-size: 18pt;
      transform: translate(-433px,299px);
    }
    .hwp{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-442.5px,262px) skew(10deg) rotate(10deg) scaleY(80%);
    }
    .knp{
      font-family: 'matura';
      font-size: 16pt;
      transform: translate(-498.5px,298px) scaleX(130%);
    }
    .lwp{
      font-family: 'legendpower';
      font-size: 20pt;
      transform: translate(-438.5px,255.5px) skew(10deg) rotate(10deg);
    }
    .lsp{
      font-family: 'lost';
      font-size: 32pt;
      transform: translate(-456px,295px);
      color: #fff;
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .mwp{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-433px,292px)scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_cp{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-441.5px,266px) skew(10deg) rotate(10deg) scaleY(80%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .stp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-444.5px,263px) skew(10deg) rotate(10deg);
    }
  }



  #crinm{
    color: #ffffff;
    white-space: nowrap;
    letter-spacing: 1px;

    .awc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-430px,40.5px) ;
    }
    .csc{
      font-family: 'chaos';
      font-size: 28pt;
      transform: translate(-453px,37px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .drc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-453px,2px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 5px #000;
      }
    }
    .dnc{
      font-family: 'dark';
      font-size: 28pt;
      transform: translate(-440px,-5px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .duc{
      font-family: 'matura';
      font-size: 28pt;
      transform: translate(-433px,-8px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dgc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-444px,-1px) skew(10deg) rotate(10deg);
    }
    .gr_cc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-444px,40px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .grc{
      font-family: 'chaos';
      font-size: 27pt;
      transform: translate(-442px,46px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .hwc{
      font-family: 'hero';
      font-size: 28pt;
      transform: translate(-456.5px,48px) skew(10deg) rotate(10deg) scaleY(80%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .knc{
      font-family: 'matura';
      font-size: 28pt;
      transform: translate(-510.5px,48px) scaleX(130%);
    }
    .lwc{
      font-family: 'legendpower';
      font-size: 31pt;
      transform: translate(-448.5px,-6px) skew(10deg) rotate(10deg);
    }
    .lsc{
      font-family: 'lost';
      font-size: 45pt;
      transform: translate(-470px,38px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 4px #fff;
      }
    }
    .mwc{
      font-family: 'matura';
      font-size: 31pt;
      transform: translate(-440px,65px) scaleY(90%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_cc{
      font-family: 'hero';
      font-size: 28pt;
      transform: translate(-451.5px,54px) skew(10deg) rotate(10deg) scaleY(80%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .stc{
      font-family: 'compacta';
      font-size: 30pt;
      transform: translate(-454px,10px) skew(10deg) rotate(10deg);
    }

  }

  #defnm{
    color: #00b3eb;
    white-space: nowrap;
    letter-spacing: 1px;

    .awd{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-452px,-270px) skew(18deg) rotate(18deg);
    }
    .csd{
      font-family: 'chaos';
      font-size: 22pt;
      transform: translate(-445px,-207px);
    }
    .drd{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-445px,-280px) skew(10deg) rotate(10deg);
    }
    .dnd{
      font-family: 'dark';
      font-size: 22pt;
      transform: translate(-440px,-213px) skew(10deg) rotate(10deg) scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dud{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-425px,-203px) skew(10deg) rotate(10deg) scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dgd{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-442.5px,-252px) skew(10deg) rotate(10deg);
    }
    .gr_cd{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-435px,-220px);
    }
    .grd{
      font-family: 'chaos';
      font-size: 18pt;
      transform: translate(-433px,-202px);
    }
    .hwd{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-442.5px,-162px) skew(10deg) rotate(10deg) scaleY(80%);
    }
    .knd{
      font-family: 'matura';
      font-size: 16pt;
      transform: translate(-498.5px,-200.5px) scaleX(130%);
    }
    .lwd{
      font-family: 'legendpower';
      font-size: 20pt;
      transform: translate(-438.5px,-264.5px) skew(10deg) rotate(10deg);
    }
    .lsd{
      font-family: 'lost';
      font-size: 32pt;
      transform: translate(-456px,-215px);
      color: #fff;
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .mwd{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-433px,-160px)scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_cd{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-441.5px,-152px) skew(10deg) rotate(10deg) scaleY(80%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .std{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-444.5px,-245px) skew(10deg) rotate(10deg);
    }
  }


  #sizenm{
    font-family: 'compacta';
    font-size: 28pt;
    color: #ffd14d;
    white-space: nowrap;
    letter-spacing: 1px;
    
    .sizeaw{
      transform: translate(-170px,40px) scale(150%,70%);
    }
    .sizecs{
      transform: translate(-167px,30px) scale(150%,70%);
    }
    .sizedr{
      transform: translate(-170px,30px) scale(150%,70%);
    }
    .sizedn{
      transform: translate(-173px,35px) scale(150%,70%);
    }
    .sizedu{
      transform: translate(-173px,35px) scale(150%,70%);
    }
    .sizedg{
      transform: translate(-167px,35px) scale(150%,70%);
    }
    .sizegr_c{
      transform: translate(-167px,33px) scale(150%,70%);
    }
    .sizegr{
      transform: translate(-167px,31px) scale(150%,70%);
    }
    .sizehw{
      transform: translate(-170px,27px) scale(150%,70%);
    }
    .sizekn{
      transform: translate(-172px,33px) scale(150%,70%);
    }
    .sizelw{
      transform: translate(-172px,33px) scale(150%,70%);
    }
    .sizels{
      display: none;
    }
    .sizemw{
      transform: translate(-172px,35px) scale(150%,70%);
    }
    .sizest_c{
      transform: translate(-170px,29px) scale(150%,70%);
    }
    .sizest{
      transform: translate(-170px,29px) scale(150%,70%);
    }
  }


  p{
    user-select: none;
    pointer-events: none;
  }
  #nub{
    font-family: 'ChamBold';
  }
  .i-zm1{z-index: -1;}
  .btn-pv{
    background-color: #1A1A1A;
    padding: 3;
    font-weight: bold;
  }
  #custom{
    font-family: 'cham';
    transform: translate(110px,602px);
    font-size: 14pt;
  }


  #atknm{
    color: #de2222;
    white-space: nowrap;
    letter-spacing: 1px;

    .awlp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-452px,372px) skew(-18deg) rotate(-18deg);
    }
    .cslp{
      font-family: 'chaos';
      font-size: 22pt;
      transform: translate(-445px,283px);
    }
    .drlp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-445px,-120px) skew(10deg) rotate(10deg);
    }
    .dnlp{
      font-family: 'dark';
      font-size: 22pt;
      transform: translate(-440px,253px) skew(10deg) rotate(10deg) scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }

    }
    .dulp{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-434px,238px) skew(10deg) rotate(10deg) scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dglp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-442.5px,256px) skew(10deg) rotate(10deg);
    }
    .gr_clp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-435px,295px);
    }
    .grlp{
      font-family: 'chaos';
      font-size: 18pt;
      transform: translate(-433px,299px);
    }
    .hwlp{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-442.5px,262px) skew(10deg) rotate(10deg) scaleY(80%);
    }
    .knlp{
      font-family: 'matura';
      font-size: 16pt;
      transform: translate(-498.5px,298px) scaleX(130%);
    }
    .lwlp{
      font-family: 'legendpower';
      font-size: 20pt;
      transform: translate(-438.5px,255.5px) skew(10deg) rotate(10deg);
    }
    .lslp{
      font-family: 'lost';
      font-size: 32pt;
      transform: translate(-456px,295px);
      color: #fff;
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .mwlp{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-433px,292px)scaleY(90%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_clp{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-441.5px,266px) skew(10deg) rotate(10deg) scaleY(80%);
      #pbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .stlp{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-444.5px,263px) skew(10deg) rotate(10deg);
    }
  }



  #crinm{
    color: #ffffff;
    white-space: nowrap;
    letter-spacing: 1px;

    .awlc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-430px,40.5px) ;
    }
    .cslc{
      font-family: 'chaos';
      font-size: 28pt;
      transform: translate(-453px,37px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .drlc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-453px,2px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 5px #000;
      }
    }
    .dnlc{
      font-family: 'dark';
      font-size: 28pt;
      transform: translate(-440px,-5px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dulc{
      font-family: 'matura';
      font-size: 28pt;
      transform: translate(-440px,-8px) skew(10deg) rotate(10deg);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dglc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-444px,-1px) skew(10deg) rotate(10deg);
    }
    .gr_cc{
      font-family: 'compacta';
      font-size: 28pt;
      transform: translate(-444px,40px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .grlc{
      font-family: 'chaos';
      font-size: 27pt;
      transform: translate(-442px,46px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 5px #fff;
      }
    }
    .hwlc{
      font-family: 'hero';
      font-size: 28pt;
      transform: translate(-456.5px,48px) skew(10deg) rotate(10deg) scaleY(80%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .knlc{
      font-family: 'matura';
      font-size: 28pt;
      transform: translate(-510.5px,48px) scaleX(130%);
    }
    .lwlc{
      font-family: 'legendpower';
      font-size: 31pt;
      transform: translate(-448.5px,-6px) skew(10deg) rotate(10deg);
    }
    .lslc{
      font-family: 'lost';
      font-size: 45pt;
      transform: translate(-470px,38px);
      color: #000;
      #cbold{
        -webkit-text-stroke: 4px #fff;
      }
    }
    .mwlc{
      font-family: 'matura';
      font-size: 31pt;
      transform: translate(-440px,65px) scaleY(90%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_clc{
      font-family: 'hero';
      font-size: 28pt;
      transform: translate(-451.5px,54px) skew(10deg) rotate(10deg) scaleY(80%);
      #cbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .stlc{
      font-family: 'compacta';
      font-size: 30pt;
      transform: translate(-454px,10px) skew(10deg) rotate(10deg);
    }

  }

  #defnm{
    color: #00b3eb;
    white-space: nowrap;
    letter-spacing: 1px;

    .awld{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-452px,-270px) skew(18deg) rotate(18deg);
    }
    .csld{
      font-family: 'chaos';
      font-size: 22pt;
      transform: translate(-445px,-207px);
    }
    .drld{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-445px,-280px) skew(10deg) rotate(10deg);
    }
    .dnld{
      font-family: 'dark';
      font-size: 22pt;
      transform: translate(-440px,-213px) skew(10deg) rotate(10deg) scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .duld{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-434px,-203px) skew(10deg) rotate(10deg) scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .dgld{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-442.5px,-252px) skew(10deg) rotate(10deg);
    }
    .gr_cld{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-435px,-220px);
    }
    .grld{
      font-family: 'chaos';
      font-size: 18pt;
      transform: translate(-433px,-202px);
    }
    .hwld{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-442.5px,-162px) skew(10deg) rotate(10deg) scaleY(80%);
    }
    .knld{
      font-family: 'matura';
      font-size: 16pt;
      transform: translate(-498.5px,-200.5px) scaleX(130%);
    }
    .lwld{
      font-family: 'legendpower';
      font-size: 20pt;
      transform: translate(-438.5px,-264.5px) skew(10deg) rotate(10deg);
    }
    .lsld{
      font-family: 'lost';
      font-size: 32pt;
      transform: translate(-456px,-215px);
      color: #fff;
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .mwld{
      font-family: 'matura';
      font-size: 22pt;
      transform: translate(-433px,-160px)scaleY(90%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .st_cld{
      font-family: 'hero';
      font-size: 18pt;
      transform: translate(-441.5px,-152px) skew(10deg) rotate(10deg) scaleY(80%);
      #dbold{
        -webkit-text-stroke: 7px #000;
      }
    }
    .stld{
      font-family: 'compacta';
      font-size: 22pt;
      transform: translate(-444.5px,-245px) skew(10deg) rotate(10deg);
    }
  }


  #sizenm{
    font-family: 'compacta';
    font-size: 28pt;
    color: #ffd14d;
    white-space: nowrap;
    letter-spacing: 1px;
    
    .sizeawl{
      transform: translate(-170px,40px) scale(150%,70%);
    }
    .sizecsl{
      transform: translate(-167px,30px) scale(150%,70%);
    }
    .sizedrl{
      transform: translate(-170px,30px) scale(150%,70%);
    }
    .sizednl{
      transform: translate(-173px,35px) scale(150%,70%);
    }
    .sizedul{
      transform: translate(-173px,35px) scale(150%,70%);
    }
    .sizedgl{
      transform: translate(-167px,35px) scale(150%,70%);
    }
    .sizegr_cl{
      transform: translate(-167px,33px) scale(150%,70%);
    }
    .sizegrl{
      transform: translate(-167px,31px) scale(150%,70%);
    }
    .sizehwl{
      transform: translate(-170px,27px) scale(150%,70%);
    }
    .sizeknl{
      transform: translate(-172px,33px) scale(150%,70%);
    }
    .sizelwl{
      transform: translate(-172px,33px) scale(150%,70%);
    }
    .sizelsl{
      display: none;
    }
    .sizemwl{
      transform: translate(-172px,35px) scale(150%,70%);
    }
    .sizest_cl{
      transform: translate(-170px,29px) scale(150%,70%);
    }
    .sizestl{
      transform: translate(-170px,29px) scale(150%,70%);
    }
  }
</style>