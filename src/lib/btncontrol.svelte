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
  </script>
  
  <div class="w-1/3">
    <!-- Import Image -->
    <div class="mt-6 w-full px-4">
      <label
        for="file-upload"
        class="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center block"
      >
        Upload Image
      </label>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        class="hidden"
        on:change={handleImageUpload}
      />
    </div>
  
    <!-- Lock/Unlock Button -->
    <div class="mt-2 w-full p-4">
      <button 
        on:click={toggleLock}
        class="cursor-pointer {isLocked ? 'bg-red-300 border border-white' : 'bg-green-300'} text-black px-7 py-2 rounded-lg w-full"
      >
        {isLocked ? 'Image (Lock)' : 'Image (Unlock)'}
      </button>
    </div>
  
    <!-- Reset Image Position Button -->
    <div class="mt-2 w-full px-4">
      <button 
        on:click={resetPosition}
        class="cursor-pointer bg-yellow-600 text-white px-7 py-2 rounded-lg w-full"
      >
        Reset Position
      </button>
    </div>
  
    <div class="w-full border-t-4 border-gray-800 mt-8"></div>
  
    <!-- Download Button -->
    <div class="mt-8 w-full px-4">
      <button
        id="download"
        class="cursor-pointer bg-green-600 text-white px-7 py-2 rounded-lg w-full"
        on:click={handleDownload}
      >
        Download
      </button>
    </div>
  
    <!-- Keywords Button -->
    <div class="mt-6 w-full px-4">
      <label
        for="keyword-btn"
        class="cursor-pointer bg-red-600 text-white px-7 py-2 rounded-lg w-full text-center block"
      >
        Keywords
      </label>
    </div>

    <!-- Chaos Button -->
    <div class="mt-6 w-full px-4">
      <button 
        on:click={togglechaos}
        class="cursor-pointer 
        {ischaos ? 'bg-purple-600 text-white border border-white' : 'bg-purple-400 text-black'} 
        px-7 py-2 rounded-lg w-full"
      >
        {ischaos ? 'Chaos (On)' : 'Chaos (Off)'}
      </button>
    </div>
    <!-- 100Demon Button -->
    <div class="mt-6 w-full px-4">
      <button 
        on:click={toggleHdemon}
        class="cursor-pointer 
        {isHdemon ? 'bg-red-600 text-white border border-white' : 'bg-red-400 text-black'} 
        px-7 py-2 rounded-lg w-full"
      >
        {isHdemon ? '100Demon (On)' : '100Demon (Off)'}
      </button>
    </div>
  </div>
  