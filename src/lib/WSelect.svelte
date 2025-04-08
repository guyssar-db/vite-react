<script>
    export let selectedValue;
    export let selectedWorldL;
    export let selectedWorldR;
    export let selectedWorldMain;
    let see = true;
  </script>
  
  <div class="px-4 mt-5">
    <label for="cardType" class="text-white block mb-2"
      >Select Card Type :</label
    >
    <select
      id="cardType"
      bind:value={selectedValue}
      class="w-full py-4 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white mb-2 text-center"
    >
      <option value="m">Monster</option>
      <option value="dm" class="bg-gray-700">Dual Monster</option>
      <option value="s" class="{see?'hidden':''}">Spell</option>
      <option value="ds" class="bg-gray-700 {see?'hidden':''}">Dual Spell</option>
      <option value="i" class="{see?'hidden':''}">Item</option>
      <option value="di" class="bg-gray-700  {see?'hidden':''}">Dual Item</option>
      <option value="ip" class="{see?'hidden':''}">Impact</option>
      <option value="dip" class="bg-gray-700  {see?'hidden':''}">Dual Impact</option>
      <option value="im" class="{see?'hidden':''}">Impact Monster</option>
      <option value="dim" class="bg-gray-700  {see?'hidden':''}">Dual Impact Monster</option>
    </select>

    {#if selectedValue === "dm" || selectedValue === "ds" || selectedValue === "di" || selectedValue === "dip" || selectedValue === "dim"}
      <div class="flex gap-2 mb-2">
        <div class="w-1/2">
          <label for="worldL" class="text-white block mb-1"
            >Select World L :</label
          >
          <select
            id="worldL"
            bind:value={selectedWorldL}
            class="w-full py-4 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center"
          >
            <option value="awl">Ancient</option>
            <option value="drl">Danger</option>
            <option value="dnl">Darkness</option>
            <option value="dul">Dungeon</option>
            <option value="dgl">Dragon</option>
            <option value="hwl">Hero</option>
            <option value="knl">Katana</option>
            <option value="lwl">Legend</option>
            <option value="mwl">Magic</option>
            <option value="st_cl">StarDragon (Classic)</option>
            <option value="stl">StarDragon</option>
          </select>
        </div>

        <div class="w-1/2">
          <label for="worldR" class="text-white block mb-1"
            >Select World R:</label
          >
          <select
            id="worldR"
            bind:value={selectedWorldR}
            class="w-full py-4 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center"
          >
            <option value="awr">Ancient</option>
            <option value="drr">Danger</option>
            <option value="dnr">Darkness</option>
            <option value="dur">Dungeon</option>
            <option value="dgr">Dragon</option>
            <option value="hwr">Hero</option>
            <option value="knr">Katana</option>
            <option value="lwr">Legend</option>
            <option value="mwr">Magic</option>
            <option value="st_cr">StarDragon (Classic)</option>
            <option value="str">StarDragon</option>
          </select>
        </div>
      </div>
    {:else if selectedValue === "m" || selectedValue === "s" || selectedValue === "i" || selectedValue === "ip" || selectedValue === "im"}
      <label for="worldMain" class="text-white block mb-1"
        >Select World :</label
      >
      <select
        id="worldMain"
        bind:value={selectedWorldMain}
        class="w-full py-4 md:py-2 md:px-2 rounded-lg bg-gray-800 text-white text-center"
      >
        <option value="aw">Ancient</option>
        <option value="cs">Chaos</option>
        <option value="dr">Danger</option>
        <option value="dn">Darkness</option>
        <option value="du">Dungeon</option>
        <option value="dg">Dragon</option>
        <option value="gr_c">Generic (Classic)</option>
        <option value="gr">Generic (New)</option>
        <option value="hw">Hero</option>
        <option class="hidden" value="hm">Hundred Demons</option>
        <option value="kn">Katana</option>
        <option value="lw">Legend</option>
        <option value="ls">LostWorld</option>
        <option value="mw">Magic</option>
        <option value="st_c">StarDragon (Classic)</option>
        <option value="st">StarDragon</option>
        <option class="hidden" value="drg">Dragod</option>
        <option class="hidden" value="gc">Timedragon</option>
      </select>
    {/if}
  </div>