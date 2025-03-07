<script>
  import html2canvas from "html2canvas";
  import { onMount, onDestroy } from "svelte";
  import BTNcontrol from "./lib/btncontrol.svelte";
  import CardSelect from "./lib/WSelect.svelte";
  import Infocard from "./lib/Infocard.svelte";


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
  let isLocked = false;
  let power = "1000";
  let cri = "1";
  let def = "1000";
  let size = "0";
  let att = "attibute";
  let name = "ชูื่อ";
  let set = "set01/0001";
  let illust = "illust";
  let effect = "";
  let ischaos = false;
  let isHdemon = false;


  // on/off chaos
  function togglechaos() {
    ischaos = !ischaos;
  }
  function toggleHdemon() {
    isHdemon = !isHdemon;
  }


  //funtion upload :)
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

  // move image
  function startDrag(event) {
    if (event.button !== 0 || isLocked) return;
    isDragging = true;
    const evt = event.touches ? event.touches[0] : event;
    initialMouseX = evt.clientX;
    initialMouseY = evt.clientY;
    imageContainer.style.cursor = "grabbing";
  }

  function drag(event) {
    if (!isDragging || isLocked) return;
    const evt = event.touches ? event.touches[0] : event;
    const deltaX = evt.clientX - initialMouseX;
    const deltaY = evt.clientY - initialMouseY;
    translateX += deltaX;
    translateY += deltaY;
    dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
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

    dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
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

  //reset img position
  function resetPosition() {
    translateX = 0;
    translateY = 0;
    scale = 1;
    dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  // Function download
  function handleDownload() {
  const textPV = document.getElementById("textPV");
  
  // change
  textPV.style.transform = "translateX(-10px)";

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
    // reset
    textPV.style.transform = "translateX(0px)";
  });
  }



  

  //funtion update worlds
  function getM() {
    return `./src/assets/worlds/${selectedValue}${selectedWorldMain}.png`;
  }
  function getDML() {
    return `./src/assets/worlds/${selectedValue}${selectedWorldL}.png`;
  }
  function getDMR() {
    return `./src/assets/worlds/${selectedValue}${selectedWorldR}.png`;
  }
  function getS() {
    return `./src/assets/worlds/${selectedValueSpell}${selectedWorldMain}.png`;
  }
  function getDSL(){
    return `./src/assets/worlds/${selectedValueDualSpell}${selectedWorldL}.png`;
  }
  function getDSR(){
    return `./src/assets/worlds/dm${selectedWorldR}.png`;
  }
  function getIP() {
    return `./src/assets/worlds/${selectedValueImpact}${selectedWorldMain}.png`;
  }
  function getIM() {
    return `./src/assets/worlds/${selectedValueImpactMonster}${selectedWorldMain}.png`;
  }
</script>



<main class="flex justify-center items-center w-full p-4">
  <div class="flex justify-center items-center gap-[5rem] flex-wrap w-full">
    <!-- Export DIV -->
      <div id="img" class="relative {selectedValue === 'ip' || selectedValue === 'dip' || selectedValue === 'im' || selectedValue === 'dim' ? 'w-[629px] h-[450.5px]' : 'w-[450.5px] h-[629px]'} bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
        
        <!-- text info PV -->
        <div id="textPV" class="relative w-full h-full left-0 top-0 z-30 select-none printer-event-none">
          <div id="" class="relative flex gap-4 h-full">
            <!-- ATK ซ้อนกัน -->
            <div class="relative w-[629px] text-end border">
              <div class="aw">
                <div class="absolute inset-0 rotate-[-90deg] origin-top-right border border-red-300 h-[30px]">{power}</div>
                <div class="absolute inset-0 rotate-[-90deg] origin-top-right border border-red-300 h-[30px]">{power}</div>
              </div>
              </div>
          
            <!-- CRI -->
            <div class="relative w-[629px] h-auto text-center">
              <div class="absolute inset-0 rotate-[-90deg] origin-top-right">{cri}</div>
              <div class="absolute inset-0 rotate-[-90deg] origin-top-right">{cri}</div>
            </div>
          
            <!-- DEF -->
            <div class="relative w-[629px] h-auto text-start">
              <div class="absolute inset-0 rotate-[-90deg] origin-top-right">{def}</div>
              <div class="absolute inset-0 rotate-[-90deg] origin-top-right">{def}</div>
            </div>
          </div>
          

          <!-- Name -->
          <div class="absolute name z-30 select-none text-center h-[50px] w-[400px] pointer-events-none border">
            <p class="namesaw textb absolute p-3 border">{name}</p>
            <p class="namesaw absolute p-3 border">{name}</p>
          </div>
  
        </div>
        <!-- Chaos/100Demon -->
      <div class="relative w-full h-full left-0 top-0 z-20 select-none pointer-events-none">
        <img src="./src/assets/chaos.png" alt="" class="w-full h-full object-cover rounded-2xl {ischaos ? '' : 'hidden'}">
        <img src="./src/assets/hundred.png" alt="" class="w-full h-full object-cover rounded-2xl absolute top-0 left-0 {isHdemon ? '' : 'hidden'}">
      </div>
      
        <!-- image Card Type -->
      <div id="world" class="absolute top-0 left-0 w-full h-full z-10 select-none pointer-events-none">
        {#if selectedValue === "m"}
          <img src={getM()} alt="" class="w-full h-full object-cover rounded-2xl"/>
        {:else if selectedValue === "dm"}
          <div class="relative w-full h-full">
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
      <div id="img_bg" bind:this={imageContainer} class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
        {#if imageSrc}
          <img bind:this={dpim} src={imageSrc} alt=""class="w-full h-full object-cover opacity-90 select-none pointer-events-none"/>
        {:else}
          <span class="text-white">No Image</span>
        {/if}
      </div>
    </div>


    <!-- cardinfo -->
    <div class="flex w-[650px] h-[629px] bg-gray-900 rounded-2xl shadow-lg shadow-black">
      <BTNcontrol {handleImageUpload}{toggleLock}{resetPosition}{handleDownload}{isLocked}{ischaos}{togglechaos}{isHdemon}{toggleHdemon}/>  
      <div id="cardinfo" class="w-2/3 h-[629px] border-l-4 border-gray-800">
        <CardSelect bind:selectedValue bind:selectedWorldL bind:selectedWorldR bind:selectedWorldMain/>
        <div class="w-full border-t-4 border-gray-800 mt-5"></div>
        <Infocard bind:power bind:cri bind:def bind:size bind:att bind:name bind:set bind:illust bind:effect/>
      </div>
    </div>
  </div>
</main>

<style>
  @font-face {
    font-family: 'ChamBold';
    src: url('./assets/Fonts/PSLxChamnarnBold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Cham';
      src: url('./assets/Fonts/PSLxChamnarn.ttf') format('truetype');
  }

  @font-face {
      font-family: 'legendpower';
      src: url('./assets/Fonts/legendpower.ttf') format('truetype');
  }

  @font-face {
      font-family: 'compacta';
      src: url('./assets/Fonts/compacta_mt_bold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'matura';
      src: url('./assets/Fonts/magic power.otf') format('opentype');
  }
  @font-face {
      font-family: 'chaos';
      src: url('./assets/Fonts/Chaospower.ttf') format('truetype');
  }
  .name{
    transform: translate(24.3px,555px);
    font-family: 'ChamBold';
    font-size: 18pt;
    white-space: nowrap;
    text-align: center;

    /* NameStyle */
    .namesaw{
      transform: translate(180px,-6px);
    }

    /* Namestroke */
    .textb{
        -webkit-text-stroke: 2px #000;
      }
  }
  .aw{
    font-family: 'compacta';
    font-size: 18pt;
    color: #de2222;
    white-space: nowrap;
    letter-spacing: 0.5px;
    transform: translate(-120px,300px);
  }
</style>