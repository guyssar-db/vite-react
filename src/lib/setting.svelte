<script>
    import { setContext } from "svelte";
    export let NameScalex = 100;
    export let NameMove = "0";
    export let effcolor;
    export let countE = "0";
    export let AttScalex = 100;
    export let AttMove = "0";
    
    
    function EffUp() {countE = (parseInt(countE) + 1).toString();}
    function EffDown() {countE = (parseInt(countE) - 1).toString();}
    function EffUp5() {countE = (parseInt(countE) + 5).toString();}
    function EffDown5() {countE = (parseInt(countE) - 5).toString();}
    function EffReset() {countE = (0).toString();}
    setContext("countE", countE);


    function Nleft() {NameMove = (parseInt(NameMove) - 1).toString();}
    function Nright() {NameMove = (parseInt(NameMove) + 1).toString();}
    function Nleft5() {NameMove = (parseInt(NameMove) - 5).toString();}
    function Nright5() {NameMove = (parseInt(NameMove) + 5).toString();}
    function NameMoveReset() {NameMove = (0).toString();}
    setContext("NameMove", NameMove);

    function Attleft() {AttMove = (parseInt(AttMove) - 1).toString();}
    function Attright() {AttMove = (parseInt(AttMove) + 1).toString();}
    function Attleft5() {AttMove = (parseInt(AttMove) - 5).toString();}
    function Attright5() {AttMove = (parseInt(AttMove) + 5).toString();}
    function AttMoveReset() {AttMove = (0).toString();}
    setContext("AttMove", AttMove);


</script>

<div class="px-4 mt-2 overflow-y-scroll overflow-hidden h-[690px] md:h-[610px] ">
    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center">
        <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
            <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">
                Setting
            </p>
        </div>
    </div>
    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center bg-gray-800 p-3">
        <div class="w-full gap-2 rounded-lg text-white text-center">
            <p>Effect Setting</p>
            <div class="flex gap-2 w-full mt-2">
                <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">
                   Effect Y : {countE}px
                </p>
            </div>
            <div class="flex gap-1 w-full px-3 mt-4">
                <button id="Nleft" on:click={EffReset} class="cursor-pointer bg-red-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Reset </button>
            </div>
            <div class="flex gap-1 w-full px-3 mt-1">
                <button id="efDown"on:click={EffDown} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block">Up 1 px</button>
                <button id="effUp" on:click={EffUp} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block">Down 1 px</button>
            </div>
            <div class="flex gap-1 w-full px-3 mt-1">
                <button id="efDown" on:click={EffDown5} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block">Up 5 px</button>
                <button id="effUp" on:click={EffUp5} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block">Down 5 px</button>
            </div>
            <select class="w-full px-7 py-6 md:py-2 rounded-lg mt-4 {effcolor == "text-black" ? "bg-gray-950 text-white":"bg-gray-300 text-black"} text-center" bind:value={effcolor}>
                <option value="text-white">Effect Color White</option>
                <option value="text-black">Effect Color Black</option>
            </select>
        </div>
    </div>
    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center bg-gray-800 p-3">
        <div class="w-full gap-2 rounded-lg text-white text-center">
            <p>Name Setting</p>
            <div class="flex gap-2 w-full my-2">
                <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">Scale X : {NameScalex}%</p>
            </div>
            <input id="range" type="range" min="0" max="100" bind:value={NameScalex} class="w-full h-2 bg-gray-300 rounded-full"/>
            <div class="flex gap-2 w-full my-2">
                <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">Move X : {NameMove}px</p>
            </div>
            <div class="w-full gap-2 rounded-lg text-white text-center">
                <div class="flex gap-1 w-full px-3 mt-4">
                    <button id="Nleft" on:click={NameMoveReset} class="cursor-pointer bg-red-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Reset </button>
                </div>
                <div class="flex gap-1 w-full px-3 mt-1">
                    <button id="Nleft" on:click={Nleft} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Left 1 px </button>
                    <button id="Nright" on:click={Nright} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Right 1 px </button>
                </div>
                <div class="flex gap-1 w-full px-3 mt-1">
                    <button id="Nleft" on:click={Nleft5} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Left 5 px </button>
                    <button id="Nright" on:click={Nright5} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Right 5 px </button>
                </div>
            </div>
        </div>
    </div>

    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center bg-gray-800 p-3">
        <div class="w-full gap-2 rounded-lg text-white text-center">
            <p>Attibute Setting</p>
            <div class="flex gap-2 w-full my-2">
                <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">Scale X : {AttScalex}%</p>
            </div>
            <input id="range" type="range" min="0" max="100" bind:value={AttScalex} class="w-full h-2 bg-gray-300 rounded-full"/>
            <div class="flex gap-2 w-full my-2">
                <p class="w-full px-7 py-6 md:py-2 rounded-lg bg-gray-950 text-white text-center">Move X : {AttMove}px</p>
            </div>
            <div class="w-full gap-2 rounded-lg text-white text-center">
                <div class="flex gap-1 w-full px-3 mt-4">
                    <button id="Nleft" on:click={AttMoveReset} class="cursor-pointer bg-red-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Reset </button>
                </div>
                <div class="flex gap-1 w-full px-3 mt-1">
                    <button id="Nleft" on:click={Attleft} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Left 1 px </button>
                    <button id="Nright" on:click={Attright} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Right 1 px </button>
                </div>
                <div class="flex gap-1 w-full px-3 mt-1">
                    <button id="Nleft" on:click={Attleft5} class="cursor-pointer bg-blue-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Left 5 px </button>
                    <button id="Nright" on:click={Attright5} class="cursor-pointer bg-green-500 text-white px-7 py-6 md:px-4 md:py-2 rounded-lg w-full text-center block"> Right 5 px </button>
                </div>
            </div>
        </div>
    </div>
</div>
