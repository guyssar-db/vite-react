<script>
    export let power;
    export let cri;
    export let def;
    export let size;
    export let att;
    export let name;
    export let set;
    export let illust;
    export let effect;
</script>
<div class="px-4">
    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center">
      <input
        type="number"
        bind:value={power}
        placeholder="ATK"
        class="w-1/3 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
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
        class="w-1/3 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
    </div>
    <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
      <input
        type="number"
        bind:value={size}
        placeholder="Size"
        class="w-1/2 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
      <input
        type="text"
        bind:value={att}
        placeholder="Attibute"
        class="w-1/2 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
    </div>
    <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
      <input
        type="text"
        bind:value={name}
        placeholder="Name"
        class="w-full p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
    </div>
    <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
      <input
        type="text"
        bind:value={set}
        placeholder="Card Set"
        class="w-1/2 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
      <input
        type="text"
        bind:value={illust}
        placeholder="Illust"
        class="w-1/2 p-2 rounded-lg bg-gray-800 text-white text-center no-spinner"
      />
    </div>
    <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
      <textarea
        bind:value={effect}
        class="w-full h-[195px] p-2 rounded-lg bg-gray-800 text-white no-spinner resize-none"
      ></textarea>
    </div>
  </div>
  
  <style>
    .no-spinner::-webkit-inner-spin-button,
    .no-spinner::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  </style>
  