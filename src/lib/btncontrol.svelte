<script>
    export let handleImageUpload;
    export let resetPosition;
    export let handleDownload;
    export let toggleLock;
    export let isLocked;
    export let togglechaos;
    export let ischaos;
    export let toggleHdemon;
    export let isHdemon;
    export let toggleSetting;
    export let isSetting;
    export let toggleReB;
    export let isReB;
    export let keyUI;


  </script>
  <div class="h-[260px] sm:h-[270px] md:h-[620px] overflow-y-scroll md:block w1/3">
    <!-- Import Image -->
    <div class="w-full">
      <div class="mt-6 px-4">
        <label for="file-upload" class="cursor-pointer bg-blue-600 text-white px-4 py-5 md:py-2 rounded-lg block text-center">
          Upload Image
        </label>
        <input type="file" id="file-upload" accept="image/*" class="hidden" on:change={handleImageUpload} />
      </div>
  
      <!-- Lock/Unlock Button -->
      <div class="mt-2 p-4">
        <button 
          on:click={toggleLock} 
          class="cursor-pointer w-full px-7 py-6 md:py-2 rounded-lg 
                 text-black border border-white 
                 {isLocked ? 'bg-red-300' : 'bg-green-300'}">
          {isLocked ? 'Move Image (Lock)' : 'Move Image (Unlock)'}
        </button>
      </div>
  
      <!-- Reset Image Position Button -->
      <div class="mt-2 px-4">
        <button on:click={resetPosition} class="cursor-pointer bg-yellow-600 text-white px-7 py-6 md:py-2 rounded-lg w-full">
          Reset Position/zoom
        </button>
      </div>
    </div>
  
    <!-- <div class="w-full border-t-4 border-gray-800 mt-8 sm:hidden hidden"></div> -->
  
    <div class="w-full">
      <!-- Download Button -->
      <div class="md:mt-8 sm:mt-6 mt-6 px-4">
        <button id="download" on:click={handleDownload} class="cursor-pointer bg-green-600 text-white px-7 py-6 md:py-2 rounded-lg w-full">
          Download
        </button>
      </div>
  
      <!-- Keywords Button -->
      <div class="mt-6 px-4">
        <button id="download" on:click={keyUI} class="cursor-pointer bg-red-600  text-white px-7 py-6 md:py-2 rounded-lg w-full">
          Keywords
        </button>
      </div>
  
      <!-- Chaos Button -->
      <div class="mt-6 px-4">
        <button 
          on:click={togglechaos} 
          class="cursor-pointer w-full px-7 py-6 md:py-2 rounded-lg border border-white 
                 {ischaos ? 'bg-purple-600 text-white' : 'bg-purple-400 text-black'}">
          {ischaos ? 'Chaos (On)' : 'Chaos (Off)'}
        </button>
      </div>
    </div>
  
    <div class="w-full">
      <div>
        <!-- 100Demon Button -->
        <div class="mt-6 px-4">
          <button 
            on:click={toggleHdemon} 
            class="cursor-pointer w-full px-7 py-6 md:py-2 rounded-lg border border-white 
                   {isHdemon ? 'bg-purple-600 text-white' : 'bg-purple-400 text-black'}">
            {isHdemon ? '100Demon (On)' : '100Demon (Off)'}
          </button>
        </div>
  
        <!-- Re:B Button -->
        <div class="mt-6 px-4">
          <button 
            on:click={toggleReB} 
            class="cursor-pointer w-full px-7 py-6 md:py-2 rounded-lg border border-white 
                   {isReB ? 'bg-purple-600 text-white' : 'bg-purple-400 text-black'}">
            {isReB ? 'Re:B (On)' : 'Re:B (Off)'}
          </button>
        </div>
  
        <!-- Setting Button -->
        <div class="mt-6 px-4">
          <button 
            on:click={toggleSetting} 
            class="cursor-pointer w-full px-7 py-6 md:py-2 rounded-lg border border-white 
                   {isSetting ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}">
            {isSetting ? 'Setting (On)' : 'Setting (Off)'}
          </button>
        </div>
      </div>
    </div>
  </div>
  