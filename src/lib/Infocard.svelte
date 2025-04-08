<script>
  import {createEventDispatcher , onMount } from "svelte";
  import CardSelect from "./WSelect.svelte";
  
  export let power;
  export let cri;
  export let def;
  export let size;
  export let att;
  export let name;
  export let set;
  export let illust;
  export let flavor;
  let selectedWorldR;
  let selectedWorldL;
  let selectedWorldMain;
  let selectedValue;
  
  import { effect } from '../store';
   export let lineCount;
  function handleInput(event) {
    let ability = event.target.value;
    lineCount = ability.split("\n").length;

    ability = ability.replace(/\[evil\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Evil Deity.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[cost\]/g, '<span id="spankey" class="image-wrapper-COST"><img id="key" src="./assets/keywords/Cost.png" alt="Image" class="Iskill3 inline"></span>');
    ability = ability.replace(/\[buddygift\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/BuddyGift.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[1turn\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/1 per Turn Rag.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[1game\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/1 per Game Rag.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[1set\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/1 per set.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[anturn\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Ablility Name.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[cnturn\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Card Name.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[callcost\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Call Cost.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[castcost\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Cast Cost.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[equipcost\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Equip Cost.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[2attack\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Double Attack.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[3attack\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/TripleAttack.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[4attack\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Quadruple Attack.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[6attack\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Hextuple Attack.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[counter\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Counter.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[cattack\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Counter Attack.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[move\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Move.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[soulguard\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Soulguard.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[penetrate\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Penetrate.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[ambush\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Ambush.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[life1\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Link 1.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[life2\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Link 2.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[life3\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Link 3.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[life4\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Link 4.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[life5\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Link 5.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[lifelose\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Life Lose.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[\]/g, '<span id="spankey" class="image-wrapperfront"><img src="./assets/keywords/nctext.png" alt="Image" class="nctext inline"></span>');
    ability = ability.replace(/\[b\]/g, '<span id="spankey" class="image-wrapperfront"><img src="./assets/keywords/bnctext.png" alt="Image" class="nctext inline"></span>');
    ability = ability.replace(/\[omnilord\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Omni Lord-1.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[darkomnilord\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Omni Lord-2.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[ovt\]/g, '<span id="spankey" class="image-wrapper"><img id="key2" src="./assets/keywords/Overturn.png" alt="Image" class="Iskill3 inline"></span>');
    ability = ability.replace(/\[ovk\]/g, '<span id="spankey" class="image-wrapper"><img id="key2" src="./assets/keywords/Overkill.png" alt="Image" class="Iskill3 inline"></span>');
    ability = ability.replace(/\[ovr\]/g, '<span id="spankey" class="image-wrapper"><img id="key2" src="./assets/keywords/OverkillREBØØT.png" alt="Image" class="Iskill2 inline"></span>');
    ability = ability.replace(/\[ovh\]/g, '<span id="spankey" class="image-wrapper"><img id="key2" src="./assets/keywords/Overthrow.png" alt="Image" class="Iskill3 inline"></span>');
    ability = ability.replace(/\[ovd\]/g, '<span id="spankey" class="image-wrapper"><img id="key2" src="./assets/keywords/OverDrive.png" alt="Image" class="Iskill3 inline"></span>');
    ability = ability.replace(/\[weaponlink\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Weaponry Link.png" alt="Image" class="Iskill inline"></span>');

    ability = ability.replace(/\[reversal\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Reversal.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[shadowdive\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Shadow Dive.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[ride\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Ride.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[transform\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Transform.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[imform\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Impact Transform.png" alt="Image" class="Iskill inline"></span>');
    ability = ability.replace(/\[purge\]/g, '<span id="spankey" class="image-wrapper"><img id="key" src="./assets/keywords/Purge.png" alt="Image" class="Iskill inline"></span>');

    ability = ability.replace(/<</g, '<span id="minatt" class="skk2">《</span>');
    ability = ability.replace(/>>/g, '<span id="minatt2" class="skk">》</span>');
    ability = ability.replace(/{/g, '<span id="minatt" class="skk2">【</span>');
    ability = ability.replace(/}/g, '<span id="minatt2" class="skk">】</span>');
    ability = ability.replace('[', '<span class=\'under-line\'>[');
    ability = ability.replace(']', ']</span>');
    ability = ability.replace(/--/g, '<span class="skk-dot">•</span>');
    
    effect.set(ability);
  }


// const dispatch = createEventDispatcher();

// const ignoreChars = /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/g;


// $: cleanedNameLength = name.replace(ignoreChars, "").length;

// $: {
  
//   ssX = cleanedNameLength > 20  ? Math.max(0, 100 * Math.pow(0.98, cleanedNameLength - 20)) : 100;

//   dispatch("update", { ssX });
// }
</script>

<div class="px-4 overflow-y-scroll md:h-[420px] mt-2">
  <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center">
    <input
      type="number"
      bind:value={power}
      placeholder="ATK"
      class="w-1/3 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
    <input
      type="number"
      bind:value={cri}
      placeholder="CRI"
      class="w-1/3 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
    <input
      type="number"
      bind:value={def}
      placeholder="DEF"
      class="w-1/3 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
  </div>
  <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
    <input
      type="number"
      bind:value={size}
      placeholder="Size"
      class="w-1/2 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
    <input
      type="text"
      bind:value={att}
      placeholder="Attribute"
      class="w-1/2 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
  </div>

  <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
    <input
      type="text"
      bind:value={name}
      placeholder="Name"
      class="w-full py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
  </div>
  <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center hidden">
    <input
      type="text"
      bind:value={set}
      placeholder="Card Set"
      class="w-1/2 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
    <input
      type="text"
      bind:value={illust}
      placeholder="Illust"
      class="w-1/2 py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
  </div>
  <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center hidden">
    <input
      type="text"
      bind:value={flavor}
      placeholder="Flavor Text"
      class="w-full py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
    />
  </div>
  <p class="mt-2 hidden">จำนวนบรรทัด : {lineCount}</p>
  <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
    <textarea
      id="effect"
      class="w-full h-[195px] py-6 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white no-spinner resize-none"
      placeholder="Effect"
      on:input={handleInput}
    ></textarea>
  </div>
</div>
<div class="hidden">
  <CardSelect bind:selectedValue bind:selectedWorldL bind:selectedWorldR bind:selectedWorldMain/>
</div>
<style>
  .no-spinner::-webkit-inner-spin-button,
  .no-spinner::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  #effect{
    font-size: 15px;
  }
  
</style>
